import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from './Button';

const makeSut = () => {
  const sut = <Button />;

  return { sut };
};

describe('Button', () => {
  it('should render Button', () => {
    const { sut } = makeSut();

    render(sut);

    const component = screen.getByTestId('button-container');

    expect(component).toBeInTheDocument();
  });
});
