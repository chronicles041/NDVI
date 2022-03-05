import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import List from "../../components/List";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "next-i18next";
import React, { ReactElement } from "react";
import { ToTable } from "../../components/ToTable";
import makeData from "../../components/ToTable/makeData";

type Props = {
  items: User[];
  t: Function;
};

const WithStaticProps = ({ items, t }: Props) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);
  const serverData = makeData(10000);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(serverData.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(serverData.length / pageSize));

        setLoading(false);
      }
    }, 1000);
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },

      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );

  // const data = React.useMemo(() => makeData(20), []);

  return (
    <div className="flex ">
      {/* <List items={items} /> */}
      <ToTable
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
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
// export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = sampleUserData;
//   return {
//     props: {
//       items,
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// };

WithStaticProps.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default WithStaticProps;
