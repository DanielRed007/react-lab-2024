interface IHeader {
  title: string
}

const Header = ({ title }: IHeader) => {
  return (
    <header className="bg-zinc-300 shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
  )
}

export default Header
