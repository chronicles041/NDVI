import React, { ReactElement, useEffect, useState } from "react";
import ReportTable from "../../components/reportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
import {
  IFieldFilters,
  IFieldReport,
  ILocation,
} from "../../types/reportTypes";
import ReportService from "../../api/service";
import { off } from "process";
import Link from "next/link";
import ToModal from "../../components/ToModal";
import DetailModal from "../../components/FieldDetail";
import ListReport from "../../components/listView";
import { ToTablePagination } from "../../components/ToTable/pagination";
import { ToListPagination } from "../../components/ToListPagination";
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment";


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
    Header: "Farm Area(Hector)",
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
  {
    Header: "Variety",
    accessor: "seed_variety",
  },
  {
    Header: "Plantation Date",
    accessor: "plantation_date",
    Cell: ({ value }) =>
      value === "N/A" ? (
        <span className="text-red-500">{value}</span>
      ) : (
        moment(value).format("Do MMM, yy")
      ),
  },

  {
    Header: "Previous Phase",
    columns: [
      {
        Header: "Name",
        accessor: "previous_phase",
        Cell: ({ value }) =>
          !value ? <span className="text-red-500">N/A</span> : value.name,
      },
      {
        Header: "Value ┉",
        // accessor: "plantation_date",
        accessor: (row: any) => row,
        Cell: ({ value }: any) => (
          <>
            <div className="flex font-semibold">
              <span
                className={`${
                  value.previous_phase.value < value.previous_phase.phaseValue
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {value.previous_phase.value ? (
                  value.previous_phase.value
                ) : (
                  <span className="text-red-500">NA</span>
                )}
              </span>
              &nbsp; / &nbsp;
              <span className={` text-blue-500`}>
                {value.previous_phase.phaseValue}
              </span>
            </div>
          </>
        ),
      },
    ],
  },

  {
    Header: "Current Phase",
    columns: [
      {
        Header: "Name",
        accessor: "current_phase",
        Cell: ({ value }) =>
          !value ? <span className="text-red-500">N/A</span> : value.name,
      },
      {
        Header: " Value ⇡",
        // accessor: "plantation_date",
        accessor: (row: any) => row,
        Cell: ({ value }) => (
          <>
            <div className="flex font-semibold">
              <span
                className={`${
                  value.current_phase.value < value.current_phase.phaseValue
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {value.current_phase.value ? (
                  value.current_phase.value
                ) : (
                  <span className="text-red-500">NA</span>
                )}
              </span>
              &nbsp; / &nbsp;
              <span className={` text-blue-500`}>
                {value.current_phase.phaseValue}
              </span>
            </div>
          </>
        ),
      },
    ],
  },
  {
    Header: "Yeild Estimation (Mg / Hector)",
    columns: [
      {
        Header: "77 Days ",
        accessor: "yield_estimation_77",
        Cell: ({ value }: any) => <>{value ? value.toFixed(4) : "N/A"}</>,
      },
      {
        Header: "120 Days ",
        accessor: "yield_estimation_120",
      },
    ],
  },
  {
    Header: "Harvest Ready",
    accessor: "days_before_harvest",
    Cell: ({ value }: any) => "N/A",
    // Cell: ({ value }: any) => <>{value ? `${value} days` : "N/A"}</>,
  },

  // {
  //   Header: "Next Phase",
  //   // accessor: "plantation_date",
  //   accessor: (row: any) => row,
  //   Cell: ({ value }: any) => (
  //     <>
  //       <div className={"text-blue-500"}>0.425</div>
  //     </>
  //   ),
  // },
  {
    Header: "Action",
    accessor: (row: any) => row,
    Cell: ({ value }: any) => (
      <div className="flex flex-row z-0 gap-x-2 justify-center items-center">
        <DetailModal id={value.farm_id} />
      </div>
    ),
  },
];

const Reports = ({
  selectedItem,
  loading,
  listView,
  getMultiplefields,
}: any) => {
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
  const [limit, setLimit] = React.useState<number>(listView ? 20 : 10);
  const [offSet, setOffset] = React.useState<number>(0);
  const [selectedData, selectData] = useState<IFieldReport | undefined>();
  const [tableView, setTableView] = React.useState<boolean>(false);
  const [tableLoading, setTableLoading] = React.useState<boolean>(false);

  const defaultFilters: IFieldFilters = {
    search: " ",
    limit: limit,
    offset: offSet,
    project__id: 1,
    // organization__id: 2,
    arm_area_min: "",
    farm_area_max: "",
    tole_name: "",
    has_season: true,
  };

  const [filterParams, setFilterParams] =
    React.useState<IFieldFilters>(defaultFilters);

  useEffect(() => {
    setTableLoading(true);
    ReportService.FetchProvince().then((res) => setprovince(res));
    ReportService.FetchDistricts().then((res) => setDistrict(res));
    ReportService.FetchMunicipality().then((res) => setMunicipalitiy(res));
    ReportService.FetchWard().then((res) => setWard(res));
    ReportService.FetchOrganizations().then((res) => setOrganization(res));
    ReportService.FetchFieldReport(filterParams).then((res) => {
      // console.log("**RES",res)
      setReportData(res);
      setTableLoading(false);
      if (listView) {
        createMultiplolygon(res);
      }
    });

    // console.log("***",filterParams?filterParams:"Undefined")
  }, [limit, offSet]);

  const createMultiplolygon = (res) => {
    let tempArray: any = [];
    res.data.map((data) => {
      let singlePloygon = data.farm_polygon_json?.location;
      tempArray.push(singlePloygon);
      // tempArray.push(createPolygon(singlePloygon));
    });
    // console.log("**Create Multiploygon", tempArray);
    getMultiplefields(tempArray);
  };

  const processData = () => {
    setTableLoading(true);

    ReportService.FetchFieldReport(filterParams).then((res) => {
      setReportData(res);
      setTableLoading(false);
      createMultiplolygon(res);
      // if (res.count > 1) {
      // }
    });
  };

  const changePagination = (value: number) => {
    console.log("***", value);
    let newParams = { ...filterParams, offset: value };
    setFilterParams(newParams);
    setOffset(value);
  };

  const changePageSize = (value: number) => {
    console.log("***", value);
    let newParams = { ...filterParams, limit: value };
    setFilterParams(newParams);
    setLimit(value);
    // setOffset(limit/offSet)
  };

  const onItemSelect = (value) => {
    selectData(value);
    selectedItem(value);
  };

  const currentP: number = offSet >= reportData.total ? -1 : offSet / limit + 1;

  const createExportData = () => {
    let tempArray: any = [];
    reportData.data.map((data) => {
      let tempData = {
        "Farm ID": data.farm_id,
        "Farm Name": data.farm_name,
        Province: data.province_name,
        District: data.district_name,
        Municipality: data.municipality_name,
        "Ward Number": data.ward_number,
        Tole: data.tole_name,
        Organization: data.organization_name,
        Crop: "Maize",
      };

      tempArray.push(tempData);
    });
    return tempArray;
  };

  return !listView ? (
    <PageLayout>
      <div className="flex flex-row ml-4">
        <ReportFilters
          provinceValues={province}
          districtValues={districts}
          municipalityValues={municipality}
          wardValues={ward}
          organizationValues={organization}
          filterParams={filterParams}
          changeFilterParams={setFilterParams}
          processData={() => processData()}
          resetFilter={() => setFilterParams(defaultFilters)}
        />
        <div className="flex-initial p-2">
          <button
            className="text-white bg-secondary_one opacity-95  transition duration-300 ease-in-out  hover:bg-primary shadow-md uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
            type="button"
          >
            <CSVLink
              filename={`${Date().toLocaleString()}_plantsat.csv`}
              data={createExportData()}
            >
              Export
            </CSVLink>
          </button>

        </div>
      </div>
      <ReportTable
        // setPageSize={(value: number) => setLimit(value)}
        setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={ReportColumns}
        tableData={reportData}
        limit={limit}
        offset={offSet}
        loading={tableLoading}
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
        resetFilter={() => setFilterParams(defaultFilters)}
      />

      <ListReport
        listData={reportData.data}
        selectedItem={onItemSelect}
        loading={tableLoading}
        activeItem={selectedData}
      />

      <ToListPagination
        loading={loading}
        page={offSet >= reportData.total ? -1 : offSet / limit + 1}
        pageCount={Math.round(reportData.total / 20)}
        pageSize={20}
        // pageSize={limit}
        // page={currentP}
        setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 20)
        }
      />
    </>
  );
};

export default Reports;
