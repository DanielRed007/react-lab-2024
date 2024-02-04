import { sendReservation } from '../../src/app/lib/features/reservations/reservationsThunks'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
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

    // Select the location
    const romaRadioInput = screen.getByLabelText(
      'Palatinum',
    ) as HTMLInputElement
    userEvent.click(romaRadioInput)

    // Toggle the switch
    const toggleButton = screen.getByTestId('toggleSwitch')
    userEvent.click(toggleButton)

    // Wait for the vehicle plate form
    await waitFor(() => screen.getByTestId('vehicle-plate'))

    // Type a vehicle plate
    const vehiclePlateForm = screen.getByTestId('vehicle-plate')
    userEvent.type(vehiclePlateForm, 'XS 22 3E')

    // Wait for the Hybrid radio input to be available
    const hybridRadioInput = await waitFor(
      () => screen.getByLabelText('Hybrid') as HTMLInputElement,
    )

    // Check work modality using fireEvent.change
    fireEvent.change(hybridRadioInput, { target: { checked: true } })

    // Submit the form
    fireEvent.click(screen.getByText('Submit'))

    // Wait for the state to update
    await waitFor(() => {
      expect(romaRadioInput).toBeChecked()
      expect(hybridRadioInput).toBeChecked()
    })
  })

  it('User can select the otions of the desk dropdown', async () => {
    // Asyncronous rendering the component
    await act(() => {
      renderComponent(<Page />, {
        initialState: { reservations: { locations: mockLocations } },
      })
    })
    // Getting the select button by test id
    const deskSelectButton = screen.getByTestId('desk-select')
    // Clicking the element
    await waitFor(() => userEvent.click(deskSelectButton))

    const selectedListItem = screen.getByRole('option', { name: /1/ })
    // Expects to have the right text content
    expect(selectedListItem).toHaveTextContent('1')

    await waitFor(() => {})
  })
})
