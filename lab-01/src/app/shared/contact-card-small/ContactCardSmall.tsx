'use client'

import { IContactCardSmall } from '@/app/utils/interface/interfaces'
import { EmailIcon, MobileIcon } from '@/app/utils/icons/icons'
import React, { FC } from 'react'

const ContactCardSmall: FC<IContactCardSmall> = ({
  title,
  subtitle,
  imageUrl,
  chipText,
  contactEmail,
  contactMobile,
  onClickEmail,
  onClickMobile,
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

      <div className="flex flex-row justify-around space-x-2">
        <button
          onClick={onClickEmail}
          className="flex flex-row justify-between items-center text-gray-700 px-4 py-2 rounded-full transition-opacity transition-bg hover:opacity-95 hover:bg-blue-100"
        >
          <EmailIcon customClass="h-5 w-5 mr-3" testId="contact-mail-icon" />
          Email
        </button>

        <div className="border-l border-gray-300 h-10"></div>

        <button
          onClick={onClickMobile}
          className="flex flex-row justify-between items-center text-gray-700 px-4 py-2 rounded-full transition-opacity transition-bg hover:opacity-95 hover:bg-blue-100"
        >
          <MobileIcon customClass="h-5 w-5 mr-3" testId="contact-mobile-icon" />
          Mobile
        </button>
      </div>
    </div>
  )
}

export default ContactCardSmall
