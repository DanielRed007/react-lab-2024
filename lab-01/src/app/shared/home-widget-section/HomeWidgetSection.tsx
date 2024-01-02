import {
  CalculatorIcon,
  CalendarIcon,
  NextJSIcon,
} from '@/app/utils/icons/icons'
import { decrement, increment, setValue } from '@/app/lib/features/testReducer'
import { useDispatch, useSelector } from 'react-redux'

const HomeWidgetSection = () => {
  const dispatch = useDispatch()
  const testValue = useSelector((state: any) => state.test.value)

  return (
    <div className="bg-blue-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Take a look at the widgets just clicking on every icon below{' '}
          <p>Test Value: {testValue}</p>
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <CalendarIcon
            customClass="h-24 w-24"
            onClick={() => dispatch(decrement())}
          />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
        </div>
      </div>
    </div>
  )
}

export default HomeWidgetSection
