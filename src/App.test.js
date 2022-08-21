import { render, screen } from '@testing-library/react';
import App from './App';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//const oauth2Script = '<!DOCTYPE html><html lang="en"><head><script src="https://accounts.google.com/gsi/client" async defer></script></head><body></body><html>';
//const oauth2Loader = new JSDOM(
//  oauth2Script, {runScripts: 'dangerously', resources: 'usable' }
//);


test('Home Navigation Bar link rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('Bio Navigation Bar Link rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sherry Honar/i);
  expect(linkElement).toBeInTheDocument();
});

