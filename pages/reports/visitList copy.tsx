import axios from "axios";
import React from "react";
import ToCard from "../../components/ToCard";
import { ToTable } from "../../components/ToTable";
import Link from "next/link";
import ToModal from "../../components/ToModal";
import moment from "moment";

type States = {
  columns: [];
  data: [];
  serverData: [];
  loading: boolean;
  pageCount: number;
};
class ReportTable extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      serverData: [],
      loading: false,
      pageCount: 0,
      pageSize: 10,
    };
  }

  static async getInitialProps() {
    return {};
  }

  componentWillMount() {
    this.newFarmlist();
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
        console.log(
          "Total Area In Hector=",
          (sumall / 29.6).toFixed(2)
        );
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

  fetchData = ({ pageSize, pageIndex }) => {
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
      data: this.state.serverData.slice(startRow, endRow),
      pageCount: 24,
    });
    // setLoading(false);
    //   }
    // }, 1000);
  };

  render() {
    const columns = [
      {
        Header: "Farm Tracking Code",
        accessor: "Farm Tracking Code",
      },
      {
        Header: "Visit Date/Time",
        accessor: "Data Collection (Date and Time)",
        Cell: ({ value }) => moment(value).format("Do MMMM YYYY , HH:MM"),
      },
      {
        Header: "District",
        accessor: "District",
      },
      {
        Header: "Municipality",
        // accessor: "Municipality",
        accessor: (row) => row,
        Cell: ({ value }) => (
          <>
            {value["District"] === "Bardiya" ? (
              <h2>{value["Municipality"]}</h2>
            ) : (
              ""
            )}
            {value["District"] === "Banke" ? (
              <h2>{value["Municipality__1"]}</h2>
            ) : (
              ""
            )}
            {value["District"] === "Kailali" ? (
              <h2>{value["Municipality__2"]}</h2>
            ) : (
              ""
            )}
          </>
        ),
      },
      {
        Header: "Ward",
        accessor: "Ward Number",
      },
      {
        Header: "Community",
        accessor: "Tole Name",
      },
      {
        Header: "Farmer Name",
        accessor: "Farmer Name",
      },
      {
        Header: "Gender",
        accessor: "Gender",
      },
      {
        Header: "Age",
        accessor: "Age",
      },
      {
        Header: "Contact Number",
        accessor: "Contact Number",
      },
      {
        Header: "Organization",
        accessor:
          "Which agriculture cooperative is the farmer associated with?",
      },
      {
        Header: "Crop",
        // accessor:"",
        Cell:()=>"Maize",
      },
      {
        Header: "Plantation Date",
        accessor:"Maize Plantation Date?",
      },
     
      {
        Header: "Field Inspector",
        accessor: "_submitted_by",
        // accessor: (row) => row,
        Cell: ({ value }) => (
          <>
            {value === "sapkota_plantsat" ? (
              <h2>{"Archana Sapkota (PlantSat)"}</h2>
            ) : (
              ""
            )}
            {value === "jaishi_plantsat" ? (
              <h2>{"Kuber Jaishi (PlantSat)"}</h2>
            ) : (
              ""
            )}
            {value === "pandey_plantsat" ? (
              <h2>{"Chiran Pandy(PlantSat)"}</h2>
            ) : (
              ""
            )}
            {value === "plantsat" ? <h2>{"Suman Ghimire (PlantSat)"}</h2> : ""}
            {value === "boxer123" ? <h2>{"Bishal Acharya (PlantSat)"}</h2> : ""}
            {/* {value} */}
            {/* {value['District']=== 'Banke' ?  <h2>{value["Municipality__1"]}</h2> : ''}
          {value['District']=== 'Kailali' ?  <h2>{value["Municipality__2"]}</h2> : ''} */}
          </>
        ),
      },
    ];

    return (
      // <div className="flex flex-col w-full  ">
        <ToTable
          columns={columns}
          data={this.state.data}
          fetchData={this.fetchData}
          loading={false}
          pageCount={this.state.pageCount}
        />

    );
  }
}

export default ReportTable;



