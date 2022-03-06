import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Maps = () => {
    const position = [51.505, -0.09]
    if (typeof window !== "undefined") {
       alert('No Window')
      }
  return (

    <div className="flex flex-row">
      <div className=" bg-white basis-8/12">
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="bg-white basis-4/12">Other Info</div>
    </div>
  );
};

export default Maps;
