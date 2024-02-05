import { render, screen, fireEvent, act } from '@testing-library/react'
import Page from '../../src/app/backoffice/page'
import '@testing-library/jest-dom'

describe('Backoffice Page Test Suite', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByText('Backoffice')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Backoffice')
  })

  it('renders a Small Contact Card Section', () => {
    render(<Page />)

    // Renders a Section title
    const contactCardTitle = screen.getByText('Contact Card')
    expect(contactCardTitle).toBeInTheDocument()

    // Renders a total of 6 cards
    const card1 = screen.getByText('Title 1')
    const card6 = screen.getByText('Title 6')

    expect(card1).toBeInTheDocument()
    expect(card6).toBeInTheDocument()
  })

  it('Email button triggers a function', () => {
    // const { getByTestId } = render(<Page />)

    const handleClickEmailSpy = jest.fn()

    const { getByTestId } = render(<Page />)
    const contactButton = getByTestId('contact-mail-icon-1')
    fireEvent.click(contactButton)

    expect(handleClickEmailSpy).toHaveBeenCalled()

    screen.debug(undefined, 20000)

    jest.restoreAllMocks()
  })
})
