import React from 'react';
import Sides from './sides/Sides';
import Scores from './scores/Scores';
import { MatchProps } from './Match.types';

const Match = ({ matchData }: MatchProps) => {
  return (
    <div className='flex items-center justify-between gap-6'>
      <Sides sidesData={matchData.teams} />
      <Scores testID={`matchScore-${matchData.id}`} scoresData={matchData.scores} />
    </div>
  );
};

export default Match;
