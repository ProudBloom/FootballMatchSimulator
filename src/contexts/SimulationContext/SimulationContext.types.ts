import { MatchData } from '@/components/match/Match.types';
import { ReactNode } from 'react';

export type SimulationState = {
  startSimulation: () => void;
  resetSimulation: () => void;
  stopSimulation: () => void;
  time: number;
  isRunning: boolean;
  simulationName: string;
  matches: MatchData[];
  totalGoals: number;
};

export type SimulationContextProviderProps = {
  children: ReactNode;
};
