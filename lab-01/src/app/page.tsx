import HomeMainFeatureSection from './shared/home-main-feature-section/HomeMainFeatureSection'
import HomeInfoCard from './shared/home-info-card/HomeInfoCard'
import { infoCard } from './utils/data/mock-data'
import Header from './shared/header/Header'

export default function Page() {
  return (
    <>
      <Header title="ReactJS + NextJS Laboratory" />
      <HomeMainFeatureSection />
      <HomeInfoCard info={infoCard} />
    </>
  )
}
