import React from "react";
import axios from "axios";
import { ToTable } from "../../components/ToTable";
import moment from "moment";
import ToDrawer from "../../components/ToDrawer";
import ToDropdown from "../../components/ToDropdown";
import { ILocation } from "./reportTypes";
import { Slider, Switch } from "antd";
type ReportFilterProps = {
  provinceValues: ILocation[];
  districtValues: ILocation[];
  municipalityValues: ILocation[];
  wardValues: ILocation[];
  organizationValues: ILocation[];
};

type ReportFilterState = {
  filterIsOpen: boolean;
};

class ReportFilters extends React.Component<
  ReportFilterProps,
  ReportFilterState
> {
  state: ReportFilterState = {
    filterIsOpen: false,
  };

  drawerIsOpen = () => {
    this.setState({ filterIsOpen: !this.state.filterIsOpen });
  };

  render() {
    return (
      <>
        <div className="flex flex-row mb-1 ml-4">
          <div className="flex-initial p-2 mr-2">
            <button
              className="text-white bg-red-500 hover:bg-red-600 active:bg-green-600 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
              type="button"
              onClick={this.drawerIsOpen}
            >
              Filters
            </button>

            <ToDrawer
              isOpen={this.state.filterIsOpen}
              setIsOpen={this.drawerIsOpen}
            >
              <div className="px-6 rounded  mt-1 w-full">
                <p className="font-semibold">Filter Data</p>
              </div>
              <hr />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Locate Fields</p>
                <ToDropdown
                  options={this.props.provinceValues}
                  title="Province"
                  // onChange={(e:Event)=>alert(JSON.stringify(e.target.value))}
                />
                <ToDropdown
                  options={this.props.districtValues}
                  title="District"
                  // onChange={(e:Event)=>alert(JSON.stringify(e.target.value))}
                />
                <ToDropdown
                  options={this.props.municipalityValues}
                  title="Municipality"
                  // onChange={(e:Event)=>alert(JSON.stringify(e.target.value))}
                />
                <ToDropdown
                  options={this.props.wardValues}
                  title="Ward"
                  // onChange={(e:Event)=>alert(JSON.stringify(e.target.value))}
                />
              </div>

              <hr />

              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Farm Area</p>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">From Farm Area</div>
                    <Slider defaultValue={30}  />
        <Slider range defaultValue={[20, 50]}  />
                    <div className="w-2/3 pt-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        className="range range-xs"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Organization</p>
                <ToDropdown
                  options={this.props.organizationValues}
                  title="Organization"
                  // onChange={(e:Event)=>alert(JSON.stringify(e.target.value))}
                />
              </div>

              <div className="flex flex-row mb-1 ml-4">
                <div className="flex-initial p-2 mr-2">
                  <button
                    className="text-white bg-red-500 hover:bg-red-600 active:bg-green-600 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                    type="button"
                    onClick={this.drawerIsOpen}
                  >
                    Process
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-600 active:bg-green-600 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                    type="button"
                    onClick={this.drawerIsOpen}
                    //   onClick={handleResetFileter}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </ToDrawer>
          </div>
        </div>
      </>
    );
  }
}

export default ReportFilters;
