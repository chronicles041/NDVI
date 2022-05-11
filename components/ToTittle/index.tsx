import React from 'react'

type Props = {
    tittle:string;
}

const ToTittle = ({tittle}: Props)=> {
  return (
      <>
      <div className='flex flex-col justify-center  text-center items-center w-full h-auto px-2 py-1'>
          <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {tittle} <br />
                </h2>
                <div className="text-center max-w-xl mx-auto">
                  <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-secondary ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-secondary ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                  </div>
                </div>

      </div>
      </>
  );
};
export default ToTittle;
