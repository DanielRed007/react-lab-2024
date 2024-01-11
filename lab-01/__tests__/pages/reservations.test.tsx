import { act, fireEvent, screen } from '@testing-library/react'
import { renderComponent } from '../testUtils/renderComponent'
import Page from '../../src/app/reservations/page'
import '@testing-library/jest-dom'

const mockLocations = [
  {
    name: 'MockedLocation1',
    city: 'MockedCity1',
    default: true,
  },
  {
    name: 'MockedLocation2',
    city: 'MockedCity2',
    default: false,
  },
]

describe('Reservations Page Test Suite', () => {
  it('renders a heading', () => {
    renderComponent(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    // Header is rendered
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Reservations')
  })

  it('renders a reservations section', () => {
    renderComponent(<Page />)

    // Welcome text is rendered
    const welcomeText = screen.getByText('Welcome')
    expect(welcomeText).toBeInTheDocument()
    // location text is rendered
    const locationText = screen.getByText('Choose your Location')
    expect(locationText).toBeInTheDocument()
    // parking text is rendered
    const parkingText = screen.getByText('Want to select parking?')
    expect(parkingText).toBeInTheDocument()
  })

  it('changes Location when user switches Radio box', async () => {
    await act(() => {
      renderComponent(<Page />, {
        initialState: { reservations: { locations: mockLocations } },
      })
    })

    // location text is rendered
    const locationText = screen.getByText('Choose your Location')
    expect(locationText).toBeInTheDocument()

    // radio input values
    const romaRadioInput = screen.getByLabelText(
      'Palatinum',
    ) as HTMLInputElement
    const atenasRadioInput = screen.getByLabelText('Agora') as HTMLInputElement

    // values must be rendered
    expect(romaRadioInput).toBeInTheDocument()
    expect(atenasRadioInput).toBeInTheDocument()

    // Click on first value
    fireEvent.click(romaRadioInput)

    expect(romaRadioInput).toBeChecked()
    expect(atenasRadioInput).not.toBeChecked()

    // Click on second value, first must be unchecked
    fireEvent.click(atenasRadioInput)

    expect(romaRadioInput).not.toBeChecked()
    expect(atenasRadioInput).toBeChecked()
  })

  it('Switches a Toggle button to optionally render an Alert component', async () => {
    await act(() => {
      renderComponent(<Page />, {
        initialState: { reservations: { locations: mockLocations } },
      })
    })

    // parking text is rendered
    const parkingText = screen.getByText('Want to select parking?')
    expect(parkingText).toBeInTheDocument()

    // Alert title must be blue
    const alertBlue = screen.getByText('Blue Alert is enabled')
    expect(alertBlue).toBeInTheDocument()

    // Toggle button
    const toggleButton = screen.getByTestId('toggleSwitch')
    fireEvent.click(toggleButton)

    // Alert must be green
    const alertGreen = screen.getByText('Green Alert is enabled')
    expect(alertGreen).toBeInTheDocument()
  })
})
