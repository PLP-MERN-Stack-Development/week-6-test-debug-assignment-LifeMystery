
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the main app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the App/i);
  expect(linkElement).toBeInTheDocument();
});
