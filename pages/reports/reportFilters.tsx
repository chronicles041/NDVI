import React from "react";
import axios from "axios";
import { ToTable } from "../../components/ToTable";
import moment from "moment";
import ToDrawer from "../../components/ToDrawer";
import ToDropdown from "../../components/ToDropdown";

type ReportFilterProps = {
  testData: any;
  testColumns: any;
};

type ReportFilterState = {
  filterIsOpen: boolean;
};
class ReportFilters extends React.Component {
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

                <ToDropdown title="District" />
                <ToDropdown title="Municipalitiy" />
                <ToDropdown title="Ward" />
              </div>

              <hr />

              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Farm Area</p>
                <div className="flex flex-row ml-2">
                  <div className="flex flex-row w-full">
                    <div className="w-1/3 py-2">From Farm Area</div>
                    <div className="w-2/3 pt-1">Options</div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="px-6 rounded  mt-2 w-full">
                <p className="font-semibold mt-1 mb-2">Organization</p>
                <ToDropdown title="Organization" />
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
