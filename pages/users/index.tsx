import React, { useEffect, useState } from "react";
import PageLayout from "../../components/Pagelayout";
import UserTable from "../../components/userTable";

const Users = () => {
  return (
    <PageLayout>
      <div className="flex flex-row ml-4">

    Under Maintainance
      </div>
      {/* <UserTable
        // setPageSize={(value: number) => setLimit(value)}
        setPageSize={(value: number) => alert(value)}
        // setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={ReportColumns}
        tableData={reportData}
        limit={limit}
        offset={offSet}
        loading={tableLoading}
      /> */}
    </PageLayout>
  );
};

export default Users;
