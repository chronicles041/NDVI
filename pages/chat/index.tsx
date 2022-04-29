import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";

const Chat = dynamic(() => import("../../components/ToChat/Chat.js"), { ssr: false });

const WeatherIndex = () => {
  return (
    <PageLayout>
    <Chat />    
    </PageLayout>
  );
};

export default WeatherIndex;