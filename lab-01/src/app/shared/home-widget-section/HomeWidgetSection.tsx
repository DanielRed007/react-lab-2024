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
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <CalendarIcon
            customClass="h-24 w-24"
            onClick={() => handleOpenModal('showModal1')}
          />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
          <NextJSIcon customClass="h-24 w-24" />
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
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
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
