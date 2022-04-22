import React from "react";
import { ToTable } from "./ToTable";
import { IFieldReport } from "../types/reportTypes";

type TableColumn = {
  Header: any;
  accessor: any;
  Cell?: any;
};

type FieldVisitProps = {
  tableColumns: any[];
  tableData: {
    data: IFieldReport[];
    total: number;
  };
  setPageSize: Function;
  gotoPage: Function;
  limit: Number;
  offset: Number;
  loading: boolean;

};

type FieldVisitState = {
  columns: [TableColumn];
  data: [];
  currentPage: number;
  pageSize: number;
};

type PaginationProps = {
  pageSize: number;
  pageIndex: number;
};

class ReportTable extends React.Component<FieldVisitProps, FieldVisitState> {
  state: FieldVisitState = {
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

export default ReportTable;
