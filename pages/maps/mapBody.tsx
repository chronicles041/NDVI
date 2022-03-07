import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet-draw/dist/leaflet.draw.css";

const MapBody = ({fieldId}) => {
  const position = [51.505, -0.09];
  if (typeof window !== "undefined") {
    alert("No Window");
  }


  alert(fieldId)
  return (
    <div className="flex flex-row">
     
      {/* <div className=" bg-white basis-8/12"> */}
      <MapContainer fieldId={fieldId} center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      {/* </div>
      <div className="bg-white basis-4/12">Other Info</div> */}
    </div>
  );
};

export default MapBody;
