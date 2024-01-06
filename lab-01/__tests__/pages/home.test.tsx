import { render, screen, fireEvent } from '@testing-library/react'
import { makeStore } from '../../src/app/lib/store'
import mockRouter from 'next-router-mock'
import { Provider } from 'react-redux'
import Page from '../../src/app/page'
import '@testing-library/jest-dom'
import { ReactNode } from 'react'

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

const renderComponent = (ui: ReactNode, options = {}) => {
  const store = makeStore()

  return render(<Provider store={store}>{ui}</Provider>, options)
}

class ResizeObserverMock implements ResizeObserver {
  constructor(callback: ResizeObserverCallback) {}
  disconnect() {}
  observe(target: Element) {}
  unobserve(target: Element) {}
}

describe('Home Page Test Suite', () => {
  it('Home Page Title is rendered', () => {
    renderComponent(<Page />)

    const sectionTitle = screen.getByRole('heading', { level: 1 })

    expect(sectionTitle).toBeInTheDocument()
    expect(sectionTitle).toHaveTextContent('ReactJS + NextJS Laboratory')
  })

  it('Home Feature Section is rendered', () => {
    renderComponent(<Page />)

    const welcomeText = screen.getByText('Welcome to Lab 01')
    expect(welcomeText).toBeInTheDocument()

    const subtitleText = screen.getByText(
      'An awesome ReactJS + NextJS + Tailwind UI Workshop',
    )
    expect(subtitleText).toBeInTheDocument()

    const calendarCard = screen.getByText(
      'A simple calendar application with a lot of modern features. Heavy emphasis on Unit Testing to guarantee code quality.',
    )
    expect(calendarCard).toBeInTheDocument()
  })

  it('Home Page Cards are rendered', () => {
    renderComponent(<Page />)

    const reports = screen.getByText('Reports')
    expect(reports).toBeInTheDocument()

    const reservations = screen.getByText('Reservations')
    expect(reservations).toBeInTheDocument()

    const backoffice = screen.getByText('Backoffice')
    expect(backoffice).toBeInTheDocument()
  })

  it('User can navigate from a backoffice home card to Backoffice Section', () => {
    renderComponent(<Page />)

    const backofficeButton = screen.getByText('Go to Backoffice')

    fireEvent.click(backofficeButton)

    expect(mockRouter.pathname).toEqual('/backoffice')
  })

  it('Widgets Section is rendered', () => {
    renderComponent(<Page />)

    const widgetSectionTitle = screen.getByText('Modal Widgets Section')

    expect(widgetSectionTitle).toBeInTheDocument()
  })

  it('A Laboratory modal is rendered when clicking the Calendar icon', () => {
    window.ResizeObserver = ResizeObserverMock

    renderComponent(<Page />)

    const icon = screen.getByTestId('calendar')

    expect(icon).toBeInTheDocument()

    fireEvent.click(icon)

    const calendarModalTest = screen.getByText('Simple Modal Using Headless UI')

    expect(calendarModalTest).toBeInTheDocument()
  })

  it('A Laboratory modal is rendered when clicking the Payment icon, click on cancel hides the modal', () => {
    window.ResizeObserver = ResizeObserverMock
    // Render component
    renderComponent(<Page />)
    // Activate Icon modal
    const icon = screen.getByTestId('payment')

    expect(icon).toBeInTheDocument()
    // Click on icon
    fireEvent.click(icon)

    const calendarModalTest = screen.getByText('Payment Icon modal example')
    // Modal Text must appear
    expect(calendarModalTest).toBeInTheDocument()

    // Click on cancel button
    const cancelButton = screen.getByTestId('cancel-icon-modal')

    fireEvent.click(cancelButton)
    // Modal must not be rendered
    expect(calendarModalTest).not.toBeInTheDocument()
  })
})
