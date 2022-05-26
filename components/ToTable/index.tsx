import * as React from "react";
// import styled from 'styled-components';
import { usePagination, useTable } from "react-table";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../ToIcons";
import Loader from "../ToIcons/loader";
import makeData from "./makeData";
import { ToTablePagination } from "./pagination";

type Props = {
  columns: any;
  data: any;
  loading: boolean;
  count: number;
  setPageSize: Function;
  gotoPage: Function;
  limit: number;
  offset: number;
};

export const ToTable = ({
  columns,
  data,
  loading,
  pageCount: controlledPageCount,
  count,
  gotoPage,
  setPageSize,
  limit,
  offset,
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
    // gotoPage,
    nextPage,
    previousPage,
    // setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true,
      // pageCount: controlledPageCount,
    },
    usePagination
  );
  // React.useEffect(() => {
  // }, [data, pageIndex, pageSize]);
  // Render the UI for your table]

  const currentP: number = offset >= count ? -1 : parseInt(offset / limit) + 1;
   
  return (
    <>
      <div className="flex flex-col w-full h-auto  ">
        {/* <div className="-my-2 sm:-mx-6 lg:-mx-8"> */}
        <div className="py-2 flex flex-col min-w-full sm:px-6 lg:px-8 bg-white border-b border-gray-200 sm:rounded-lg">
          <div className="shadow flex flex-row overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg overflow-x-visible mt-6">
            <table
              {...getTableProps()}
              // className="min-w-full divide-y divide-gray-200 "
              className={`${loading ? 'min-w-full divide-y divide-gray-200 flex flex-col justify-center items-center':'min-w-full divide-y divide-gray-200'}`}
            >


              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                    {headerGroup.headers.map((column,index) => (
                      <th
                        className={`${
                          column.render("Header") === "Action"
                            ? " bg-white"
                            : ""
                        } px-6 py-3 align-right text-left text-base font-semibold text-gray-500 uppercase tracking-wider border`}
                        {...column.getHeaderProps()}
                        key={index}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="items-center">
                <tr
                  className={`bg-white border-b  flex-center`}
                  hidden={!loading}
                >
                  <td className="item-center text-center">
                  <ToIcon
                      type={IconTypes.Loading}
                      size={IconSize.LOADING}
                      style={IconStyles.Loading}
                    />
                  </td>  
                  
                </tr>
                {page.map((row: any, i: number) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={i}
                      className={`bg-white border-b hover:bg-gray-100 `}
                      hidden={loading}
                    >
                      {row.cells.map((cell: any,indeX:number) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={`${
                              cell.render("Header") === "Action"
                                ? "  bg-white inset-x-0  "
                                : ""
                            } py-4 px-6 text-base font-medium text-secondary whitespace-nowrap  border`}
                            key={indeX}
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

          <ToTablePagination
            loading={false}
            page={currentP}
            pageCount={Math.round(count / 10)}
            pageSize={limit}
            // setPageSize={(value: number) => alert(value)}
            setPageSize={(value: number) => setPageSize(value)} 
            gotoPage={(value: number) => gotoPage(value)}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
