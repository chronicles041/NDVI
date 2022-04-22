type PaginationProps = {
  loading: boolean;
  page: number;
  pageCount: number;
  pageSize: number;
  setPageSize: Function;
  gotoPage: Function;
};

export const ToListPagination = ({
  loading,
  page,
  pageCount,
  pageSize,
  setPageSize,
  gotoPage,
}: PaginationProps) => {
  return (
    <>
      <div className="px-2 w-full py-2 mt-3 flex flex-row items-center justify-center">
        <button
          onClick={() => gotoPage(page - 1)}
          disabled={page === 1}
          className={
            page !== 1
              ? "mx-2 bg-primary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-primary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl cursor-not-allowed "
          }
        >
          {"PREV"}
        </button>{" "}
        <button
          onClick={() => gotoPage(page + 1)}
          disabled={page === pageCount}
          className={
            page !== pageCount
              ? "mx-2 bg-primary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-primary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl   cursor-not-allowed"
          }
        >
          {"Next"}
        </button>{" "}
      </div>


        <div className="text-lg font-semibold w-full bg-primary px-2 py-2 mt-3 text-center text-white shadow-2xl rounded-sm opacity-80 ">
          {/* Showing {pageSize} of ~{pageCount * pageSize} results */}
          Showing {pageSize} of ~{pageCount * pageSize} results
        </div>

    </>
  );
};
