import { MapContainer, TileLayer, Marker, Popup, useMap ,Polygon} from "react-leaflet";
// import "leaflet-draw/dist/leaflet.draw.css";

const MapBody = ({fieldId}) => {
  const position = [
        81.5762651,
        28.0712088
      ]
  const purpleOptions = { color: 'purple' }   
  const multiPolygon = [
  
     
      [
        28.0712088,
        81.5762651
      ],
      [
        28.0571213,
        81.6081941
      ],
      [
        28.018182,
        81.5829599
      ],
      [
        28.036214,
        81.5369546
      ],
      [
        28.0704283,
        81.5759298
      ]
]


                  
              

// const center = [51.505, -0.09]
  return (
    <div className="flex flex-row">

      <MapContainer  center={ [ 28.0704283,81.5759298]} zoom={15} scrollWheelZoom={false}>
         <TileLayer   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
       {/* <Polygon pathOptions={purpleOptions} positions={bardiya} /> */}
        {/* <GeoJSon attribution="&copy; credits due..." data={...} /> */}
      </MapContainer>
     
    </div>
  );
};

export default MapBody;