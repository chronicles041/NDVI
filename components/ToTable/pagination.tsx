type PaginationProps = {
  loading: boolean;
  page: number;
  pageCount: number;
  pageSize: number;
  setPageSize: Function;
  gotoPage: Function;
};

export const ToTablePagination = ({
  loading,
  page,
  pageCount,
  pageSize,
  setPageSize,
  gotoPage,
}: PaginationProps) => {
  return (
    <div className="pagination flex item-center justify-between w-full my-4 mx-4 ,mt-1">
      <div className="mx-6 item-center">
        {loading ? (
          // Use our custom loading state to show a loading indicator
          <div>Loading...</div>
        ) : (
          <div className="text-lg font-semibold bg-primary px-2 py-2 text-center text-white shadow-2xl rounded-2xl opacity-80 ">
            Showing {pageSize} of ~{pageCount * pageSize} results
          </div>
        )}
      </div>
      <div className="mx-8 text-lg font-medium">
        <button
          onClick={() => gotoPage(0)}
          disabled={page === 1}
          className={
            page !== 1
              ? "mx-2 bg-secondary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl cursor-not-allowed "
          }
        >
          {"FIRST"}
        </button>{" "}
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
          {"NEXT"}
        </button>{" "}
        <button
          onClick={() => gotoPage(pageCount)}
          disabled={page === pageCount}
          className={
            page !== pageCount
              ? "mx-2 bg-secondary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl   cursor-not-allowed"
          }
        >
          {"LAST"}
        </button>{" "}
        <span className="text-lg font-medium">
          Page{" "}
          <strong>
            {page} of {pageCount}
          </strong>{" "}
        </span>
        <span className="text-lg font-medium">
          | Go to page:{" "}
          <input
            type="number"
            value={page}
            className="rounded-lg focus:ring-primary"
            defaultValue={page}
            onChange={(e) => gotoPage(e.target.value)}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          defaultValue={pageSize}
          // disabled={true}
          // hidden={true}
          // onChange={(e) => {
          //   setPageSize(Number(e.target.value));
          // }}
          // onChange={(e)=>alert(e.target.value)}
         
          onChange={(e) => setPageSize(e.target.value)}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize:number) => (
            <option key={pageSize}    value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
