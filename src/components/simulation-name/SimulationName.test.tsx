import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimulationName from './SimulationName';

afterEach(() => {
  cleanup();
});

describe('SimulationName tests', () => {
  render(<SimulationName name='Test name' />);
  const simNameElement = screen.getByTestId('simulationNameElement');

  test('Component should render properly', () => {
    expect(simNameElement).toBeInTheDocument();
  });
  test('Component should render proper text', () => {
    expect(simNameElement).toHaveTextContent('Test name');
  });
});
