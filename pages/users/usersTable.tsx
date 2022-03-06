import axios from "axios";
import React from "react";
import { ToTable } from "../../components/ToTable";

type States = {
  columns: [];
  data: [];
  serverData: [];
  loading: boolean;
  pageCount: number;
};
class UsersTable extends React.Component {
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
      .get("https://app.teamonetech.com/api/v1/allusers/", {
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
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "User Type",
        // accessor: "user_type_name",
      },
      {
        Header: "Username",
        // accessor: "farm_id",
      },
      {
        Header: "Fullname",
        // accessor: "farm_id",
      },
      {
        Header: "Address",
        // accessor: "farm_id",
      },
      {
        Header: "Email",
        // accessor: "farm_id",
      },
      {
        Header: "Contact Number",
        // accessor: "farm_id",
      },
      {
        Header: "Recent Activity",
        // accessor: "farm_id",
      },
      {
        Header: "Detail",
        // accessor: "lndwi",
        Cell: (
          <>
            <button>Show</button>
          </>
        ),
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

export default UsersTable;
