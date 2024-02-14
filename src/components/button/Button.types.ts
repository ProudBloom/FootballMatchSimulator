import { PropsWithChildren } from 'react';

export interface IButtonProps extends PropsWithChildren {
  additionalClassNames?: string;
  onClick?: () => void | Promise<void>;
  type?: 'button' | 'submit';
  disabled?: boolean;
}
