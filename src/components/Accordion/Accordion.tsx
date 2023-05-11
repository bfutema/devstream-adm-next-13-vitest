import React from 'react';

export interface AccordionProps {
  isOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ isOpen }) => {
  return (
    <div data-testid="accordion-container">
      {isOpen ? <p>Aberto</p> : <p>Fechado</p>}
    </div>
  );
};
