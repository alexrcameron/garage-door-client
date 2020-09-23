import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders head', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/garage door client/i);
  expect(headerElement).toBeInTheDocument();
});
