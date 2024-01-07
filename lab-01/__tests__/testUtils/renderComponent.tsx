import { makeStore } from '../../src/app/lib/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'

export const renderComponent = (ui: ReactNode, options = {}) => {
  const store = makeStore()

  return render(<Provider store={store}>{ui}</Provider>, options)
}
