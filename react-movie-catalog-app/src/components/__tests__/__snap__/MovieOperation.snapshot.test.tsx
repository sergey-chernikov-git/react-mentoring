import React from 'react';
import { MovieOperation } from '../../MovieOperation';
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';

afterEach(cleanup);

describe('MovieOperation Snapshot Test Suit', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <MovieOperation
        movie={null}
        operationHandler={() => console.log('Hi from Jest')}
        closeWindow={() => console.log('Hi from Jest')}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
