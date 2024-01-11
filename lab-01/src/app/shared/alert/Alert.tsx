import React from 'react'

interface IAlert {
  color: string
  title: string
  content: string
}

const Alert = ({ color, title, content }: IAlert) => {
  return (
    <div
      className={`font-regular relative block w-full max-w-screen-md rounded-lg bg-${color}-500 px-4 py-4 text-base text-white mb-9`}
      data-dismissible="alert"
    >
      <div className="absolute top-4 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div className="ml-8 mr-12">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
          {title}
        </h5>
        <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
          {content}
        </p>
      </div>
      <div
        data-dismissible-target="alert"
        data-ripple-dark="true"
        className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
      >
        <div role="button" className="w-max rounded-lg p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Alert
