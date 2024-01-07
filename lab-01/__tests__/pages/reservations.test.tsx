import { renderComponent } from '../testUtils/renderComponent'
import { render, screen } from '@testing-library/react'
import { makeStore } from '../../src/app/lib/store'
import Page from '../../src/app/reservations/page'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import { ReactNode } from 'react'

describe('Reservations Page Test Suite', () => {
  it('renders a heading', () => {
    renderComponent(<Page />)

    screen.debug()

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reservations')
  })
})
