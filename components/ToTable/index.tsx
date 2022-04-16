import * as React from "react";
// import styled from 'styled-components';
import { usePagination, useTable } from "react-table";

// import "./styles.css";
import makeData from "./makeData";

type Props = {
  columns: any;
  data: any;
  loading: boolean;
  pageCount: any;
};

export const ToTable = ({
  columns,
  data,
  loading,
  pageCount: controlledPageCount,
}: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination,
  );
  // React.useEffect(() => {
  // }, [data, pageIndex, pageSize]);
  // Render the UI for your table
  return (
    <>
      <div className="flex flex-col w-full  ">
        {/* <div className="-my-2 sm:-mx-6 lg:-mx-8"> */}
          <div className="py-2 flex flex-col min-w-full sm:px-6 lg:px-8 bg-white border-b border-gray-200 sm:rounded-lg">
            <div className="shadow flex flex-row overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg overflow-x-visible mt-6">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200 "
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border"
                          {...column.getHeaderProps()}
                          key={i}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="body">
                  {page.map((row: any, i: number) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        key={i}
                        className="bg-white border-b hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {row.cells.map((cell: any) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border"
                              key={i}
                            >
                              <div className="">{cell.render("Cell")}</div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination flex item-center justify-between w-full my-4 mx-4 ,mt-1">
              <div className="mx-6 item-center">
                {loading ? (
                  // Use our custom loading state to show a loading indicator
                  <div>Loading...</div>
                ) : (
                  <div className="text-lg font-semibold bg-primary px-2 py-2 text-center text-white shadow-2xl rounded-2xl opacity-80 ">
                    Showing {page.length} of ~{controlledPageCount * pageSize}{" "}
                    results
                  </div>
                )}
              </div>
              <div className="mx-8 text-lg font-medium">
                <button
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className={
                    canPreviousPage
                      ? "mx-2 bg-secondary rounded-full px-2 text-white  shadow-2xl"
                      : "mx-2 bg-secondary rounded-full px-2 text-gray-200 opacity-70 shadow-2xl cursor-not-allowed "
                  }
                >
                  {"FIRST"}
                </button>{" "}
                <button
                  onClick={() => previousPage()}
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
                  onClick={() => nextPage()}
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
                  onClick={() => gotoPage(pageCount - 1)}
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
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: "100px" }}
                  />
                </span>{" "}
                <select
                  value={pageSize}
                  disabled={true}
                  hidden={true}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};
