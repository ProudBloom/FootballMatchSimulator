import { useContext } from 'react';
import { SimulationContext } from '../contexts/SimulationContext/SimulationContext';

export const useSimulationContext = () => {
  const context = useContext(SimulationContext);

  if (context === undefined) {
    console.log('useSimualtionContext must be used within a SimulationContextProvider');
    throw new Error('useSimualtionContext must be used within a SimulationContextProvider');
  }

  return context;
};
