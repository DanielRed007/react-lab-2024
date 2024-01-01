'use client'

import { BeakerIcon, NextJSIcon } from '@/app/utils/icons/icons'
import { navbarRoutes } from '../../utils/data/mock-data'
import { useRouter } from 'next/navigation'

const navbar = () => {
  const router = useRouter()

  return (
    <nav className="bg-blue-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BeakerIcon
                customClass="h-8 w-8"
                stroke={1.5}
                onClick={() => router.push('/')}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbarRoutes.map((route: any, index: number) => (
                  <button
                    key={route + index}
                    onClick={() => router.push(route.route)}
                    className="bg-zinc-300 text-blue-900 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {route.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
