import {
  toggleModal,
  openModal,
  closeModal,
} from '../../lib/features/homeWidgetsReducer'
import {
  CalculatorIcon,
  CalendarIcon,
  NextJSIcon,
} from '../../utils/icons/icons'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import IconModal from '../icon-modal/IconModal'
import WidgetIconLink from './WidgetIconLink'
import { Fragment, useRef } from 'react'

const HomeWidgetSection = () => {
  const dispatch = useDispatch()
  const showModal1 = useSelector((state: any) => state.homeWidgets?.showModal1)
  const showModal2 = useSelector((state: any) => state.homeWidgets?.showModal2)

  const handleToggleModal = (modalName: string) => {
    dispatch(toggleModal(modalName))
  }

  const handleOpenModal = (modalName: string) => {
    dispatch(openModal(modalName))
  }

  const handleCloseModal = (modalName: string) => {
    dispatch(closeModal(modalName))
  }

  return (
    <div className="bg-blue-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="col-span-full text-center mb-6">
          <h2 className="text-5xl font-semibold text-white">
            Modal Widgets Section
          </h2>
          <p className="text-3xl text-blue-950">
            Beautiful widgets using Headless UI as Javascript Library
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 flex items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <WidgetIconLink
            title="Basic Modal"
            subtitle="Just click the icon to toggle the widget"
          >
            <CalendarIcon
              testId="calendar"
              customClass="h-24 w-24 text-blue-800"
              onClick={() => handleOpenModal('showModal1')}
            />
          </WidgetIconLink>

          <WidgetIconLink
            title="Basic Modal"
            subtitle="Just click the icon to toggle the widget"
          >
            <CalendarIcon
              customClass="h-24 w-24 text-blue-800"
              onClick={() => handleOpenModal('showModal1')}
            />
          </WidgetIconLink>

          <WidgetIconLink
            title="Basic Modal"
            subtitle="Just click the icon to toggle the widget"
          >
            <CalendarIcon
              customClass="h-24 w-24 text-blue-800"
              onClick={() => handleOpenModal('showModal1')}
            />
          </WidgetIconLink>

          <WidgetIconLink
            title="Basic Modal"
            subtitle="Just click the icon to toggle the widget"
          >
            <CalendarIcon
              customClass="h-24 w-24 text-blue-800"
              onClick={() => handleOpenModal('showModal1')}
            />
          </WidgetIconLink>

          <WidgetIconLink
            title="Basic Modal"
            subtitle="Just click the icon to toggle the widget"
          >
            <CalendarIcon
              customClass="h-24 w-24 text-blue-800"
              onClick={() => handleOpenModal('showModal1')}
            />
          </WidgetIconLink>
        </div>
      </div>

      <IconModal
        showModal={showModal1}
        modalRef={'showModal1'}
        onCancel={handleCloseModal}
        onClose={handleCloseModal}
        onSuccess={handleCloseModal}
      >
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Simple Modal Using Headless UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </IconModal>
    </div>
  )
}

export default HomeWidgetSection
