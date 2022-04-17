import React, { ReactElement, useEffect, useState } from "react";
import ReportTable from "./reportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
import { IFieldReport, ILocation } from "./reportTypes";
import ReportService from "./api/service";
import { off } from "process";
import Link from "next/link";
import ToModal from "../../components/ToModal";
import DetailModal from "./fieldDetail";
// import UsersTable from "./usersTable";

// type Props = {
//   ttestData : []

// };

const ReportColumns = [
  {
    Header: "Farm ID",
    accessor: "farm_id",
  },
  {
    Header: "Farm Name",
    accessor: "farm_name",
  },
  {
    Header: "Farm Area",
    accessor: "farm_area",
  },
  {
    Header: "Farmer Name",
    accessor: "farmer_name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Contact Number",
    accessor: "contact_no",
  },
  {
    Header: "Organization",
    accessor: "organization",
  },

  {
    Header: "Crop",
    accessor: "crop_type_name",
  },
  {
    Header: "Plantation Date",
    accessor: "plantation_date",
  },
  {
    Header: "Detail",
    accessor: (row: any) => row,
    Cell: ({ value }: any) => (
      <>
        <Link as={`/maps/${value.farm_id}`} href={`/maps/`} passHref>
          {/* <Link href={`/maps`} passHref > */}
          Map
        </Link>
        <DetailModal
            id = {value.farm_id}
        />
      </>
    ),
  },
];

// const DetailModal = () => {
//   return (
//     <>
//       <button
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//         data-modal-toggle="defaultModal"
//       >
//         Toggle modal
//       </button>

//     </>
//   );
// };



const params: {} = {
  search: " ",
  limit: 10,
  offset: 0,
};

const Reports = () => {
  const [districts, setDistrict] = React.useState<ILocation[]>([
    { value: 0, title: "No Districts Found" },
  ]);

  const [municipality, setMunicipalitiy] = React.useState<ILocation[]>([
    { value: 0, title: "No Municipality Found" },
  ]);

  const [ward, setWard] = React.useState<ILocation[]>([
    { value: 0, title: "No Wards Found" },
  ]);

  const [province, setprovince] = React.useState<ILocation[]>([
    { value: 0, title: "No Wards Found" },
  ]);

  const [organization, setOrganization] = React.useState<ILocation[]>([
    { value: 0, title: "No Wards Found" },
  ]);

  const [reportData, setReportData] = React.useState<{
    data: IFieldReport[];
    total: number;
  }>({ data: [], total: 0 });

  const [pageSize, setPageSize] = React.useState<Number>(10);
  const [limit, setLimit] = React.useState<Number>(10);
  const [offSet, setOffset] = React.useState<Number>(0);

  useEffect(() => {
    const params: {} = {
      search: " ",
      limit: limit,
      offset: offSet,
      project__id: 1,
    };
    ReportService.FetchProvince().then((res) => setprovince(res));
    ReportService.FetchDistricts().then((res) => setDistrict(res));
    ReportService.FetchMunicipality().then((res) => setMunicipalitiy(res));
    ReportService.FetchWard().then((res) => setWard(res));
    ReportService.FetchOrganizations().then((res) => setOrganization(res));
    ReportService.FetchFieldReport(params).then((res) => setReportData(res));
  }, [limit, offSet]);

  return (
    <PageLayout>
      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
      />
      <ReportTable
        setPageSize={(value: number) => setLimit(value)}
        gotoPage={(value: number) =>
          setOffset(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={ReportColumns}
        tableData={reportData}
        limit={limit}
        offset={offSet}
      />
    </PageLayout>
  );
};

export default Reports;
