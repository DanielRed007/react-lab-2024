import { renderComponent } from '../testUtils/renderComponent'
import { act, screen } from '@testing-library/react'
import Page from '../../src/app/reports/page'
import '@testing-library/jest-dom'

describe('Reports Page Test Suite', () => {
  it('renders a heading', () => {
    renderComponent(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reports')
  })

  it('renders a data table', async () => {
    await act(() => {
      renderComponent(<Page />, {})
    })

    const reportsTable = screen.getByRole('table')

    expect(reportsTable).toBeInTheDocument()
  })
})
