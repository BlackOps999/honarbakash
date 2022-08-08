import { ClickAwayListener } from '@material-ui/core';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Home Navigation Bar link rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('Bio Navigation Bar Link rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Services/i);
  expect(linkElement).toBeInTheDocument();
});

