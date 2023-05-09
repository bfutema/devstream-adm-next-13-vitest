import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from './Button';

const makeSut = (props?: { isLoading?: boolean }) => {
  const sut = <Button isLoading={props?.isLoading} />;

  return { sut };
};

describe('Button', () => {
  it('should render Button', () => {
    const { sut } = makeSut();

    render(sut);

    const component = screen.getByTestId('button-container');

    expect(component).toBeInTheDocument();
  });

  it('should render Button without loading', () => {
    const { sut } = makeSut({ isLoading: false });

    render(sut);

    const component = screen.getByTestId('button-container');
    const buttonText = screen.getByText('Button');

    expect(component).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it('should render Button with loading', () => {
    const { sut } = makeSut({ isLoading: true });

    render(sut);

    const component = screen.getByTestId('button-container');
    const buttonText = screen.getByText('Carregando');

    expect(component).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
