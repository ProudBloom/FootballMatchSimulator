import React from 'react';
import { SidesProps } from './Sides.types';

const Sides = ({ sidesData }: SidesProps) => {
  return (
    <div>
      {sidesData[0]}
      <span> vs </span>
      {sidesData[1]}
    </div>
  );
};

export default Sides;
