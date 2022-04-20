import React, { ReactElement, useEffect, useState } from "react";
import ReportTable from "../../components/reportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
import { IFieldFilters, IFieldReport, ILocation } from "../../types/reportTypes";
import ReportService from "../../api/service";
import { off } from "process";
import Link from "next/link";
import ToModal from "../../components/ToModal";
import DetailModal from "./fieldDetail";
import ListReport from "./listView";
import { ToTablePagination } from "../../components/ToTable/pagination";
import { ToListPagination } from "../../components/ToListPagination";
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
    Header: "Province",
    accessor: "province_name",
  },
  {
    Header: "District",
    accessor: "district_name",
  },
  {
    Header: "Municipality",
    accessor: "municipality_name",
  },
  {
    Header: "Ward Number",
    accessor: "ward_number",
  },
  {
    Header: "Tole Name",
    accessor: "tole_name",
  },
  // {
  //   Header: "Farmer Name",
  //   accessor: "farmer_name",
  // },
  // {
  //   Header: "Gender",
  //   accessor: "gender",
  // },
  // {
  //   Header: "Age",
  //   accessor: "age",
  // },
  // {
  //   Header: "Contact Number",
  //   accessor: "contact_no",
  // },
  {
    Header: "Organization",
    accessor: "organization_name",
  },

  {
    Header: "Crop",
    accessor: "crop_type_name",
  },
  // {
  //   Header: "Plantation Date",
  //   accessor: "plantation_date",
  // },

  {
    Header: "Action",
    accessor: (row: any) => row,
    Cell: ({ value }: any) => (
      <div className="flex flex-row gap-x-2 justify-center items-center">
        <div className="flex items-center justify-center">
          <Link as={`/maps/${value.farm_id}`} href={`/maps/`} passHref>
            {/* <Link href={`/maps`} passHref > */}
            <button
              className="bg-primary text-black hover:text-white hover:bg-secondary transition duration-300 ease-in-out   
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              Go to Map
            </button>
          </Link>
        </div>
        <DetailModal id={value.farm_id} />
      </div>
    ),
  },
];

const Reports = ({ selectedItem, loading, listView }: any) => {
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

  
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [limit, setLimit] = React.useState<number>(10);
  const [offSet, setOffset] = React.useState<number>(0);
  const [tableView, setTableView] = React.useState<boolean>(false);
  const defaultFilters: IFieldFilters = {
    search: " ",
    limit: limit,
    offset: offSet,
    project__id: 1,
    // organization__id: 2,
    arm_area_min: "",
    farm_area_max: "",
    tole_name: "",
  };

  const [filterParams, setFilterParams] =
    React.useState<IFieldFilters>(defaultFilters);

  useEffect(() => {
    ReportService.FetchProvince().then((res) => setprovince(res));
    ReportService.FetchDistricts().then((res) => setDistrict(res));
    ReportService.FetchMunicipality().then((res) => setMunicipalitiy(res));
    ReportService.FetchWard().then((res) => setWard(res));
    ReportService.FetchOrganizations().then((res) => setOrganization(res));
    ReportService.FetchFieldReport(filterParams).then((res) =>
      setReportData(res)
    );
    // console.log("***",filterParams?filterParams:"Undefined")
  }, [limit, offSet]);

  const processData = () => {
    ReportService.FetchFieldReport(filterParams).then((res) =>
      setReportData(res)
    );
  };

  const changePagination = (value: number) => {
    console.log("***", value);
    let newParams = { ...filterParams, offset: value };
    setFilterParams(newParams);

    setOffset(value);
  };

  return !listView ? (
    <PageLayout>
      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
        filterParams={filterParams}
        changeFilterParams={setFilterParams}
        processData={() => processData()}
      />
      <ReportTable
        setPageSize={(value: number) => setLimit(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={ReportColumns}
        tableData={reportData}
        limit={limit}
        offset={offSet}
      />
    </PageLayout>
  ) : (
    <>
      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
        filterParams={filterParams}
        changeFilterParams={setFilterParams}
        processData={() => processData()}
      />
      <ListReport
        listData={reportData.data}
        selectedItem={selectedItem}
        loading={loading}
      />
      <ToListPagination
        loading={false}
        page={
          offSet >= Math.round(reportData.total / 10) ? -1 : offSet / limit + 1
        }
        pageCount={Math.round(reportData.total / 10)}
        pageSize={10}
        setPageSize={(value: number) => setPageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
      />
    </>
  );
};

export default Reports;
