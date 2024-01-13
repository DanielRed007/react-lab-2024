import { ElectricIcon, RocketIcon } from '../../utils/icons/icons'
import FormInput from '../../shared/form-input/FormInput'
import { ChangeEvent } from 'react'

interface IParkingSettings {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  vehicleValue: string
}

const ParkingSettings = ({ onChange, vehicleValue }: IParkingSettings) => {
  return (
    <div className="font-regular flex items-center justify-center w-full max-w-screen-md rounded-lg bg-gray-200 px-4 py-4 text-base text-white mb-9 flex items-center relative block w-full max-w-screen-md rounded-lg bg-gray-200 px-4 py-4 text-base text-white mb-9">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
        <RocketIcon customClass="w-5 h-5" />
      </div>

      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
        <ElectricIcon customClass="w-5 h-5" />
      </div>

      <FormInput
        name="vehicle-plate"
        value={vehicleValue}
        testId="vehicle-plate"
        length={21}
        inputType="text"
        customClass="border text-gray-950 border-gray-300 p-2 rounded-md w-32"
        onChange={onChange}
        placeholder="Enter text..."
      />
    </div>
  )
}

export default ParkingSettings
