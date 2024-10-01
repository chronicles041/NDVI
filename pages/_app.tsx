import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layouts";
import "../styles/index.css";
import { useRouter } from "next/router";
export default function MyApp({ Component, pageProps }: AppProps) {
  // let hasToken = localStorage.getItem("Token");
  const router = useRouter();
  const currentRoute = router.asPath;
  const loginRoute = "/login";
  return loginRoute !== currentRoute ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
