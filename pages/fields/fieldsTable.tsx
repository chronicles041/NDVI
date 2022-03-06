import axios from "axios";
import moment from "moment";
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
        Header: "Plantation Date",
        accessor: "created_date",
        Cell: ({ value }) => moment(value).format("DD MMMM YYYY"),
      },
      {
        Header: "Area",
        accessor: "farm_area",
        Cell: ({value})=> `${value} Hectare`,
      },
      {
        Header: "Province",
        accessor: "province",
        Cell: "Lumbini-5",
      },
      {
        Header: "District",
        accessor: "district",
        Cell: "district",
      },
      {
        Header: "Community",
        accessor: "community",
        Cell: "community",
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
        Cell: "0.08",
      },
      {
        Header: "Last Recorded NDVI",
        accessor: "lndvi",
        Cell: "0.08",
      },
      {
        Header: "Expected NDWI",
        accessor: "endwi",
        Cell: "0.08",
      },
      {
        Header: "Last Recorded  NDWI",
        accessor: "lndwi",
        Cell: "0.08",
      },
      {
        Header: "Detail",
        // accessor: "lndwi",
        Cell: "Show",
      },
    ];

    return (
      <div className="flex ">
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
