import {
  CalculatorIcon,
  CalendarIcon,
  NextJSIcon,
} from '../../utils/icons/icons'
import { decrement, increment, setValue } from '@/app/lib/features/testReducer'
import { toggleModal } from '../../lib/features/homeWidgetsReducer'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'

const HomeWidgetSection = () => {
  const dispatch = useDispatch()
  const showModal1 = useSelector((state: any) => state.modal?.showModal1)
  const showModal2 = useSelector((state: any) => state.modal?.showModal2)

  const handleToggleModal = (modalName: string) => {
    dispatch(toggleModal(modalName))
  }

  return (
    <div className="bg-blue-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <CalendarIcon
            customClass="h-24 w-24"
            onClick={() => handleToggleModal('showModal1')}
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
