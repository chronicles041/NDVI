import React, { ReactElement, useEffect } from "react";
import ReportTable from "./reportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
import { IFieldReport, ILocation } from "./reportTypes";
import ReportService from "./api/service";
// import UsersTable from "./usersTable";

// type Props = {
//   ttestData : []

// };

const testColumns = [
  {
    Header: "SN",
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
];

const params: {} = {
  search: " ",
  limit: 10,
  offset: 0,
};

const Reports = () => {
  const tableColumns = () => testColumns;
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
  }>({ data:[], total: 0 });

  useEffect(() => {
    ReportService.FetchProvince().then((res) => setprovince(res));
    ReportService.FetchDistricts().then((res) => setDistrict(res));
    ReportService.FetchMunicipality().then((res) => setMunicipalitiy(res));
    // ReportService.FetchWard().then((res) => setWard(res));
    ReportService.FetchOrganizations().then((res) => setOrganization(res));
    ReportService.FetchFieldReport(params).then((res) => setReportData(res));
  }, []);

  return (
    <PageLayout>
      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
      />
      <ReportTable testColumns={tableColumns()} tableData={reportData} />
    </PageLayout>
  );
};

export default Reports;
