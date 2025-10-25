import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pageContainer = screen.getByTestId('page-container');
  expect(pageContainer).toBeInTheDocument();
  expect(pageContainer).toHaveClass('page-container');
});
