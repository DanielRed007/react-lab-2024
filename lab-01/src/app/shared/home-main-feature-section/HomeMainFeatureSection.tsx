import { homeFeatureCards, homeTitleSection } from '../../utils/data/mock-data'
import { IFeatureCard } from '@/app/utils/interface/interfaces'
import FeatureTitleSection from './FeatureTitleSection'
import FeatureCard from './FeatureCard'

const HomeMainFeatureSection = () => {
  return (
    <div className="bg-white py-18 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FeatureTitleSection
          title={homeTitleSection.title}
          subtitle={homeTitleSection.subtitle}
          description={homeTitleSection.description}
          icon={homeTitleSection.icon}
        />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {homeFeatureCards.map((card: IFeatureCard, index: number) => (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HomeMainFeatureSection
