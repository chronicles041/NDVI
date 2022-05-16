import { ReactNode, useState } from "react";
import ToTittle from "../ToTittle";

type Props = {
  children?: ReactNode;
  title: string;
  type?: any;
  onOpen: Function;
};

const ToModal = ({ children, title, type, onOpen }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const setModalOpen = () => {
    setShowModal(true);
    onOpen();
  };
  return (
    <>
      <button
        className=" text-white bg-primary hover:text-white hover:bg-secondary  transition duration-300 ease-in-out shadow-md
      font-bold  rounded-md px-4 py-2 border-opacity-30 hover:shadow-lg outline-none focus:outline-none"
        type="button"
        onClick={() => setModalOpen()}
      >
        {title}
      </button>
      {showModal ? (
        <>
          <div className="flex  justify-center bg-gray-500 transition duration-300 ease-in-out bg-opacity-50 items-center overflow-x-hidden   overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative flex flex-col justify-center items-center w-full p-5 mt-20 mb-20 h-screen my-6 mx-auto max-w-3xl">
              <div className="relative w-full bg-white border-2 h-full p-6 flex flex-col gap-y-2 items-center  m-3 rounded-lg shadow-lg">
               <ToTittle tittle={title ? title :"Feild Details"}></ToTittle>
                <div className="flex flex-col h-[90%] w-full overflow-x-hidden overflow-y-hidden">
                  {" "}
                  {children}{" "}
                </div>
                <div className="flex flex-row absolute top-1 right-2">
                  <div className=" w-full">
                    <button
                      className="text-white transition duration-300 ease-in-out  bg-secondary  hover:bg-primary hover:text-white shadow-md  rounded-md outline-none focus:outline-none mt-2 px-2 py-2 w-full"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-base px-2 font-semibold">
                        Close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </>
      ) : null}
    </>
  );
};

export default ToModal;
