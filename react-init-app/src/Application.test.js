import { render, screen } from '@testing-library/react';
import {Application} from './Application';

test('renders learn react link', () => {
  render(<Application />);
  const linkElement = screen.getByText(/Mentoring React App/i);
  expect(linkElement).toBeInTheDocument();
});

