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
  tableData: {
    data: IFieldReport[];
    total: number;
  };
};

type FieldVisitState = {
  columns: [TableColumn];
  data: [];
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
    let tableData: any = this.props.tableData.data;
    let count: number = this.props.tableData.total;
    return (
      // <>Hello</>
      // <div className="flex flex-col w-full  ">
   
      <ToTable
        columns={this.props.testColumns}
        data={tableData}
        loading={false}
        pageCount={1}
        count={count}
      />
    );
  }
}

export default ReportTable;
