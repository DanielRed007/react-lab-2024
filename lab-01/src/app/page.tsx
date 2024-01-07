'use client'

import HomeMainFeatureSection from './shared/home-main-feature-section/HomeMainFeatureSection'
import HomeWidgetSection from './shared/home-widget-section/HomeWidgetSection'
import HomeInfoCard from './shared/home-info-card/HomeInfoCard'
import { useDispatch, useSelector } from 'react-redux'
import { infoCard } from './utils/data/mock-data'
import Header from './shared/header/Header'

export default function Page() {
  // const dispatch = useDispatch()
  // const testValue = useSelector((state: any) => state.test.value)
  return (
    <>
      <Header title="ReactJS + NextJS Laboratory" />
      <HomeMainFeatureSection />
      <HomeWidgetSection />
      <HomeInfoCard info={infoCard} />
      {/* <div>
        <p>Test Value: {testValue}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(setValue(42))}>Set Value to 42</button>
      </div> */}
    </>
  )
}
