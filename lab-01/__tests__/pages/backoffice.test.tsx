import { render, screen } from '@testing-library/react'
import Page from '../../src/app/backoffice/page'
import '@testing-library/jest-dom'

describe('Backoffice Page Test Suite', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByText('Backoffice')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Backoffice')
  })
})
