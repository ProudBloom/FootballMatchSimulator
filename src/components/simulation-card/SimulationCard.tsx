import React, { useEffect, useState } from 'react';
import SimulationName from '../simulation-name/SimulationName';
import Match from '../match/Match';
import Button from '../button/Button';
import TotalGoals from '../total-goals/TotalGoals';
import { useSimulationContext } from '@/hooks/useSimulationContext';
import { SIMULATION_TIME } from '@/Globals.constants';

const SimulationCard = () => {
  const { simulationName, isRunning, time, startSimulation, stopSimulation, resetSimulation } =
    useSimulationContext();

  const renderButton = () => {
    if (time === 0) {
      return <Button onClick={startSimulation}>Start</Button>;
    } else if (time > 0 && time <= SIMULATION_TIME && isRunning) {
      return <Button onClick={stopSimulation}>Finish</Button>;
    } else {
      return <Button onClick={resetSimulation}>Restart</Button>;
    }
  };

  return (
    <div className='px-6 text-center border border-black'>
      <section>
        <SimulationName name={simulationName} />
      </section>

      <section>{renderButton()}</section>
      {/* TODO: delete this part*/}
      <div>time: {time}</div>

      <section className='w-full'>
        <div className='my-2'>
          <Match />
        </div>
        <div className='my-2'>
          <Match />
        </div>
        <div className='my-2'>
          <Match />
        </div>
      </section>

      <section className='text-sm text-end'>
        <TotalGoals />
      </section>
    </div>
  );
};

export default SimulationCard;
