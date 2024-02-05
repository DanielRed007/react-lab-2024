'use client'

import ContactCardSmall from '../shared/contact-card-small/ContactCardSmall'
import { IContactCardSmall } from '../utils/interface/interfaces'
import { contactCardSmallData } from '../utils/data/mock-data'
import Header from '../shared/header/Header'
import { MouseEventHandler } from 'react'

export default function Page() {
  const handleClickEmail = (evt: MouseEventHandler<HTMLButtonElement>) => {
    if (evt) {
      console.log(evt)
    }
  }

  const handleClickMobile = (evt: MouseEventHandler<HTMLButtonElement>) => {
    if (evt) {
      console.log(evt)
    }
  }

  return (
    <>
      <Header title="Backoffice" />
      <div className="bg-white">
        <div className="mx-auto py-9 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-white">
          <div className="drop-shadow bg-gray-300 rounded-md p-4 mb-4 h-44 text-center">
            <div className="text-5xl text-blue-700 py-6">
              <strong>More Custom Components!</strong>
            </div>

            <div className="text-lg text-blue-950">
              Take a look at this chunks of Next JS!
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col bg-white">
          <div className="drop-shadow bg-gray-300 rounded-md p-4 mb-4 h-auto text-center">
            <div className="text-lg text-blue-950">
              <h1>Contact Card</h1>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactCardSmallData.map((card, index) => (
                <ContactCardSmall
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  imageUrl={card.imageUrl}
                  chipText={card.chipText}
                  contactEmail={card.contactEmail}
                  contactMobile={card.contactMobile}
                  contactName={card.contactName}
                  onClickEmail={(e: any) => handleClickEmail(e)}
                  onClickMobile={(e: any) => handleClickMobile(e)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
