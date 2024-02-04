import { IContactCardSmall } from '@/app/utils/interface/interfaces'
import React, { FC } from 'react'

const ContactCardSmall: FC<IContactCardSmall> = ({
  title,
  subtitle,
  imageUrl,
  chipText,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-left">
          <div className="flex">
            <h2 className="text-md font-bold text-gray-600">{title}</h2>
            <div className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-green-200 py-1 px-2 font-sans text-xs font-bold uppercase text-gray-900 ml-2">
              <span className="text-xs">{chipText}</span>
            </div>
          </div>

          <h3 className="text-sm font-bold text-gray-400 mt-2 text-left">
            Smaller Title
          </h3>
        </div>

        <div className="text-2xl font-bold mb-4 text-gray-600">
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <p className="text-gray-600">{subtitle}</p>

      <hr className="my-4 border-t-0.5 border-gray-300" />

      <div className="flex flex-row justify-between space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Icon 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">
          Icon 2
        </button>
      </div>
    </div>
  )
}

export default ContactCardSmall
