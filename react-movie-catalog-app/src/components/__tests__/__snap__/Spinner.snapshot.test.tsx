import React from 'react';
import { Spinner } from '../../Spinner';
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';

afterEach(cleanup);

describe('Spinner Snapshot Test Suit', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
