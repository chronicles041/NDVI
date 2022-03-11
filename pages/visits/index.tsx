import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import VisitsTable from "./visitList";
import VisitList from "./visitList";
// import UsersTable from "./usersTable";

type Props = {
  items: User[];
  t: Function;
};

const Visits = ({ items, t }: Props) => {
  // const data = React.useMemo(() => makeData(20), []);

  return (
    <div className="flex ">
      {/* <UsersTable /> */}
  <VisitList />
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

Visits.getLayout = function getLayout(page: ReactElement) {
  return <Layout >{page}</Layout>;
};

export default Visits;
