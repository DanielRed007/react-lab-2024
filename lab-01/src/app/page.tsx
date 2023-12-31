import HomeInfoCard from './shared/home-info-card/HomeInfoCard'
import Header from './shared/header/Header'
import { infoCard } from './data/mock-data'

export default function Page() {
  return (
    <>
      <Header title="ReactJS + NextJS Laboratory" />
      <HomeInfoCard info={infoCard} />
    </>
  )
}
