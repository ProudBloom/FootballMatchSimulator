import { ReactNode } from 'react';

export type SimulationState = {
  startSimulation: () => void;
  resetSimulation: () => void;
  stopSimulation: () => void;
  time: number;
};

export type SimulationContextProviderProps = {
  children: ReactNode;
};
