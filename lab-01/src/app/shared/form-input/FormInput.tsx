import { ChangeEvent } from 'react'

interface IFormInput {
  name: string
  value: string
  length: number
  inputType: string
  customClass: string
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  testId: string
}

const FormInput = ({
  length,
  inputType,
  customClass,
  placeholder,
  onChange,
  name,
  value,
  testId,
}: IFormInput) => {
  return (
    <input
      data-testid={testId}
      name={name}
      value={value}
      maxLength={length}
      type={inputType}
      className={customClass}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default FormInput
