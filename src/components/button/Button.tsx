import React from 'react';
import { IButtonProps } from './Button.types';

const Button = ({ onClick, children }: IButtonProps) => {
  return (
    <button onClick={onClick} className='px-10 py-1 my-2 border border-black rounded'>
      {children}
    </button>
  );
};

export default Button;
