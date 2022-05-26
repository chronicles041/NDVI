import React from "react";
import { ToTable } from "./ToTable";
// import { IFieldReport } from "../types/reportTypes";

type TableColumn = {
  Header: any;
  accessor: any;
  Cell?: any;
};

type UserProps = {
  tableColumns: any[];
  tableData: {
    data: any;
    total: number;
  };
  setPageSize: Function;
  gotoPage: Function;
  limit: number;
  offset: number;
  loading: boolean;

};

type UserState = {
  columns: [TableColumn];
  data: [];
  currentPage: number;
  pageSize: number;
};

type PaginationProps = {
  pageSize: number;
  pageIndex: number;
};

class UserTable extends React.Component<UserProps, UserState> {
  state: UserState = {
    columns: [
      {
        Header: "",
        accessor: "",
      },
    ],
    data: [],
    currentPage: 0,
    pageSize: 10,
  };

  componentWillMount() {
    // this.newFarmlist();
  }

  render() {
    let tableData: any = this.props.tableData.data;
    let count: number = this.props.tableData.total;
    return (
      // <>{JSON.stringify(this.props.tableColumns)}</>
      // <div className="flex flex-col w-full  ">
      
      <ToTable
        columns={this.props.tableColumns}
        data={tableData}
        loading={this.props.loading}
        count={count}
        limit={this.props.limit}
        offset={this.props.offset}
        setPageSize={(value: Number) => this.props.setPageSize(value)}
        gotoPage={(value: Number) => this.props.gotoPage(value)}
      />
      
    );
  }
}

export default UserTable;