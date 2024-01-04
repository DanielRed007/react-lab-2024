import { ReactNode } from 'react'

interface IWidgetIconLink {
  children: ReactNode
  title: string
  subtitle: string
}

const WidgetIconLink = ({ children, title, subtitle }: IWidgetIconLink) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-sm mx-auto">
      <div className="flex items-center justify-center">{children}</div>
      <h2 className="text-lg text-center font-semibold mb-2 text-gray-950">
        {title}
      </h2>
      <p className="text-gray-600 text-center">{subtitle}</p>
    </div>
  )
}

export default WidgetIconLink
