import axios from "axios";
import React from "react";
import ToCard from "../../components/ToCard";
import { ToTable } from "../../components/ToTable";
import Link from "next/link";
import ToModal from "../../components/ToModal";

type States = {
  columns: [];
  data: [];
  serverData: [];
  loading: boolean;
  pageCount: number;
};
class VisitList extends React.Component {
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
        res.data.features.map((data: any) => {
          newArray = [...newArray, data];
          return null;
        });
        console.log("REs",newArray)
        this.setState(
          {
            loading: false,
            serverData:newArray,
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
        // accessor: "",
      },
      {
        Header: "User Type",
        accessor: "district_name",
      },
    ];

    return (
      <div className="flex flex-col w-full p-10 ">
        {/* <ToTable
          columns={columns}
          data={this.state.data}
          fetchData={this.fetchData}
          loading={false}
          pageCount={this.state.pageCount}
        /> */}
          <ToModal />
        <ToCard title="Visits">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  District
                </th>
                  <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  Municipality
                </th>
                <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  Area
                </th>
                <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  Expected Visits
                </th>
                <th className="px-6 py-3 text-left text-base font-semibold text-gray-500 uppercase tracking-wider border">
                  Completed Visit
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.serverData.map((data) => (
                <tr className="bg-white border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <>
                    <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                    {data.properties.DISTRICT}
                      
                    </td>
                              <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                       {data.properties.Type_GN}
                    </td>
                    <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                       {data.properties.GaPa_NaPa}
                    </td>
                    <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                   
                    {data.properties.Ward_Num}
                    </td>
                    <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                      {data.id} - {data.Type_GN}
                    </td>
                    <td className="py-4 px-6 text-base font-medium text-secondary whitespace-nowrap dark:text-white border">
                         {/* <Link href={"/visitmap"}> */}
                        
                         {/* </Link> */}
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </ToCard>

        {/* {JSON.stringify(this.state.serverData)} */}
      </div>
    );
  }
}

export default VisitList;
