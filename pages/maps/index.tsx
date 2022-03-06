import MapBody from "./mapBody";

const Maps = () => {
    const position = [51.505, -0.09]
    // if (typeof window !== "undefined") {
    //    alert('No Window')
    //   }



  
  return (

    <div className="flex flex-row">
      <div className=" bg-white basis-8/12">
          {/* <MapBody /> */}
      </div>
      <div className="bg-white basis-4/12">Other Info</div>
    </div>
  );
    
};

export default Maps;
