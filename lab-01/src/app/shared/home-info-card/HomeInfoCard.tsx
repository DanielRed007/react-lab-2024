'use client'

import { ICardInfo, IHomeInfoCard } from '../../utils/interface/interfaces'
import { useRouter } from 'next/navigation'

const HomeInfoCard = ({ info }: IHomeInfoCard) => {
  const router = useRouter()

  return (
    <div className="bg-gray-200 py-18 sm:py-32">
      <div className="gap-8 columns-3 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {info.map((card: ICardInfo, index: number) => (
          <div key={index} className="bg-zinc-900 flex-1 p-4 rounded-md">
            <div className="max-w-2xl mx-auto p-4">
              <h2 className="text-4xl font-bold mb-2">{card.title}</h2>

              <h2 className="text-xl text-zinc-500 mb-4">{card.subtitle}</h2>

              <p className="text-zinc-300 mb-6">{card.description}</p>

              <button
                onClick={() => router.push(card.link)}
                className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
              >
                Go to {card.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeInfoCard
