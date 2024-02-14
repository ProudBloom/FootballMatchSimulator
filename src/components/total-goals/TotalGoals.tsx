import { useSimulationContext } from '@/hooks/useSimulationContext';
import React from 'react';

const TotalGoals = () => {
  const { totalGoals } = useSimulationContext();

  return (
    <div data-testid='totalGoalsElement'>
      <span className='me-2'>Total goals:</span>
      <span>{totalGoals}</span>
    </div>
  );
};

export default TotalGoals;
