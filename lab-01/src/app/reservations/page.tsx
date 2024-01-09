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

  const [location, setLocation] = useState('')

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const selectedLocation = event.target.value

    setLocation(selectedLocation)
  }

  const isLocationChecked = (checked: string, current: string): boolean => {
    return checked === current
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
          <div className="bg-gray-300 rounded-md p-4 mb-4 h-44 text-center">
            <div className="text-5xl text-blue-700 py-6">
              <strong>Welcome</strong> {user?.name ? user?.name : 'No User'} !
            </div>

            <div className="text-lg text-blue-950">
              You can pick your initial settings down below
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-300 p-4 mb-4 rounded-md h-96 w-full flex flex-col">
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
              <div className="flex-1 rounded-md bg-white">
                <p className="text-white">Inner Container 2</p>
              </div>
            </div>
            <div className="bg-gray-300 p-4 mb-4 h-96 w-full">Item 2</div>
            <div className="bg-gray-300 p-4 mb-4 h-96 w-full">Item 3</div>
          </div>
        </div>
      </div>
    </>
  )
}
