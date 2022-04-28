import axios, { responseEncoding } from "axios";
import { IFieldReport, ILocation } from "../types/reportTypes";
import React from "react";
import { baseUrl } from "./serviceConfig";

export default new (class ReportService {
  FetchPhases() {
    return (
      axios
        // .get<ILocation, any>("https://app.teamonetech.com/api/v1/province/", {
        .get<any>(`${baseUrl}Phases/`, {})
        .then((res) => {
          return res;
        })
    );
  }

  FetchProvince() {
    return (
      axios
        // .get<ILocation, any>("https://app.teamonetech.com/api/v1/province/", {
        .get<ILocation, any>(`${baseUrl}province/`, {})
        .then((res) => {
          let tempReturnValue: ILocation[] = [];
          res.data.results.map((value: { name: string; id: number }) => {
            tempReturnValue = [
              ...tempReturnValue,
              { title: value.name, value: value.id },
            ];
            // console.log("**API**DropdDowm", tempReturnValue);
          });
          return tempReturnValue;
        })
    );
  }

  FetchDistricts() {
    return axios.get<ILocation, any>(`${baseUrl}district/`, {}).then((res) => {
      let tempReturnValue: ILocation[] = [];
      res.data.results.map((value: { name: string; id: number }) => {
        tempReturnValue = [
          ...tempReturnValue,
          { title: value.name, value: value.id },
        ];
        // console.log("**API**DropdDowm", tempReturnValue);
      });
      return tempReturnValue;
    });
  }

  FetchMunicipality() {
    return axios
      .get<ILocation, any>(`${baseUrl}municipality/`, {})
      .then((res) => {
        let tempReturnValue: ILocation[] = [];
        res.data.results.map((value: { name: string; id: number }) => {
          tempReturnValue = [
            ...tempReturnValue,
            { title: value.name, value: value.id },
          ];
          // console.log("**API**DropdDowm", tempReturnValue);
        });
        return tempReturnValue;
      });
  }

  FetchWard() {
    return axios.get<ILocation, any>(`${baseUrl}ward/`, {}).then((res) => {
      let tempReturnValue: ILocation[] = [];
      res.data.results.map((value: { name: number; id: number }) => {
        tempReturnValue = [
          ...tempReturnValue,
          { title: value.number, value: value.id },
        ];
        // console.log("**API**DropdDowm", tempReturnValue);
      });
      return tempReturnValue;
    });
  }

  FetchOrganizations() {
    return axios
      .get<ILocation, any>(`${baseUrl}organization/`, {})
      .then((res) => {
        let tempReturnValue: ILocation[] = [];

        res.data.results.map((value: { name: string; id: number }) => {
          tempReturnValue = [
            ...tempReturnValue,
            { title: value.name, value: value.id },
          ];
          // console.log("**API**DropdDowm", tempReturnValue);
        });
        return tempReturnValue;
      });
  }

  FetchFieldReport(params: any) {
    return axios
      .get<IFieldReport, any>(`${baseUrl}farm_info_view/`, {
        params,
      })
      .then((res) => {
        let tempReturnValue: IFieldReport[] = [];
        res.data.results.map((value: IFieldReport, i: number) => {
          tempReturnValue = [
            ...tempReturnValue,
            {
              farm_id: value.farm_id,
              farm_area: value.farm_area,
              farm_name: value.farm_name,
              farmer_name: "Some Farmer",
              gender: "M / F",
              age: 40,
              contact_no: 9843323432,
              organization_name: value.organization_name,
              municipality_name: value.municipality_name,
              district_name: value.district_name,
              province_name: value.province_name,
              crop_type_name: value?.season[0]
                ? `${value.season[0].crop_name_en}`
                : "Maize",
              // crop_type_name:value?.season[0] ? `${value.season[0].crop_name_en}(${value.season[0].crop_name_np})`: "Maize",
              plantation_date: value?.season[0]
                ? value.season[0].crop_plantation_date
                : "N/A",
              ward: value.ward,
              ward_number: value.ward_number,
              tole_name: value.tole_name,
              farm_polygon_json: value.farm_polygon_json,
              extra_field: value.extra_field,
              current_phase: {
                name:value?.season[0] ? value.season[0].crops.current_phase?.phase_name : 'N/A',
                value:value?.season[0] ? value.season[0].crops.current_phase.ndvi?.ndvi_value : 'N/A',
                phaseValue:  value?.season[0] ? value.season[0].crops.current_phase.phase_ndvi_value:'N/A',
              },
              previous_phase: {
                name:value?.season[0] ? value.season[0].crops.previous_phase?.phase_name : -1,
                value:value?.season[0] ? value.season[0].crops.previous_phase.ndvi?.ndvi_value : 'N/A',
                phaseValue:  value?.season[0] ? value.season[0].crops.previous_phase.phase_ndvi_value:'N/A',
              },
              // current_phase: value?.season[0] ? value.season[0].crops.current_phase.phase_name : 'N/A',
              current_phase_value : value?.season[0] ? value.season[0].crops.current_phase.ndvi?.ndvi_value : 'N/A',
              current_phase_name : value?.season[0] ? value.season[0].crops.current_phase?.phase_name : 'N/A',
              previous_phase_value : value?.season[0] ? value.season[0].crops.previous_phase.ndvi?.ndvi_value : 'N/A',
              previous_phase_name: value?.season[0] ? value.season[0].crops.previous_phase?.phase_name : 'N/A',
            },
          ];
          // console.log("**API**DropdDowm", tempReturnValue);
        });
        let ServerData = {
          data: tempReturnValue,
          total: res.data.count,
        };
        return ServerData;
      });
  }

  FetchFieldReportID(id: number) {
    return axios
      .get<IFieldReport, any>(`${baseUrl}farm_info_view/${id}/`, {})
      .then((res) => {
        console.log("Farm Detail : ", res.data);
        let ServerData = {
          data: {},
          total: 20,
        };
        return res.data;
      });
  }

  getDateImage(params: {}) {
    return axios.get(`${baseUrl}export_image/`, {
      params,
    });
  }

  GetDashboadData() {
    return axios
      .get<IFieldReport, any>(`${baseUrl}dashboard/`, {})
      .then((res) => {
        return res.data;
      });
  }
})();

// export default new ReportService
