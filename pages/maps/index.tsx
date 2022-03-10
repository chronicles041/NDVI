import dynamic from "next/dynamic";
// import Map from "./map";
const Map = dynamic(() => import("./map"), { ssr: false });

const Maps = () => {
  return (
    <div className="container">
      <Map fieldId={window.location.pathname.split("/")[2]} />
    </div>
  );
};

export default Maps;
