import { useState } from "react";

const ToMultiple = ({ options, handleItemChange, title }: any) => {
  const [isList, setIsList] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isSubList, setIsSubList] = useState(3);

  const onItemSelect = (e, value) => {
    let tempItem = selectedItem;
    if (e.target.checked) {
      //   alert(` ADD ${value}`);
      tempItem.push(value);
    }
    if (!e.target.checked) {
      // alert(` Remove ${value}`);
      tempItem.pop(value);
    }
    setSelectedItem(tempItem);
    console.log(tempItem);
    handleItemChange(tempItem);
    return;
  };

  return (
    <div className="h-30">
      <div
        onClick={() => setIsList(!isList)}
        className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
      >
        {title}
        <div>
          {isList ? (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {isList &&
        options.map((option) => (
          <div className="w-64 mt-2 p-4  bg-white shadow rounded">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  onClick={() => setIsSubList(1)}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="pl-4 flex items-center">
                  <div className="bg-gray-100  border rounded-sm border-gray-200  w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="checkbox"
                      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      onChange={(e) => onItemSelect(e, option.value)}
                      checked={selectedItem.includes(option.value)}
                      //   defaultValue={selectedItem.find(option)}
                    />
                    <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm leading-normal ml-2 text-gray-800">
                    {option.title}
                  </p>
                </div>
              </div>
              <p className="w-8 text-xs leading-3 text-right text-indigo-700">
                {option.value}
              </p>
            </div>

            {/* <button className="text-xs bg-indigo-100 hover:bg-indigo-200 rounded-md mt-6 font-medium py-2 w-full leading-3 text-indigo-700">Select</button> */}
          </div>
        ))}
      <style>
        {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};
export default ToMultiple;
