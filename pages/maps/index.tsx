import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/Pagelayout";
// import Map from './Map'

const ToMap = dynamic(() => import('./Map'), { ssr: false });

const MapIndex = () => {
  // const Map = React.useMemo(() => dynamic(() => import('./Map'), { loading: () => <p>Loading map...</p>, ssr: false, }), [])

  return (typeof window !== "undefined"?
    <PageLayout>
      <ToMap />
    </PageLayout> : 'Loading'
  );
};

export default MapIndex;
