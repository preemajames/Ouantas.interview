import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hotel search component',  async () => {
  render(<App />);
  const linkElement =  screen.queryByTestId ('hotel-search-container');
  expect(linkElement).toBeInTheDocument();
});
