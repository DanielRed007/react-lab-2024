interface IHomeInfoCard {
  info: ICardInfo[]
}

interface ICardInfo {
  title: string
  subtitle: string
  description: string
}

const HomeInfoCard = ({ info }: IHomeInfoCard) => {
  return (
    <div className="gap-8 columns-3 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {info.map((card, index) => (
        <div key={index} className="bg-indigo-500 flex-1 p-4 rounded-md">
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-4xl font-bold mb-2">{card.title}</h2>

            <h2 className="text-xl text-gray-600 mb-4">{card.subtitle}</h2>

            <p className="text-gray-800 mb-6">{card.description}</p>

            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
              Click Me
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeInfoCard
