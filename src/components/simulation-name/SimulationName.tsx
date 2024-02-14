import React from 'react';
import { SimulationNameProps } from './SimulationName.types';

const SimulationName = ({ name }: SimulationNameProps) => {
  return (
    <div data-testid='simulationNameElement' className='text-sm text-center text-gray-500'>
      {name}
    </div>
  );
};

export default SimulationName;
