import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
import ActivityForm from "./activityForm";
import Activity from "../../components/ToActivity/";
import DragList from "../../components/ToActivity/DragList";
import ReportService from "../../api/service";

const ActivityIndex = () => {

  const [activities, setActivities] = React.useState();

  useEffect(() => {
    ReportService.FetchTasks().then((res) => setActivities(res));

  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col items-end  px-3 py-6 relative">
        <div className="absolute bottom-4 right-7 z-50">
          <ActivityForm />
        </div>
        <div className="mb-10">
          {/* <Activity /> */}
          <DragList
            activities={activities}
          />
        </div>
      </div>

    </PageLayout>
  );
};

export default ActivityIndex;
