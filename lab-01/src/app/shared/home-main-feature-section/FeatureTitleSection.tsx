import { IFeatureTitleSection } from '../../utils/interface/interfaces'

const FeatureTitleSection = ({
  title,
  subtitle,
  description,
  icon,
}: IFeatureTitleSection) => {
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      {icon}
      <h2 className="text-base font-semibold leading-7 text-blue-700">
        {subtitle}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureTitleSection
