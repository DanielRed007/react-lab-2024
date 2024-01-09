import { renderComponent } from '../testUtils/renderComponent'
import Page from '../../src/app/reservations/page'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Reservations Page Test Suite', () => {
  it('renders a heading', () => {
    renderComponent(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    // Header is rendered
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reservations')
  })

  it('renders a reservations section', () => {
    renderComponent(<Page />)

    screen.debug(undefined, 2000)

    // Welcome text is rendered
    const welcomeText = screen.getByText('Welcome')
    expect(welcomeText).toBeInTheDocument()
    // location text is rendered
    const locationText = screen.getByText('Choose your Location')
    expect(locationText).toBeInTheDocument()
    // parking text is rendered
    const parkingText = screen.getByText('Want to select parking?')
    expect(parkingText).toBeInTheDocument()
  })
})
