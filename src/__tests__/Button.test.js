import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';
import '@testing-library/jest-dom';

test('renders button with label', () => {
  const { getByText } = render(<Button label="Click me!" />);
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
