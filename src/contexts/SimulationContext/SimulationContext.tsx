import { createContext, useEffect, useState } from 'react';
import { SimulationContextProviderProps, SimulationState } from './SimulationContext.types';
import { SIMULATION_NAMES, SIMULATION_TIME } from '@/Globals.constants';

const initialMatches = [
  { id: 1, teams: ['Germany', 'Poland'], scores: [0, 0] },
  { id: 2, teams: ['Brazil', 'Mexico'], scores: [0, 0] },
  { id: 3, teams: ['Argentina', 'Uruguay'], scores: [0, 0] },
];

export const SimulationContext = createContext({} as SimulationState);

export const SimulationContextProvider = ({ children }: SimulationContextProviderProps) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [simulationName, setSimulationName] = useState('');
  const [matches, setMatches] = useState([...initialMatches]); // Spread to ensure a new reference
  const [totalGoals, setTotalGoals] = useState(0);

  useEffect(() => {
    setSimulationName(SIMULATION_NAMES[Math.floor(Math.random() * SIMULATION_NAMES.length)]);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const currentTime = prevTime + 1;
          if (currentTime <= SIMULATION_TIME) {
            if (currentTime % 2 === 0) {
              setMatches((currentMatches) => {
                const updatedMatches = currentMatches.map((match) => ({
                  ...match,
                  scores: [...match.scores],
                }));
                const matchIndex = Math.floor(Math.random() * updatedMatches.length);
                const teamIndex = Math.floor(Math.random() * 2);

                console.log('match: ', matchIndex);
                console.log('team: ', teamIndex);

                updatedMatches[matchIndex].scores[teamIndex] += 1;
                return updatedMatches;
              });

              setTotalGoals((prevTotalGoals) => prevTotalGoals + 1);
            }
            return currentTime;
          } else {
            clearInterval(interval);
            setIsRunning(false);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startSimulation = () => {
    if (!isRunning && time < SIMULATION_TIME) {
      setIsRunning(true);
    }
  };

  const stopSimulation = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetSimulation = () => {
    setTime(0);
    setIsRunning(false);
    setSimulationName(SIMULATION_NAMES[Math.floor(Math.random() * SIMULATION_NAMES.length)]);
    setMatches(initialMatches);
    setTotalGoals(0);
  };

  return (
    <SimulationContext.Provider
      value={{
        totalGoals,
        matches,
        simulationName,
        isRunning,
        time,
        startSimulation,
        stopSimulation,
        resetSimulation,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};
