import React from 'react';
import { ScoresProps } from './Scores.types';

const Scores = ({ scoresData, testID }: ScoresProps) => {
  return (
    <div data-testid={testID}>
      <span>{scoresData[0]}</span>
      <span>:</span>
      <span>{scoresData[1]}</span>
    </div>
  );
};

export default Scores;
