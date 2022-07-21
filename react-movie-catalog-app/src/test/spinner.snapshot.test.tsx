import  React from 'react'
import { Spinner } from '../components/Spinner'
import {render, cleanup} from '@testing-library/react'

it('renders correctly', () => {
  const { asFragment } = render(<Spinner/>)
  expect(asFragment()).toMatchSnapshot()
})