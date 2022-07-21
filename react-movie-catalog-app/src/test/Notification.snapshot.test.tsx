import  React from 'react'
import { Notification } from '../components/Notification'
import {render, cleanup} from '@testing-library/react'

afterEach(cleanup)

describe("Notification Snapshot Test Suit", () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Notification
      type="success"
      message="Congratulations!"
      description="the movie has been succesfully updated"
      onClose={() => console.log("Hi from Jest")}
    />)
    expect(asFragment()).toMatchSnapshot()
  })

})