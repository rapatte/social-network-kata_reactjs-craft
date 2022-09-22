import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders timeline link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/ici/i);
  expect(linkElement).toBeInTheDocument();
});
