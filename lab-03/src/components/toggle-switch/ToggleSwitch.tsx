import { Switch } from "@headlessui/react";
import { FC, useState } from "react";

interface ToggleSwitchProps {
  enabled: boolean;
  onChangeSwitch(enabled: boolean): void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ enabled, onChangeSwitch }) => {
  return (
    <div className="py-16 p-9">
      <Switch
        data-testid="toggle-switch"
        checked={enabled}
        onChange={onChangeSwitch}
        className={`${enabled ? "bg-blue-900" : "bg-blue-500"}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ToggleSwitch;
