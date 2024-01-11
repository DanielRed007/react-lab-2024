import { Switch } from '@headlessui/react'
import React, { useState } from 'react'

interface ToggleSwitchProps {
  onChange: (isChecked: boolean) => void
  enabled?: boolean
  testId: string
}

const ToggleSwitch = ({
  onChange,
  enabled = false,
  testId,
}: ToggleSwitchProps) => {
  return (
    <>
      <Switch
        checked={enabled}
        onChange={(e) => onChange(e)}
        data-testid={testId}
        className={`${enabled ? 'bg-blue-700' : 'bg-blue-500'}
      relative inline-flex h-[19px] w-[39px] shrink-0 cursor-pointer rounded-full mt-1 ml-4 border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
        pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </>
  )
}

export default ToggleSwitch
