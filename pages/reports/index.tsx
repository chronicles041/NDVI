import React, { useEffect, useState } from "react";
import ReportTable from "../../components/reportTable";
import PageLayout from "../../components/Pagelayout";
import ReportFilters from "./reportFilters";
import {
  IFieldFilters,
  IFieldReport,
  ILocation,
} from "../../types/reportTypes";
import ReportService from "../../api/service";
import ListReport from "../../components/listView";
import { ToListPagination } from "../../components/ToListPagination";
import ReportColumns from "../../components/tableColumns";
import CreateExportData from "../../components/exportReport";
import ActivityForm from "../activity/activityForm";
import ToDropdown from "../../components/ToDropdown";
import ToMultiple from "../../components/ToMultiple";

const Reports = ({
  selectedItem,
  loading,
  listView,
  formView,
  getMultiplefields,
  handleItemChange,
}: any) => {
  const [districts, setDistrict] = React.useState<ILocation[]>([
    { value: 0, title: "No Districts Found" },
  ]);

  const [municipality, setMunicipalitiy] = React.useState<ILocation[]>([
    { value: 0, title: "No Municipality Found" },
  ]);

  const [ward, setWard] = React.useState<ILocation[]>([
    { value: 0, title: "No Wards Found" },
  ]);

  const [province, setprovince] = React.useState<ILocation[]>([
    { value: 0, title: "No Province Found" },
  ]);

  const [organization, setOrganization] = React.useState<ILocation[]>([
    { value: 0, title: "No Organizations Found" },
  ]);

  const [reportData, setReportData] = React.useState<{
    data: IFieldReport[];
    total: number;
  }>({ data: [], total: 0 });

  const [pageSize, setPageSize] = React.useState<number>(10);
  const [limit, setLimit] = React.useState<number>(listView ? 20 : 10);
  const [offSet, setOffset] = React.useState<number>(0);
  const [selectedData, selectData] = useState<IFieldReport | undefined>();
  const [tableView, setTableView] = React.useState<boolean>(false);
  const [tableLoading, setTableLoading] = React.useState<boolean>(false);

  const FarmDefaultFilters: IFieldFilters = {
    ward__id: null,
    ward__number: null,
    ward__municipality__id: null,
    ward__municipality__district__id: null,
    ward__municipality__district__province__id: null,
    farm_name: null,
    limit: limit,
    offset: offSet,
    project__id: 1,
    has_season: true,
    search: null,
    organization__id: null,
    farm_area_min: null,
    farm_area_max: null,
    tole_name: null,
  };

  const [filterParams, setFilterParams] =
    React.useState<IFieldFilters>(FarmDefaultFilters);

  // const [locationFilterParams, setLocationFilterParams] = React.useState<any>();

  useEffect(() => {
    createReportFilter();

    processData();

    // console.log("***",filterParams?filterParams:"Undefined")
  }, [filterParams]);

  const createMultiplolygon = (res) => {
    let tempArray: any = [];
    res.data.map((data) => {
      let singlePloygon = data.farm_polygon_json?.location;
      tempArray.push(singlePloygon);
      // tempArray.push(createPolygon(singlePloygon));
    });
    // console.log("**Create Multiploygon", tempArray);
    getMultiplefields(tempArray);
  };

  const processData = () => {
    setTableLoading(true);
    ReportService.FetchFieldReport(filterParams).then((res) => {
      console.log("***debug", res);

      setReportData(res);
      setTableLoading(false);
      // createReportFilter();
      if (listView) {
        createMultiplolygon(res);
      }
      // return
      // createMultiplolygon(res);
      // if (res.count > 1) {
      // }
    });
    ReportService.FetchDropdownFarm(filterParams).then((res) => {
      setFarmData(res);
    });
    return;
  };

  const changePagination = (value: number) => {
    console.log("*** Change Pagination ", value);
    let newParams = { ...filterParams, offset: value };
    setFilterParams(newParams);
    setOffset(value);
  };

  const changePageSize = (value: number) => {
    console.log("*** Change", value);
    let newParams = { ...filterParams, limit: value };
    setFilterParams(newParams);
    setLimit(value);
    // setOffset(limit/offSet)
  };

  const onItemSelect = (value) => {
    selectData(value);
    selectedItem(value);
  };

  const createReportFilter = () => {
    console.log("***Report Filter", filterParams);
    const locationFilterParams = {
      district: {
        province__id: filterParams.ward__municipality__district__province__id,
      },
      municipality: {
        district__id: filterParams.ward__municipality__district__id,
        district__province__id:
          filterParams.ward__municipality__district__province__id,
      },
      ward: {
        municipality__name: filterParams.ward__municipality__id,
      },
    };

    ReportService.FetchProvince().then((res) => setprovince(res));
    ReportService.FetchDistricts(locationFilterParams.district).then((res) =>
      setDistrict(res)
    );
    ReportService.FetchMunicipality(locationFilterParams.municipality).then(
      (res) => setMunicipalitiy(res)
    );
    ReportService.FetchWard(locationFilterParams.ward).then((res) =>
      setWard(res)
    );
    ReportService.FetchOrganizations().then((res) => setOrganization(res));
  };

  const [farmData, setFarmData] = React.useState<any>([
    { value: 0, title: "No Farms Found" },
  ]);

  // const currentP: number = offSet >= reportData.total ? -1 : offSet / limit + 1;

  return listView ? (
    <>
      {/* {JSON.stringify(selectedData)} */}
      {selectedData ? (
        <div className="flex-col p-2">
          <ActivityForm 
          selectedFarm = {selectedData}
          reloadActivities={() => null}
          
          />
        </div>
      ) : null}

      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
        filterParams={filterParams}
        changeFilterParams={setFilterParams}
        processData={() => processData()}
        resetFilter={() => setFilterParams(FarmDefaultFilters)}
        processFilter={() => createReportFilter()}
      />

      <ListReport
        listData={reportData.data}
        selectedItem={onItemSelect}
        loading={tableLoading}
        activeItem={selectedData}
      />

      <ToListPagination
        loading={loading}
        page={offSet >= reportData.total ? -1 : offSet / limit + 1}
        pageCount={Math.round(reportData.total / 20)}
        pageSize={20}
        // pageSize={limit}
        // page={currentP}
        setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 20)
        }
      />
    </>
  ) : formView ? (
    <>
      <ToMultiple
        options={farmData}
        handleItemChange={(value) => handleItemChange(value)}
        title={"Select Farms"}
      />
      <ReportFilters
        provinceValues={province}
        districtValues={districts}
        municipalityValues={municipality}
        wardValues={ward}
        organizationValues={organization}
        filterParams={filterParams}
        changeFilterParams={setFilterParams}
        processData={() => processData()}
        resetFilter={() => setFilterParams(FarmDefaultFilters)}
        processFilter={() => createReportFilter()}
      />
    </>
  ) : (
    <PageLayout>
      <div className="flex flex-row ml-4">
        <ReportFilters
          provinceValues={province}
          districtValues={districts}
          municipalityValues={municipality}
          wardValues={ward}
          organizationValues={organization}
          filterParams={filterParams}
          changeFilterParams={setFilterParams}
          processData={() => processData()}
          resetFilter={() => setFilterParams(FarmDefaultFilters)}
          processFilter={() => createReportFilter()}
        />

        <div className="flex-initial p-2">
          <CreateExportData reportData={reportData} />
        </div>

        <div className="flex-initial p-2">
          <ActivityForm reloadActivities={() => null} />
        </div>
      </div>
      <ReportTable
        // setPageSize={(value: number) => setLimit(value)}
        setPageSize={(value: number) => alert(value)}
        // setPageSize={(value: number) => changePageSize(value)}
        gotoPage={(value: number) =>
          changePagination(value - 1 < 0 ? 0 : (value - 1) * 10)
        }
        tableColumns={ReportColumns}
        tableData={reportData}
        limit={limit}
        offset={offSet}
        loading={tableLoading}
      />
    </PageLayout>
  );
};

export default Reports;
