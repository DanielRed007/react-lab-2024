import React from 'react'

interface IRadioBoxProps {
  checked: boolean
  onChange: (ref: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  value: string
}

const RadioBox: React.FC<IRadioBoxProps> = ({
  checked,
  onChange,
  label,
  value,
}) => {
  return (
    <label className="flex items-center mb-2 text-gray-900">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  )
}

export default RadioBox
