import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import FieldsTable from "./fieldsTable";

type Props = {
  items: User[];
  t: Function;
};

const WithStaticProps = ({ items, t }: Props) => {
  return (
    <div className="flex ">
      <FieldsTable />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  const items: User[] = sampleUserData;

  return {
    props: {
      items,
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

WithStaticProps.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WithStaticProps;
