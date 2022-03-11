import dynamic from "next/dynamic";
// import Map from "./map";
const Map = dynamic(() => import("./map"), { ssr: false });

const Visitmap = () => {
  return (
    <div className="container">
      <Map  />
       hello
    </div>
  );
};

export default Visitmap;