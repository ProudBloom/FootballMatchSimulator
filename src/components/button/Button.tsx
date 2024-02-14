import React from 'react';
import { IButtonProps } from './Button.types';

const Button = ({ disabled, type, testID, onClick, children }: IButtonProps) => {
  return (
    <button
      data-testid={testID}
      onClick={onClick}
      className='px-10 py-1 my-2 border border-black rounded'
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
