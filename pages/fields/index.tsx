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

const Field = ({ items, t }: Props) => {
  return (
    <>
    <div className="container">
      <FieldsTable/>
    </div>
    </>
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

Field.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Field;
