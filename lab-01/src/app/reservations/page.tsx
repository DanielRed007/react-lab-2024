'use client'

import { fetchUser, fetchLocations } from '../lib/features/reservationsReducer'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../shared/header/Header'
import { AppDispatch } from '../lib/store'
import { useEffect } from 'react'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: any) => state.reservations.user)

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchLocations())
  }, [dispatch])

  return (
    <>
      <Header title="Reservations" />

      <div className="bg-gray-100">
        <div className="mx-auto py-9 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-gray-100">
          <div className="bg-blue-500 p-4 mb-4 h-44">
            Full Width Item
            {user?.name ? user?.name : 'No User'}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 p-4 mb-4 h-96 w-full flex flex-col">
              <div className="flex-1 bg-blue-500 mb-4">
                <p className="text-white">Inner Container 1</p>
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
