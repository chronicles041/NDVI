import React from "react";
import { ILocation } from "../../types/reportTypes";

type ToDropdownProps = {
  title?: string;
  label?: string;
  options: [];
  onChange: Function;
  disabled?: boolean;
};

export default function ToDropdown({
  title,
  label,
  options,
  onChange,
  disabled,
}: any) {
  return (
    <div className="flex flex-row px-2 py-2">
      <div className="flex flex-row w-full items-center justify-center gap-5" >
        {label ? <span className=" flex-1 text-base font-medium text-secondary">{label}</span> : null}

          <select
            className="flex-1 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm focus:border-2 focus:border-primary focus:ring-transparent w-full"
            onChange={onChange}
            disabled={disabled}
          >
            <option value="Default">Select </option>

            {options?.map((v: ILocation, i: number) => (
              <>
                <option key={i} value={v.value}>
                  {v.title}
                </option>
              </>
            ))}
          </select>
      </div>
    </div>
  );
}
