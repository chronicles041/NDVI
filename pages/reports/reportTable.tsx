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

  testColumns: any[];
  tableData: IFieldReport[];
};

type FieldVisitState = {
  columns: [TableColumn];
  data: IFieldReport[];
  loading: boolean;
  pageCount: number;
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
    pageCount: 0,
    pageSize: 10,
  };

  componentWillMount() {
    // this.newFarmlist();
  }



  render() {
    return (
      // <div className="flex flex-col w-full  ">

      <ToTable
        columns={this.props.testColumns}
        data={this.props.tableData}
        loading={false}
        pageCount={1}
      />
    );
  }
}

export default ReportTable;
