import * as React from "react";
// import styled from 'styled-components';
import { usePagination, useTable } from "react-table";
// import "./styles.css";
import makeData from "./makeData";

type Props = {
  columns: any;
  data: any;
  fetchData: any;
  loading: boolean;
  pageCount: any;
};

export const ToTable = ({
  columns,
  data,
  fetchData,
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
    usePagination
  );
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
  // Render the UI for your table
  return (
    <>
      <div className="flex flex-col w-full p-4   mx-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y  divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps()}
                          key={i}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row: any, i: number) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={i}>
                        {row.cells.map((cell: any) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              key={i}
                            >
                              <div className="text-sm text-gray-900">
                                {cell.render("Cell")}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  <tr>
                    {loading ? (
                      // Use our custom loading state to show a loading indicator
                      <td>Loading...</td>
                    ) : (
                      <td>
                        Showing {page.length} of ~
                        {controlledPageCount * pageSize} results
                      </td>
                    )}
                  </tr>
                </tbody>
                
              </table>
              <div className="pagination">
                      <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {"<<"}
                      </button>{" "}
                      <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                      >
                        {"<"}
                      </button>{" "}
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                      >
                        {">"}
                      </button>{" "}
                      <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        {">>"}
                      </button>{" "}
                      <span>
                        Page{" "}
                        <strong>
                          {pageIndex + 1} of {pageOptions.length}
                        </strong>{" "}
                      </span>
                      <span>
                        | Go to page:{" "}
                        <input
                          type="number"
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
        </div>
      </div>
    </>
  );
};
