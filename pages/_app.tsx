import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layouts";
import "../styles/index.css";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentRoute = router.asPath;
  const loginRoute = "/login";
  return currentRoute !== loginRoute ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default appWithTranslation(MyApp);
