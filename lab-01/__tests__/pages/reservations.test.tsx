import { sendReservation } from '@/app/lib/features/reservationsReducer'
import { act, fireEvent, screen } from '@testing-library/react'
import { renderComponent } from '../testUtils/renderComponent'
import userEvent from '@testing-library/user-event'
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

    const heading = screen.getByText('Reservations')

    screen.debug(undefined, 20000)
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

  it('Switches a Toggle button to display vehicle plate form', async () => {
    await act(() => {
      renderComponent(<Page />, {
        initialState: { reservations: { locations: mockLocations } },
      })
    })

    // Toggle button
    const toggleButton = screen.getByTestId('toggleSwitch')
    fireEvent.click(toggleButton)

    // Vehicle Plate form must appear
    const vehiclePlateForm = screen.getByTestId('vehicle-plate')
    expect(vehiclePlateForm).toBeInTheDocument()
  })

  it('User can submit a form with location and vehicle plate', async () => {
    await act(() => {
      renderComponent(<Page />, {
        initialState: { reservations: { locations: mockLocations } },
      })
    })

    // radio input values
    const romaRadioInput = screen.getByLabelText(
      'Palatinum',
    ) as HTMLInputElement

    userEvent.click(romaRadioInput)

    // Toggle button
    const toggleButton = screen.getByTestId('toggleSwitch')
    userEvent.click(toggleButton)

    // Get vehicle plate form
    const vehiclePlateForm = screen.getByTestId('vehicle-plate')

    // Type a vehicle plate
    userEvent.type(vehiclePlateForm, 'XS 22 3E')
    fireEvent.click(screen.getByText('Submit'))

    // Form must have been submitted
    expect(sendReservation).toHaveBeenCalledWith({
      location: 'Roma',
      parkingEnabled: true,
      vehiclePlate: 'XS 22 3E',
    })
  })
})
