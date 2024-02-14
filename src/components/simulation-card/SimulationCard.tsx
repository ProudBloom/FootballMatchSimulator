import SimulationName from '../simulation-name/SimulationName';
import Match from '../match/Match';
import Button from '../button/Button';
import TotalGoals from '../total-goals/TotalGoals';
import { useSimulationContext } from '@/hooks/useSimulationContext';
import { SIMULATION_TIME } from '@/Globals.constants';
import { SimulationCardProps } from './SimulationCard.types';
import { useEffect } from 'react';

const SimulationCard = ({ matchesData }: SimulationCardProps) => {
  const { simulationName, isRunning, time, startSimulation, stopSimulation, resetSimulation } =
    useSimulationContext();

  const renderButton = () => {
    if (time === 0) {
      return (
        <Button testID='startSimulationButton' onClick={startSimulation}>
          Start
        </Button>
      );
    } else if (time > 0 && time <= SIMULATION_TIME && isRunning) {
      return (
        <Button testID='endSimulationButton' onClick={stopSimulation}>
          Finish
        </Button>
      );
    } else {
      return (
        <Button testID='restartSimulationButton' onClick={resetSimulation}>
          Restart
        </Button>
      );
    }
  };

  return (
    <div className='px-6 text-center border border-black'>
      <section>
        <SimulationName name={simulationName} />
      </section>

      <section>{renderButton()}</section>

      <section className='w-full'>
        {matchesData.map((matchData) => {
          return (
            <div key={matchData.id} className='my-2'>
              <Match matchData={matchData} />
            </div>
          );
        })}
      </section>

      <section className='text-sm text-end'>
        <TotalGoals />
      </section>
    </div>
  );
};

export default SimulationCard;
