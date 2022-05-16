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
      <div className="flex flex-col items-end gap-y-8 px-3 py-6">
        <ActivityForm />
        <Activity />
      </div>
    </PageLayout>
  );
};

export default ActivityIndex;
