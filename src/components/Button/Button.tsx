import React from 'react';

export interface ButtonProps {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ isLoading }) => {
  return (
    <div data-testid="button-container">
      {isLoading ? <p>Carregando</p> : <p>Button</p>}
    </div>
  );
};