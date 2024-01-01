import { CalendarIcon, CodeIcon, NextJSIcon } from '../../utils/icons/icons'

const HomeMainFeatureSection = () => {
  return (
    <div className="bg-white py-18 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <NextJSIcon customClass="h-24 w-24 inline-block" />
          <h2 className="text-base font-semibold leading-7 text-blue-700">
            Welcome to Lab 01
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            An awesome ReactJS + NextJS + Tailwind UI Workshop
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look at the amazing capabilities and flexilibity of ReactJS +
            NextJS. Powerful and simple CSS classes generated by Tailwind UI.
            Splitted into several functional componets React Testing Library as
            a Guidebook on first class testing work.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                  <CalendarIcon customClass="w-6 h-6 text-white" stroke={1.5} />
                </div>
                Calendar
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                A simple calendar application with a lot of modern features.
                Heavy emphasis on Unit Testing to guarantee code quality.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                  <CodeIcon customClass="w-6 h-6 text-white" stroke={1.5} />
                </div>
                Reservation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                A small bookings app, to prototype a small reservations system.
                We don't forget Unit Testing.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HomeMainFeatureSection
