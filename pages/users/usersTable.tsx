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
        accessor: "user_type_name",
      },
      {
        Header: "Username",
         accessor: "username",
      },
      {
        Header: "Name",
        accessor: "frist_name",
      },
      {
        Header: "User Status",
        accessor: "is_active",
        Cell: ({value})=> (
          <div className={value?"text-white rounded-full shadow-xl font-medium uppercase px-6 py-3 text-center bg-lime-600  cursor-not-allowed":"text-white rounded-full shadow-xl font-medium uppercase px-6 py-3 bg-green-600 cursor-not-allowed"}>
         {value ? 'Active':'Inactive'}
          </div>
          
        )
      },
      
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contact Number",
         accessor: "mobile_number",
      },
     
      {
        Header: "Detail",
        // accessor: "lndwi",
        Cell: (
          <>
            <button className="text-white rounded-full shadow-xl font-medium uppercase px-8 text-center py-6 bg-secondary hover:bg-primary hover:text-secondary transition ease-in-out duration-300">Show</button>
          </>
        ),
      },
    ];

    return (
      <div className="flex min-w-full">
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
