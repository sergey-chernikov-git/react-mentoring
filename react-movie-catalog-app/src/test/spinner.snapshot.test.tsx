import  React from 'react'
import { Spinner } from '../components/Spinner'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe("Spinner Snapshot Test Suit", () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Spinner/>)
    expect(asFragment()).toMatchSnapshot()
  })
})