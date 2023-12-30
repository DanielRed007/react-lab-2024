'use client'

import { useRouter } from 'next/navigation'

const routes = [
  { route: '/reservations', title: 'Reservations' },
  { route: '/reports', title: 'Reports' },
  { route: '/backoffice', title: 'Backoffice' },
  { route: '/calendar', title: 'Calendar' },
]

const navbar = () => {
  const router = useRouter()

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                onClick={() => router.push('/')}
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {routes.map((route: any, index: number) => (
                  <a
                    key={route + index}
                    onClick={() => router.push(route.route)}
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    {route.title}
                  </a>
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
