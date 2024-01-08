'use client'

import { fetchUser, fetchLocations } from '../lib/features/reservationsReducer'
import { ILocation, IUser } from '../utils/interface/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import RadioBox from '../shared/radio-box/RadioBox'
import Header from '../shared/header/Header'
import { useEffect, useState } from 'react'
import { AppDispatch } from '../lib/store'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const user: IUser = useSelector((state: any) => state.reservations.user)
  const locations: ILocation[] = useSelector(
    (state: any) => state.reservations.locations,
  )
  const [isChecked, setIsChecked] = useState(false)

  const [selectedLocation, setSelectedLocation] = useState('')

  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLocation = event.target.value

    if (selectedLocations.includes(selectedLocation)) {
      setSelectedLocations(
        selectedLocations.filter((loc) => loc !== selectedLocation),
      )
    } else {
      setSelectedLocations([...selectedLocations, selectedLocation])
    }
  }

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchLocations())
  }, [dispatch])

  return (
    <>
      <Header title="Reservations" />

      <div className="bg-gray-100">
        <div className="mx-auto py-9 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-gray-100">
          <div className="bg-blue-700 rounded-md p-4 mb-4 h-44">
            <div className="text-7xl">
              <strong>Welcome</strong> {user?.name ? user?.name : 'No User'}
            </div>

            <div className="text-2xl py-6">
              You can pick your initial settings down below
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 p-4 mb-4 h-96 w-full flex flex-col">
              <div className="flex-1 bg-white mb-4 p-4">
                <p className="text-blue-500 mb-2 text-xl">
                  <strong>Choose your Location</strong>
                </p>
                {locations?.map((location, index) => (
                  <RadioBox
                    key={index}
                    value={location.name}
                    label={location.name}
                    checked={selectedLocations.includes(location.name)}
                    onChange={(e) => handleLocationChange(e)}
                  />
                ))}
              </div>
              <div className="flex-1 bg-red-500">
                <p className="text-white">Inner Container 2</p>
              </div>
            </div>
            <div className="bg-yellow-500 p-4 mb-4 h-96 w-full">Item 2</div>
            <div className="bg-yellow-500 p-4 mb-4 h-96 w-full">Item 3</div>
          </div>
        </div>
      </div>
    </>
  )
}
