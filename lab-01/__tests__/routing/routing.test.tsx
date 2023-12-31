import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../../src/app/shared/navbar/Navbar'
import mockRouter from 'next-router-mock'

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('Basic Navigation Test Suite', () => {
  it('Should navigate from Home to Reservations Route', () => {
    render(<Navbar />)

    const reservations = screen.getByText('Reservations')
    const buttonText = reservations.textContent
    expect(buttonText).toBe('Reservations')

    fireEvent.click(reservations)

    expect(mockRouter.pathname).toEqual('/reservations')
  })
})
