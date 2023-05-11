import React from 'react';

export interface ButtonProps {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ isLoading }) => {
  console.log('Add feature');
  console.log('Add more one feature');
  return (
    <div data-testid="button-container">
      {isLoading ? <p>Carregando</p> : <p>Button</p>}
    </div>
  );
};
