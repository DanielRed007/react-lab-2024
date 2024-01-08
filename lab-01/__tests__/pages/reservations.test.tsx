import { renderComponent } from '../testUtils/renderComponent'
import Page from '../../src/app/reservations/page'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Reservations Page Test Suite', () => {
  it('renders a heading', () => {
    renderComponent(<Page />)

    screen.debug()

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reservations')
  })
})
