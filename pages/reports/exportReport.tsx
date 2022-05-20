import { CSVLink } from "react-csv";

export const CreateExportData = ({ reportData }: any) => {
  let tempArray: any = [];
  reportData.data.map((data) => {
    let tempData = {
      "Farm ID": data.farm_id,
      "Farm Name": data.farm_name,
      Province: data.province_name,
      District: data.district_name,
      Municipality: data.municipality_name,
      "Ward Number": data.ward_number,
      Tole: data.tole_name,
      Organization: data.organization_name,
      Crop: "Maize",
      Variety: data.seed_variety,
      "Plantation Date": data.plantation_date,
      "Current Phase": data.current_phase_name,
      "Current Phase Value": data.current_phase_value,
      "Yeild-77": data.yield_estimation_77,
      "Yeild-120": data.yield_estimation_120,
    };
    tempArray.push(tempData);
  });
  // return tempArray;
  return (
    <button
      className="text-white bg-secondary_one opacity-95  transition duration-300 ease-in-out  hover:bg-primary shadow-md uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
      type="button"
    >
      <CSVLink
        filename={`${Date().toLocaleString()}_plantsat.csv`}
        // filename={`${Date().toLocaleString()}_plantsat.csv`}
        data={tempArray}
        // href=""
      >
        Export
      </CSVLink>
    </button>
  );
};
