import  React from 'react'
import { PageNotFound } from '../components/PageNotFound'
import {render, cleanup} from '@testing-library/react'

afterEach(cleanup)

describe("PageNotFound Snapshot Test Suit", () => {
  test('renders correctly', () => {
    const { asFragment } = render(<PageNotFound/>)
    expect(asFragment()).toMatchSnapshot()
  })
})