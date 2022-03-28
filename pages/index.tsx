import Head from "next/head";
import Layout from "../components/Layouts";
// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import i18n from "./i18n";
import { withTranslation } from "react-i18next";
// import i18next from "i18next";

function Home({ Component, pageProps, children, t, i18n }: any) {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then((res: any) => console.log(res));
  };
  // const changeLanguage = (lng: string) =>  console.log("Reached",lng);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default withTranslation()(Home);
