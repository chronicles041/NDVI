
import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layouts";
import "../styles/index.css";
import { useRouter } from "next/router";



export default function MyApp({ Component, pageProps }: AppProps) {
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


