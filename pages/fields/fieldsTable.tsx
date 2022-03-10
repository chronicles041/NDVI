import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { ToTable } from "../../components/ToTable";

type States = {
  columns: [];
  data: [];
  serverData: [];
  loading: boolean;
  pageCount: number;
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
      search: " ",
      user__id: 1,
      //   offset: offset,
    };

    axios
      .get("https://app.teamonetech.com/api/v1/farm_info_view/", {
        params,
      })
      .then((res) => {
        res.data.results.map((data: any) => {
          newArray = [...newArray, data];
          return null;
        });

        this.setState(
          {
            loading: false,
            serverData: newArray,
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
      this.state.serverData,
      this.state.serverData.slice(startRow, endRow)
    );
    this.setState({
      data: this.state.serverData.slice(startRow, endRow),
      pageCount: this.state.serverData.length / pageSize,
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
        accessor: "created_date",
        Cell: ({ value }) => moment(value).format("DD MMMM YYYY"),
      },
      {
        Header: "Area",
        accessor: "farm_area",
        Cell: ({ value }) => `${value} Hectare`,
      },
      {
        Header: "Province",
        accessor: "province",
        Cell: "Lumbini-5",
      },
      {
        Header: "District",
        accessor: "district",
        Cell: "-",
      },
      {
        Header: "Community",
        accessor: "community",
        Cell: "-",
      },
      {
        Header: "Crop",
        accessor: "cropName",
        Cell: "Maize",
      },
      {
        Header: "Phase",
        accessor: "phaseName",
        Cell: "Before Top Dressing",
      },
      {
        Header: "Expected NDVI",
        accessor: "endvi",
        Cell: "-",
      },
      {
        Header: "Last Recorded NDVI",
        accessor: "lndvi",
        Cell: "-",
      },
      {
        Header: "Expected NDWI",
        accessor: "endwi",
        Cell: "-",
      },
      {
        Header: "Last Recorded  NDWI",
        accessor: "lndwi",
        Cell: "-",
      },
      {
        Header: "Detail",
        accessor: (row) => row,
        Cell: ({ value }) => (
          <Link
            as={`/maps/${value.farm_id}`}
            href={`/maps/`} passHref
          >
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
