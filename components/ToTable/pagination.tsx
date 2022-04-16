export const ToTablePagination = () => {
  let loading = false;
  let page = [1];
  let controlledPageCount = 2;
  let pageSize = 3;
  let canPreviousPage = true;
  let canNextPage = false;
  let pageIndex = 2;
  let pageOptions = [1, 2, 3];

  return (
    <div className="pagination flex item-center justify-between w-full my-4 mx-4 ,mt-1">
      <div className="mx-6 item-center">
        {loading ? (
          // Use our custom loading state to show a loading indicator
          <div>Loading...</div>
        ) : (
          <div className="text-lg font-semibold bg-primary px-2 py-2 text-center text-white shadow-2xl rounded-2xl opacity-80 ">
            Showing {page.length} of ~{controlledPageCount * pageSize} results
          </div>
        )}
      </div>
      <div className="mx-8 text-lg font-medium">
        <button
          //   onClick={() => gotoPage(0)}
          //   disabled={!canPreviousPage}
          className={
            canPreviousPage
              ? "mx-2 bg-secondary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl cursor-not-allowed "
          }
        >
          {"FIRST"}
        </button>{" "}
        <button
          //   onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={
            canPreviousPage
              ? "mx-2 bg-primary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-primary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl cursor-not-allowed "
          }
        >
          {"PREV"}
        </button>{" "}
        <button
          //   onClick={() => nextPage()}
          disabled={!canNextPage}
          className={
            canNextPage
              ? "mx-2 bg-primary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-primary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl   cursor-not-allowed"
          }
        >
          {"NEXT"}
        </button>{" "}
        <button
          //   onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className={
            canNextPage
              ? "mx-2 bg-secondary rounded-full px-2 text-white  shadow-2xl"
              : "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl   cursor-not-allowed"
          }
        >
          {"LAST"}
        </button>{" "}
        <span className="text-lg font-medium">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="text-lg font-medium">
          | Go to page:{" "}
          <input
            type="number"
            className="rounded-lg focus:ring-primary"
            defaultValue={pageIndex + 1}
            // onChange={(e) => {
            //   const page = e.target.value ? Number(e.target.value) - 1 : 0;
            //   gotoPage(page);
            // }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          disabled={true}
          hidden={true}
          //   onChange={(e) => {
          //     setPageSize(Number(e.target.value));
          //   }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
