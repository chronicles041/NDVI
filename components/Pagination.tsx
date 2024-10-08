import React from "react";


type PaginationProps = {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="inline-flex items-center -space-x-px ">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-l-lg ${
              currentPage === 1 ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-400"
            }`}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight text-gray-700 border border-gray-300 ${
                number === currentPage ? "bg-green-500 text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button   
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-r-lg ${
              currentPage === totalPages ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-00"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
