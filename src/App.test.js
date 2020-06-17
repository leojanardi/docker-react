import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Learn everything here/i);
//   expect(linkElement).toBeInTheDocument();
// });