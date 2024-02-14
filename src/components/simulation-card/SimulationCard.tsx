import React from 'react';
import SimulationName from '../simulation-name/SimulationName';
import Match from '../match/Match';
import Button from '../button/Button';
import TotalGoals from '../total-goals/TotalGoals';

const SimulationCard = () => {
  return (
    <div className='border border-black px-6 text-center'>
      <section>
        <SimulationName />
      </section>

      <section>
        <Button />
      </section>

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

      <section className='text-end text-sm'>
        <TotalGoals />
      </section>
    </div>
  );
};

export default SimulationCard;
