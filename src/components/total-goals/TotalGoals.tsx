import { useSimulationContext } from '@/hooks/useSimulationContext';
import React from 'react';

const TotalGoals = () => {
  const { totalGoals } = useSimulationContext();

  return (
    <div>
      <span className='me-2'>Total goals:</span>
      <span data-testid='totalGoalsElement'>{totalGoals}</span>
    </div>
  );
};

export default TotalGoals;
