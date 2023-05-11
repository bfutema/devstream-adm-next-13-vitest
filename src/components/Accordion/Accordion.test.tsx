import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Accordion, AccordionProps } from './Accordion';

const makeSut = (props?: AccordionProps) => {
  const sut = <Accordion {...props} />;

  return { sut };
};

describe('Accordion', () => {
  it('should render Accordion', () => {
    const { sut } = makeSut();

    render(sut);

    const component = screen.getByTestId('accordion-container');

    expect(component).toBeInTheDocument();
  });

  it('should render Accordion without loading', () => {
    const { sut } = makeSut({ isOpen: false });

    render(sut);

    const component = screen.getByTestId('accordion-container');
    const accordionText = screen.getByText('Fechado');

    expect(component).toBeInTheDocument();
    expect(accordionText).toBeInTheDocument();
  });

  it('should render Accordion with loading', () => {
    const { sut } = makeSut({ isOpen: true });

    render(sut);

    const component = screen.getByTestId('accordion-container');
    const accordionText = screen.getByText('Aberto');

    expect(component).toBeInTheDocument();
    expect(accordionText).toBeInTheDocument();
  });
});
