import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('render home link', () => {
  render(<Timeline />);
  const linkElement = screen.getByText(/page d'accueil/i)
  expect(linkElement).toBeInTheDocument();
})
