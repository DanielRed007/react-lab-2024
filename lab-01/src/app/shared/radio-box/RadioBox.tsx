import { ChangeEvent, FC } from 'react'

interface IRadioBoxProps {
  checked: boolean
  onChange: (ref: ChangeEvent<HTMLInputElement>) => void
  label: string
  value: string
}

const RadioBox: FC<IRadioBoxProps> = ({ checked, onChange, label, value }) => {
  return (
    <label className="flex items-left mb-2 text-gray-900">
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
