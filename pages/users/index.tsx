import React, { useEffect, useState } from "react";
import PageLayout from "../../components/Pagelayout";
import UserColumns from "../../components/TableColumns/userColumns";
import UserTable from "../../components/userTable";
import { IFieldReport } from "../../types/reportTypes";
import ReportService from "../../api/service";

const Users = () => {
  const [reportData, setReportData] = React.useState<{
    data: IFieldReport[];
    total: number;
    total_area: number;
  }>({ data: [], total: 0, total_area: 0 });

  useEffect(() => {
    // createReportFilter();
    processData();
    // console.log("***",filterParams?filterParams:"Undefined")
  }, []);
  const processData = () => {
    // setTableLoading(true);
    ReportService.FetchTableUsers().then((res) => {
      console.log("***debug", res);
      // console.log("***debug", res);
      setReportData(res);
    });

    return;
  };
  return (
    <PageLayout>
      <div className="flex flex-row ml-4">Under Maintainance</div>
      <UserTable
        // setPageSize={(value: number) => setLimit(value)}
        setPageSize={(value: number) => alert(value)}
        // setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={UserColumns}
        tableData={reportData}
        limit={10}
        offset={0}
        loading={false}
      />
    </PageLayout>
  );
};

export default Users;
