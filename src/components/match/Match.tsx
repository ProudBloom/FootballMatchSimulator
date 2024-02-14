import React from 'react';
import Sides from './sides/Sides';
import Scores from './scores/Scores';

const Match = () => {
  return (
    <div className='flex gap-6 justify-between items-center'>
      <Sides />
      <Scores />
    </div>
  );
};

export default Match;
