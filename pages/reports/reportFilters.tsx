import React from "react";
import axios from "axios";
import { ToTable } from "../../components/ToTable";
import moment from "moment";
import ToDrawer from "../../components/ToDrawer";
import ToDropdown from "../../components/ToDropdown";
import { IFieldFilters, ILocation } from "../../types/reportTypes";
import { Slider, Switch } from "antd";
type ReportFilterProps = {
  provinceValues: ILocation[];
  districtValues: ILocation[];
  municipalityValues: ILocation[];
  wardValues: ILocation[];
  organizationValues: ILocation[];
  filterParams: IFieldFilters;
  changeFilterParams: Function;
  processData: Function;
  resetFilter: Function;
  processFilter: Function;
};

type ReportFilterState = {
  filterIsOpen: boolean;
};
const harvestReadyOptions = [
  { title: "All", value: null },
  { title: "Ready", value: true },
  { title: "Not Ready", value: false },
];
class ReportFilters extends React.Component<
  ReportFilterProps,
  ReportFilterState
> {
  state: ReportFilterState = {
    filterIsOpen: false,
  };
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.filterParams !== this.props.filterParams) {
      // console.log("Did Update Slider", prevProps, this.props.mapData);
      this.props.processFilter();
    }
  }
  drawerIsOpen = () => {
    this.setState({ filterIsOpen: !this.state.filterIsOpen });
  };

  triggerProcess = () => {
    this.props.processData();
    this.setState({ filterIsOpen: !this.state.filterIsOpen });
  };

  handleFilterChange = (e: any, name: string) => {
    let oldFP = this.props.filterParams;
    let newFP = { ...oldFP, [name]: e.target.value };
    this.props.changeFilterParams(newFP);
    // this.props.processFilter()
  };

  render() {
    return (
      <>
        <div className="flex-none p-2">
          <button
            className="text-white bg-secondary opacity-95  transition duration-300 ease-in-out  hover:bg-primary shadow-md uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
            type="button"
            onClick={this.drawerIsOpen}
          >
            Filters
          </button>

          <ToDrawer
            isOpen={this.state.filterIsOpen}
            setIsOpen={this.drawerIsOpen}
          >
            <div className=" rounded bg-white z-10   mt-1 w-full fixed top-0 left-0   ">
              <p className="font-semibold p-4">Filter Data</p>
              <hr className="border-[20%] border-secondary " />
            </div>
            <div className="flex flex-col mt-3 overflow-x-scroll ">
              <div className="px-6 rounded   mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Locate Fields</p>
                <ToDropdown
                  options={this.props.provinceValues}
                  title="Province"
                  onChange={(e: Event) =>
                    this.handleFilterChange(
                      e,
                      "ward__municipality__district__province__id"
                    )
                  }
                />
                <ToDropdown
                  options={this.props.districtValues}
                  title="District"
                  onChange={(e: Event) =>
                    this.handleFilterChange(
                      e,
                      "ward__municipality__district__id"
                    )
                  }
                />
                <ToDropdown
                  options={this.props.municipalityValues}
                  title="Municipalitiy"
                  onChange={(e: Event) =>
                    this.handleFilterChange(e, "ward__municipality__id")
                  }
                />
                <ToDropdown
                  onChange={(e: Event) =>
                    this.handleFilterChange(e, "ward__number")
                  }
                  options={this.props.wardValues}
                  title="Ward"
                />

                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">{"Tole Name"}</div>
                    <div className="w-2/3 pt-1">
                      <input
                        onChange={(e: any) =>
                          this.handleFilterChange(e, "tole_name")
                        }
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-[20%] mt-4 border-primary" />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Farm Area (Hector)</p>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">{"Farm Area Min"}</div>
                    <div className="w-2/3 pt-1">
                      <input
                        onChange={(e: any) =>
                          this.handleFilterChange(e, "farm_area_min")
                        }
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">{"Farm Area Max"}</div>
                    <div className="w-2/3 pt-1">
                      <input
                        onChange={(e: any) =>
                          this.handleFilterChange(e, "farm_area_max")
                        }
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-[20%] mt-4 border-primary" />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Organization</p>
                <ToDropdown
                  options={this.props.organizationValues}
                  onChange={(e: Event) =>
                    this.handleFilterChange(e, "organization__id")
                  }
                  title="Organization"
                />
              </div>
              <hr className="border-[20%] mt-4 border-primary" />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Other</p>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">{"Farm Name"}</div>
                    <div className="w-2/3 pt-1">
                      <input
                        onChange={(e: any) =>
                          this.handleFilterChange(e, "farm_name")
                        }
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">{"Days to Harvest"}</div>
                    <div className="w-2/3 pt-1">
                      <input
                        onChange={(e: any) =>
                          this.handleFilterChange(e, "days_to_harvest")
                        }
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <ToDropdown
                  options={harvestReadyOptions}
                  title="Harvest Ready"
                  onChange={(e: Event) =>
                    this.handleFilterChange(
                      e,
                      "harvest_ready"
                    )
                  }
                />
              </div>
              <hr className="border-[20%] mt-4 border-primary" />
            </div>
            <br />
            <br />
            <br />
            <div className="flex fixed bottom-0 h-16 bg-white w-full  flex-col  ">
              <hr className="border-[20%]  border-secondary" />

              <div className="flex gap-x-2 p-2 mr-2">
                <button
                  className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                  type="button"
                  onClick={() => this.triggerProcess()}
                >
                  Process
                </button>
                <button
                  className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                  type="button"
                  onClick={this.drawerIsOpen}
                  //   onClick={handleResetFileter}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                  type="button"
                  onClick={() => this.props.resetFilter()}
                >
                  Reset
                </button>
              </div>
            </div>
          </ToDrawer>
        </div>
      </>
    );
  }
}

export default ReportFilters;
