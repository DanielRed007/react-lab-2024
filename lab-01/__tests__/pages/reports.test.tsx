import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../../src/app/reports/page'

describe('Reports Page Test Suite', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reports')
  })
})
