import { createContext, useEffect, useState } from 'react';
import { SimulationContextProviderProps, SimulationState } from './SimulationContext.types';
import { SIMULATION_TIME } from '@/Globals.constants';

export const SimulationContext = createContext({} as SimulationState);

export const SimulationContextProvider = ({ children }: SimulationContextProviderProps) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime < SIMULATION_TIME) {
            return prevTime + 1;
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
      alert('Simulation has started!');
      setIsRunning(true);
    }
  };

  const stopSimulation = () => {
    if (isRunning && time < SIMULATION_TIME) {
      alert('Simulation has been stopped!');
      setIsRunning(false);
    }
  };

  const resetSimulation = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <SimulationContext.Provider value={{ time, startSimulation, stopSimulation, resetSimulation }}>
      {children}
    </SimulationContext.Provider>
  );
};
