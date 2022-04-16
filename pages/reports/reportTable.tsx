import React from "react";
import axios from "axios";
import { ToTable } from "../../components/ToTable";
import moment from "moment";



type TableColumn = {
  Header: any;
  accessor: any;
  Cell?: any;
};

type FieldVisitProps = {
  testData: any;
  testColumns:any;
};


type FieldVisitState = {
  columns: [TableColumn];
  data:any;
  serverData: [];
  loading: boolean;
  pageCount: number;
  pageSize: number;
};

type PaginationProps = {
  pageSize : number;
  pageIndex : number;
}



class ReportTable extends React.Component<FieldVisitProps, FieldVisitState> {
  state: FieldVisitState = {
    columns: [
      {
        Header: "",
        accessor: "",
      },
    ],
    data: [],
    serverData: [],
    loading: false,
    pageCount: 0,
    pageSize: 10,
  };

  componentWillMount() {
    // this.newFarmlist();
  }

  newFarmlist = () => {
    this.setState({
      loading: true,
    });
    let newArray: any = [];
    let params = {
      search: " ",
      //   limit: limit,
      //   offset: offset,
    };

    axios
      .get("http://localhost:3000/results", {
        params,
      })
      .then((res) => {
        // res.data.features.map((data: any) => {
        //   newArray = [...newArray, data];
        //   return null;
        // });
        console.log("REs", res.data);
        let count = 0;
        const sumall = res.data
          .map((item) => item["Largest Farm Size (in Katha)"])
          .reduce((prev, curr) => prev + curr, 0);

        let unique_inspectors = new Set(
          res.data.map((x) => x["_submitted_by"])
        );
        let unique_organizations = new Set(
          res.data.map(
            (x) =>
              x["Which agriculture cooperative is the farmer associated with?"]
          )
        );
        console.log("========================TOTAL=========================");
        console.log("Total Area In Hector=", (sumall / 29.6).toFixed(2));
        console.log("Total Farmners Information=", res.data.length);
        console.log("Total Organizations=", unique_organizations.size);
        console.log("Total Field Inspectors=", unique_inspectors.size + 1);

        this.setState(
          {
            loading: false,
            serverData: res.data,
          },
          () => this.fetchData({ pageSize: 10, pageIndex: 1 })
        );
        // setFarmList(newArray);
        // setPageCount(Math.ceil(res.data.count / params.limit));
      });
    // setLoading(false);
  };

  fetchData = ({ pageSize, pageIndex }:PaginationProps) => {
    const startRow = pageSize * pageIndex;
    const endRow = startRow + pageSize;
    console.log(
      "Here",
      pageSize,
      pageIndex,
      startRow,
      endRow,
      this.state.serverData,
      this.state.serverData.slice(startRow, endRow)
    );
    this.setState({
      data: this.props.testData,
      // data: this.state.serverData.slice(startRow, endRow),
      pageCount: 1,
    });
    // setLoading(false);
    //   }
    // }, 1000);
  };

  render() {

    return (
      // <div className="flex flex-col w-full  ">

     
      <ToTable
        columns={this.props.testColumns}
        data={this.state.data}
        loading={false}
        pageCount={this.state.pageCount}
      />
      
    );
  }

}

export default ReportTable;
