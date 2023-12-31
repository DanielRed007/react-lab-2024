import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Page from '../../src/app/page'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

describe('Home Page Test Suite', () => {
  it('Home Page Title is rendered', () => {
    render(<Page />)

    const sectionTitle = screen.getByRole('heading', { level: 1 })

    expect(sectionTitle).toBeInTheDocument()
    expect(sectionTitle).toHaveTextContent('ReactJS + NextJS Laboratory')
  })

  it('Home Page Cards are rendered', () => {
    render(<Page />)

    const reports = screen.getByText('Reports')
    expect(reports).toBeInTheDocument()

    const reservations = screen.getByText('Reservations')
    expect(reservations).toBeInTheDocument()

    const backoffice = screen.getByText('Backoffice')
    expect(backoffice).toBeInTheDocument()
  })

  it('User can navigate from a backoffice home card to Backoffice Section', () => {
    render(<Page />)

    const backofficeButton = screen.getByText('Go to Backoffice')

    fireEvent.click(backofficeButton)

    expect(mockRouter.pathname).toEqual('/backoffice')
  })
})
