/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from './assets/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Orcs/i);
  expect(linkElement).toBeInTheDocument();
});
