import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../../src/app/shared/navbar/Navbar'
import mockRouter from 'next-router-mock'

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('Basic Navigation Test Suite', () => {
  it('Should navigate from Home to Reservations Route', () => {
    render(<Navbar />)

    // Get the Reservations button
    const reservations = screen.getByText('Reservations')
    const buttonText = reservations.textContent
    expect(buttonText).toBe('Reservations')

    // Click on Reservations Button
    fireEvent.click(reservations)

    // Expected route should be reservations
    expect(mockRouter.pathname).toEqual('/reservations')
  })
})
