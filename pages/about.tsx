import Link from "next/link";
import Layout from "../components/Layouts";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type AboutPageProps = {
  t: Function;
};
const AboutPage = ({ t }: AboutPageProps) => {
  return (
    <Layout title="About">
      <p>{t("navbar.about")}</p>
    </Layout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default withTranslation()(AboutPage);
