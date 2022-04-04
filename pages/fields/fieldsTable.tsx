import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { ToTable } from "../../components/ToTable";
import MapService from "../maps/mapService";

type States = {
  columns: [];
  data: [];
  serverData: [];
  loading: boolean;
  pageCount: number;
};

const mapData: any = {
  CA5: {
    date: "2022-02-03",
    difference: "20",
    lndvi: 0.187,
    ldate: "2022-04-03",
  },
  CD88: {
    date: "2022-02-03",
    difference: "25",
    lndvi: 0.200,
    ldate: "2022-04-03",

  },
  CD86: {
    date: "2022-03-05",
    difference: "27",
    lndvi: 0.273,
    ldate: "2022-04-03",

  },
  CD84: {
    date: "2022-03-05",
    difference: "27",
    lndvi: 0.204,
    ldate: "2022-04-03",

  },
  CD85: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.246,
    ldate: "2022-04-03",

  },
  CS10: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CS11: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA21: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA17: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA16: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA1: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA2: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA3: {
    date: "2022-02-03",
    difference: "27",
    lndvi: 0.6,
    ldate: "2022-04-03",

  },
  CA4: {
    date: "2022-02-03",
    difference: "22",
    lndvi: 0.193,
    ldate: "2022-04-03",

  },
};

const phaseDetail: any = {
  1: {
    name: "Before 1st Top Dressing",
    endvi: "0.5",
  },
  2: {
    name: "1st Top Dressing",
    endvi: "0.5",
  },
  3: {
    name: "After 1st Top Dressing",
    endvi: "0.5",
  },
};

class FieldsTable extends React.Component {
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
      user__id: 203,
    };

    // MapService.fetchFarmListNDVI(params).then((res) => {
    //   console.log("New API:", res.data);
    //   res.data.map((data) => {
    //     if (Array.isArray(data)) {
    //       newArray = [...newArray, data[0]];
    //       console.log("New API 3321 :", newArray);
    //     }
    //   });
    //   this.setState(
    //     {
    //       loading: false,
    //       serverData: newArray,
    //     },
    //     () => this.fetchData({ pageSize: 10, pageIndex: 1 })
    //   );
    // });

    MapService.fetchFarmList(params).then((res) => {
      res.data.results.map((data: any) => {
        newArray = [...newArray, data];
        return null;
      });

      this.setState(
        {
          loading: false,
          serverData: newArray,
        },
        () => this.fetchData({ pageSize: 16, pageIndex: 0 })
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
      // pageSize,
      // pageIndex,
      this.state.serverData.length,
      this.state.serverData.slice(startRow, endRow)
    );
    this.setState({
      data: this.state.serverData.slice(startRow, endRow),
      pageCount: 1,
      // pageCount:  this.state.serverData.length / pageSize,
      // pageCount: this.state.serverData.length !== 0 ? this.state.serverData.length / pageSize : 0,
    });
    // setLoading(false);
    //   }
    // }, 1000);
  };

  clickMap = () => {
    this.props.router.push({
      pathname: `/users/${user.id}`,
      query: { success: true },
    });
  };

  getPhase = (difference: any) => {
    if (difference < 25) return phaseDetail[1].name;
    if (difference == 25) return phaseDetail[2].name;
    if (difference > 25) return phaseDetail[3].name;
  };

  getEndvi = (difference: any) => {
    if (difference < 25) return phaseDetail[1].endvi;
    if (difference == 25) return phaseDetail[2].endvi;
    if (difference > 25) return phaseDetail[3].endvi;
  };

  render() {
    const columns = [
      {
        Header: "Field ID",
        accessor: "farm_id",
      },

      {
        Header: "Farm Name",
        accessor: "farm_name",
      },
      {
        Header: "Created Date",
        // Header: "Plantation Date",
        accessor: "farm_addtion_date",
        Cell: ({ value }) => moment(value).format("DD MMMM YYYY"),
      },
      {
        Header: "Area",
        accessor: "farm_area",
        Cell: ({ value }) => `${(value * 29.6).toFixed(2)} kathha`,
      },
      {
        Header: "Province",
        accessor: "province",
        Cell: "Lumbini-5",
      },
      {
        Header: "District",
        // accessor: "district",
        Cell: "Bardiya",
      },
      {
        Header: "Municipality",
        // accessor: "district",
        Cell: "Badhaiyatal Rural Municipality",
      },
      {
        Header: "Community",
        // accessor: "district",
        Cell: "7-Dangpur",
      },
      // {
      //   Header: "Community",
      //   // accessor: "community",
      //   Cell: "-",
      // },
      {
        Header: "Crop",
        // accessor: "cropName",
        Cell: "Maize",
      },
      {
        Header: "Plantation Date",
        accessor: (row) => row,
        Cell: ({ value }) =>
          mapData[value.farm_name] ? mapData[value.farm_name].date : " ",
      },
      {
        Header: "Days After Plantation",
        accessor: (row) => row,
        Cell: ({ value }) =>
          mapData[value.farm_name] ? mapData[value.farm_name].difference : " ",
      },
      {
        Header: "Phase",
        accessor: (row) => row,
        Cell: ({ value }) =>
          mapData[value.farm_name]
            ? this.getPhase(mapData[value.farm_name].difference)
            : " ",
      },
      {
        Header: "Expected NDVI",
        accessor: (row) => row,
        Cell: ({ value }) =>
          mapData[value.farm_name]
            ? this.getEndvi(mapData[value.farm_name].difference)
            : " ",
      },
      {
        Header: "Last Recorded NDVI",
        // accessor: "ndvi",
        accessor: (row) => row,
        Cell: ({ value }) =>
        mapData[value.farm_name] ? mapData[value.farm_name].lndvi : " ",
      },
      {
        Header: "Last Recorded Date",
        // accessor: "ndvi",
        accessor: (row) => row,
        Cell: ({ value }) =>
        mapData[value.farm_name] ? mapData[value.farm_name].ldate : " "
      },
      // {
      //   Header: "Expected NDWI",
      //   // accessor: "endwi",
      //   Cell: "-",
      // },
      // {
      //   Header: "Last Recorded  NDWI",
      //   // accessor: "lndwi",
      //   Cell: "-",
      // },
      {
        Header: "Detail",
        accessor: (row) => row,
        Cell: ({ value }) => (
          <Link as={`/maps/${value.farm_id}`} href={`/maps/`} passHref>
            {/* <Link href={`/maps`} passHref > */}
            Map
          </Link>
        ),
      },
    ];

    return (
      <div className="container">
        <ToTable
          columns={columns}
          data={this.state.data}
          fetchData={this.fetchData}
          loading={this.state.loading}
          pageCount={this.state.pageCount}
        />
      </div>
    );
  }
}

export default FieldsTable;
