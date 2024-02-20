import { render, screen } from '@testing-library/react';
import path from 'path';

const appPath = path.join(__dirname, 'App');

import App from appPath;

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
