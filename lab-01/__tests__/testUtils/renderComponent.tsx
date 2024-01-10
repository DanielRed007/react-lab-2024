import { render, RenderOptions } from '@testing-library/react'
import { makeStore } from '../../src/app/lib/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface RenderComponentOptions extends RenderOptions {
  initialState?: any
}

export const renderComponent = (
  ui: ReactNode,
  options: RenderComponentOptions = {},
) => {
  const { initialState, ...renderOptions } = options
  const store = makeStore()

  return render(<Provider store={store}>{ui}</Provider>, renderOptions)
}
