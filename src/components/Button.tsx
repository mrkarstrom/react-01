import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

export const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};
