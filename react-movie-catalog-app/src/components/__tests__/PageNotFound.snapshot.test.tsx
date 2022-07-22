import  React from 'react'
import { PageNotFound } from '../PageNotFound'
import {render, cleanup} from '@testing-library/react'
import { expect } from '@jest/globals';

afterEach(cleanup)

describe("PageNotFound Snapshot Test Suit", () => {
  test('renders correctly', () => {
    const { asFragment } = render(<PageNotFound/>)
    expect(asFragment()).toMatchSnapshot()
  })
})