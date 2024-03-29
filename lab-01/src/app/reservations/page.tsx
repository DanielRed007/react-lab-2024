'use client'

import {
  sendReservation,
  fetchUser,
  fetchLocations,
  fetchWorkModalities,
} from '../lib/features/reservations/reservationsThunks'
import { ILocation, IUser, IWorkModality } from '../utils/interface/interfaces'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import ToggleSwitch from '../shared/toggle-switch/ToggleSwitch'
import ParkingSettings from './components/ParkingSettings'
import { useDispatch, useSelector } from 'react-redux'
import RadioBox from '../shared/radio-box/RadioBox'
import { mockDesks } from '../utils/data/mock-data'
import Dropdown from '../shared/dropdown/Dropdown'
import Header from '../shared/header/Header'
import { AppDispatch } from '../lib/store'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const user: IUser = useSelector((state: any) => state.reservations.user)
  const locations: ILocation[] = useSelector(
    (state: any) => state.reservations.locations,
  )
  const workModalities: IWorkModality[] = useSelector(
    (state: any) => state.reservations.workModalities,
  )

  const [location, setLocation] = useState('')
  const [workModality, setWorkModality] = useState('Full Presence')
  const [vehicleValue, setVehicleValue] = useState('')
  const [parkingEnabled, setParkingEnabled] = useState(false)
  const [selectedFloor, setSelectedFloor] = useState(mockDesks[0])

  const [formData, setFormData] = useState({
    location: '',
    parkingEnabled: false,
    vehiclePlate: '',
    workModality: '',
    desk: '',
  })

  const handleToggle = () => {
    setParkingEnabled(!parkingEnabled)
    setFormData((prevData) => ({
      ...prevData,
      parkingEnabled: !prevData.parkingEnabled,
    }))
  }

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedLocation = event.target.value
    setLocation(selectedLocation)
    setFormData((prevData) => ({ ...prevData, location: selectedLocation }))
  }

  const handleWorkModalityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedWorkModality = event.target.value
    setWorkModality(selectedWorkModality)
    setFormData((prevData) => ({
      ...prevData,
      workModality: selectedWorkModality,
    }))
  }

  const isLocationChecked = (checked: string, current: string): boolean => {
    return checked === current
  }

  const isWorkModalityChecked = (checked: string, current: string): boolean => {
    return checked === current
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(sendReservation(formData))
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    setVehicleValue(newValue)

    setFormData((prevData) => ({
      ...prevData,
      vehiclePlate: newValue,
    }))
  }

  const handleFloorChange = (e: any) => {
    const newDesk = e.name
    setSelectedFloor(e)

    setFormData((prevData) => ({
      ...prevData,
      desk: newDesk,
    }))
  }

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchLocations())
    dispatch(fetchWorkModalities())
  }, [dispatch])

  return (
    <>
      <Header title="Reservations" />

      <form onSubmit={handleSubmit}>
        <div className="bg-white">
          <div className="mx-auto py-9 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-white">
            <div className="drop-shadow bg-gray-300 rounded-md p-4 mb-4 h-44 text-center">
              <div className="text-5xl text-blue-700 py-6">
                <strong>Welcome</strong> {user?.name ? user?.name : 'No User'} !
              </div>

              <div className="text-lg text-blue-950">
                You can pick your initial settings down below
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="drop-shadow bg-gray-300 p-4 mb-4 rounded-md h-96 w-full flex flex-col">
                <div className="rounded-md bg-white mb-4 p-4 flex flex-col items-center">
                  <p className="text-blue-500 mb-2 text-xl text-center">
                    <strong>Choose your Location</strong>
                  </p>
                  {locations?.map((loc, index) => (
                    <RadioBox
                      key={index}
                      value={loc.city}
                      label={loc.name}
                      checked={isLocationChecked(location, loc.city)}
                      onChange={(e) => handleLocationChange(e)}
                    />
                  ))}
                </div>
                <div className="flex align-items justify-center flex-direction-column rounded-md bg-white">
                  <div className="">
                    <div className="py-4 px-4 flex align-items">
                      <p className="text-blue-950 ml-4">
                        <strong>Want to select parking?</strong>
                      </p>
                      <ToggleSwitch
                        enabled={parkingEnabled}
                        onChange={handleToggle}
                        testId="toggleSwitch"
                      />
                    </div>
                    {parkingEnabled ? (
                      <ParkingSettings
                        onChange={(e) => handleInputChange(e)}
                        vehicleValue={vehicleValue}
                      />
                    ) : (
                      <div className="h-32 w-full">
                        <h1 className="text-blue-500">
                          You can register a Vehicle for regular use
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="drop-shadow bg-gray-300 p-4 mb-4 rounded-md h-96 w-full flex flex-col">
                <div className="rounded-md bg-white mb-4 p-4 flex flex-col items-center">
                  <p className="text-blue-500 mb-2 text-xl text-center">
                    <strong>Choose your work modality</strong>
                  </p>
                  {workModalities?.map((mod, index) => (
                    <RadioBox
                      key={index}
                      value={mod.name}
                      label={mod.name}
                      checked={isWorkModalityChecked(workModality, mod.name)}
                      onChange={(e) => handleWorkModalityChange(e)}
                    />
                  ))}
                </div>
                <div className="flex align-items justify-center flex-direction-column rounded-md bg-white h-36 flex flex-col items-center">
                  <p className="text-blue-500 mb-2 text-xl text-center">
                    <strong>Choose your desk</strong>
                  </p>
                  <Dropdown
                    selected={selectedFloor}
                    onChange={handleFloorChange}
                    options={mockDesks}
                    testId={'desk-select'}
                  />
                </div>
              </div>
              <div className="drop-shadow bg-gray-300 rounded-md p-4 mb-4 h-96 w-full">
                <div className="flex align-items justify-center flex-direction-column rounded-md bg-white h-36 flex flex-col items-center">
                  <p className="text-blue-500 mb-2 text-xl text-center">
                    <strong>Hop On!</strong>
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
