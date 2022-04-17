import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import ToCard from "../../components/ToCard";
import PageLayout from "../../components/Pagelayout";
import Map from './Map'

// const Map = dynamic(() => import("./Map"), { ssr: false });

const MapIndex = () => {
  return (
    <PageLayout>
      <Map />
    </PageLayout>
  );
};

export default MapIndex;
