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
    <div className="flex flex-row ml-2">
      <div className="flex flex-row w-full">
        {title ? <div className="w-1/3 py-2">{title}</div> : null}
        <div className="w-2/3 pt-1">
        {label ? <div className="">{label}</div> : null}

          <select
            className="px-2 py-1 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none w-2/3"
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
    </div>
  );
}
