import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import ToCard from "../../components/ToCard";
// import Map from './Map'

const Map = dynamic(() => import("../../components/leaflet/Map.js"), { ssr: false });

const Field = () => {
  return (
    <>
      <div className="container">
        <ToCard title="Maps">
          <Map />
        </ToCard>
      </div>
    </>
  );
};

export default Field;
