import React from "react";
import axios from "axios";
import { ToTable } from "../../components/ToTable";
import moment from "moment";
import { IFieldReport } from "./reportTypes";

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
};

type FieldVisitState = {
  columns: [TableColumn];
  data: [];
  loading: boolean;
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
    loading: false,
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
        loading={false}
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
