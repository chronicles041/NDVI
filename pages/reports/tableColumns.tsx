import moment from "moment";
import DetailModal from "../../components/FieldDetail";

export const ReportColumns = [
  {
    Header: "Farm ID",
    accessor: "farm_id",
  },

  {
    Header: "Farm Name",
    accessor: "farm_name",
  },

  {
    Header: "Farm Area(Hector)",
    accessor: "farm_area",
  },

  {
    Header: "Province",
    accessor: "province_name",
  },

  {
    Header: "District",
    accessor: "district_name",
  },

  {
    Header: "Municipality",
    accessor: "municipality_name",
  },

  {
    Header: "Ward Number",
    accessor: "ward_number",
  },

  {
    Header: "Tole Name",
    accessor: "tole_name",
  },
  {
    Header: "Organization",
    accessor: "organization_name",
  },

  {
    Header: "Crop",
    accessor: "crop_type_name",
  },

  {
    Header: "Variety",
    accessor: "seed_variety",
  },
  {
    Header: "Plantation Date",
    accessor: "plantation_date",
    Cell: ({ value }) =>
      value === "N/A" ? (
        <span className="text-red-500">{value}</span>
      ) : (
        moment(value).format("Do MMM, yy")
      ),
  },
 

  {
    Header: "Previous Phase",
    columns: [
      {
        Header: "Name",
        accessor: "previous_phase",
        Cell: ({ value }) =>
          !value ? <span className="text-red-500">N/A</span> : value.name,
      },

      {
        Header: "Value ┉",
        // accessor: "plantation_date",
        accessor: (row: any) => row,
        Cell: ({ value }: any) => (
          <>
            <div className="flex font-semibold">
              <span
                className={`${
                  value.previous_phase.value < value.previous_phase.phaseValue
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {value.previous_phase.value ? (
                  value.previous_phase.value
                ) : (
                  <span className="text-red-500">NA</span>
                )}
              </span>
              &nbsp; / &nbsp;
              <span className={` text-blue-500`}>
                {value.previous_phase.phaseValue}
              </span>
            </div>
          </>
        ),
      },
    ],
  },
  {
    Header: "Current Phase",
    columns: [
      {
        Header: "Name",
        accessor: "current_phase",
        Cell: ({ value }) =>
          !value ? <span className="text-red-500">N/A</span> : value.name,
      },
      {
        Header: " C Value ",
        // accessor: "plantation_date",
        accessor: (row: any) => row,
        Cell: ({ value }) => (
          <>
            <div className="flex font-semibold">
              <span
                className={`${
                  value.current_phase.value < value.current_phase.phaseValue
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {value.current_phase.value ? (
                  value.current_phase.value
                ) : (
                  <span className="text-red-500">NA</span>
                )}
              </span>
              &nbsp; / &nbsp;
              <span className={` text-blue-500`}>
                {value.current_phase.phaseValue}
              </span>
            </div>
          </>
        ),
      },
    ],
  },
  {
    Header: "Yeild Estimation (Mg / Hector)",
    columns: [
      {
        Header: "77 Days ",
        accessor: "yield_estimation_77",
        Cell: ({ value }: any) => <>{value ? value.toFixed(4) : "N/A"}</>,
      },
      {
        Header: "120 Days ",
        accessor: "yield_estimation_120",
      },
    ],
  },
  {
    Header: "Harvest Ready",
    accessor: "harvest_ready",
    // Cell: ({ value }: any) => value?"Ready" :"Not Ready",
    // Cell: ({ value }: any) => <>{value ? `${value} days` : "N/A"}</>,
  },
  {
    Header: "Action",
    accessor: (row: any) => row,
    Cell: ({ value }: any) => (
      <div className="flex flex-row z-0 gap-x-2 justify-center items-center">
        <DetailModal id={value.farm_id} />
      </div>
    ),
  },
];
