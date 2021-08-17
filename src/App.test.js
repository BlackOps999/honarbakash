import { render, screen } from '@testing-library/react';
import App from './App';

test('Home button rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('about rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
