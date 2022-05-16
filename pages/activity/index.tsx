import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
import ActivityForm from "./activityForm";

const Activity = dynamic(
  () => import("../../components/ToActivity/Activity.js"),
  { ssr: false }
);

const ActivityIndex = () => {
  return (
    <PageLayout>
      <div className="flex-initial p-2">
        <ActivityForm />
        <Activity />
      </div>
    </PageLayout>
  );
};

export default ActivityIndex;
