import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the guitar landing with the name and section navigation', () => {
  render(<App />);
  expect(screen.getByText('Min Zin Hlaing')).toBeInTheDocument();
  // Section labels appear both on the strings and in the fallback nav.
  expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
});
