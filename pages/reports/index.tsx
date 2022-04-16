import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import VisitsTable from "./ReportTable";
import ReportTable from "./ReportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
// import UsersTable from "./usersTable";

// type Props = {
//   ttestData : []

// };

export const testData = [
  {
    id: 1,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 2,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 3,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 4,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 5,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 6,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 7,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 8,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 9,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
  {
    id: 10,
    farmer_name: "Some Name",
    gender: "M / F",
    age: "Some Number",
    contact_number: "9843 **** **",
    organization: "Some Organization",
    crop_type_name: "Maize",
    plantation_date: "2022-02-10",
  },
];

export const testColumns = [
  {
    Header: "ID",
    accessor: "id",
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
    accessor: "contact_number",
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

const Reports = () => {
  // const data = React.useMemo(() => makeData(20), []);
  const tableData = () => testData;
  const tableColumns = () => testColumns;
  return (
    <PageLayout>
      <ReportFilters />
      <ReportTable testColumns={tableColumns()} testData={tableData()} />
    </PageLayout>
  );
};

export default Reports;
