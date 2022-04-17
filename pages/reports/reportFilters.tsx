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
              className="text-white bg-secondary opacity-95 hover:bg-primary shadow-md uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
              type="button"
              onClick={this.drawerIsOpen}
            >
              Filters
            </button>

            <ToDrawer
              isOpen={this.state.filterIsOpen}
              setIsOpen={this.drawerIsOpen}
            >
              <div className=" rounded bg-white z-10   mt-1 w-full fixed top-0 left-0 right-0 ">
                <p className="font-semibold p-4">Filter Data</p>
              <hr className="border-[20%] border-secondary " />

              </div>
              <div style={{marginBottom:"2rem !important"}} className=" overflow-y-auto flex flex-col gap-y-4">
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Locate Fields</p>
                  <ToDropdown title="District" />
                  <ToDropdown title="Municipalitiy" />
                  <ToDropdown title="Ward" />
                </div>
                <hr className="border-[20%] border-primary" />
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Farm Area</p>
                  <div className="flex flex-row ml-2">
                    <div className="flex flex-row w-full">
                      <div className="w-1/3 py-2">From Farm Area</div>
                      <div className="w-2/3 pt-1">Options</div>
                    </div>
                  </div>
                </div>
                <hr className="border-[20%] border-primary" />
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Organization</p>
                  <ToDropdown title="Organization" />
                </div>
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Organization</p>
                  <ToDropdown title="Organization" />
                </div>
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Organization</p>
                  <ToDropdown title="Organization" />
                </div>
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Organization</p>
                  <ToDropdown title="Organization" />
                </div>
                <div className="px-6 rounded  mt-2 w-full">
                  <p className="font-semibold mt-1 mb-2">Organization</p>
                  <ToDropdown title="Organization" />
                </div>
              </div>
              <div className="flex fixed bottom-0 h-16 bg-white w-full  flex-col  ">
              <hr className='border-[20%] border-secondary'/>

                <div className="flex gap-x-2 p-2 mr-2">
                  <button
                    className="text-white bg-secondary opacity-90 hover:opacity-100 uppercase py-2 px-6 rounded outline-none focus:outline-none mt-2 w-full"
                    type="button"
                    onClick={this.drawerIsOpen}
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
                    onClick={this.drawerIsOpen}
                    //   onClick={handleResetFileter}
                  >
                    Reset
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
