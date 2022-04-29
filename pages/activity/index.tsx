import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";

const Activity = dynamic(() => import("../../components/ToActivity/Activity.js"), { ssr: false });

const ActivityIndex = () => {
  return (
    <PageLayout>
    <Activity />    
    </PageLayout>
  );
};

export default ActivityIndex;