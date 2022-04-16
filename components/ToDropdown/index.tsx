import React from "react";

type  ToDropdownProps = {
    title:" ",
    options:[],
}
export default function ToDropdown({ title, options }: any) {
  return (
  
      <div className="flex flex-row ml-2">
        <div className="flex flex-row w-full">
          <div className="w-1/3 py-2">{title}</div>
          <div className="w-2/3 pt-1">
            <select
              className="px-2 py-1 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none w-2/3"
              // onChange={handleAmphoeSelected}
            >
              <option value="Default">Select </option>
              <option value={"banke"}>Banke</option>
              <option value={"bardiya"}>Bardiya</option>
              <option value={"kailali"}>Kailali</option>
            </select>
          </div>
        </div>
      </div>
  
  );
}
