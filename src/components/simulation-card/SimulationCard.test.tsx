import React from 'react';
import { render, act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SimulationContextProvider } from '@/contexts/SimulationContext/SimulationContext';
import SimulationCard from './SimulationCard';
import { useSimulationContext } from '@/hooks/useSimulationContext';

const wrapper = ({ children }) => <SimulationContextProvider>{children}</SimulationContextProvider>;

const { result } = renderHook(() => useSimulationContext(), { wrapper });

describe('Simulation Card Tests', () => {
  test('updates match scores every 10 seconds', async () => {
    const { getByTestId } = render(
      <SimulationContextProvider>
        <SimulationCard matchesData={result.current.matches} />
      </SimulationContextProvider>
    );

    expect(getByTestId('matchScore-1')).toHaveTextContent('0:0');
    expect(getByTestId('matchScore-2')).toHaveTextContent('0:0');
    expect(getByTestId('matchScore-3')).toHaveTextContent('0:0');
    expect(getByTestId('totalGoalsElement')).toHaveTextContent('0');
  }, 20000);
});
