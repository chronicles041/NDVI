import axios, { responseEncoding } from "axios";
import { IFieldReport, ILocation } from "../types/reportTypes";
import React from "react";
import { baseUrl } from "./serviceConfig";
import moment from "moment";
import { IActivity } from "../types/activityTypes";

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
  FetchWeather(params) {
    return (
      axios
        // .get<ILocation, any>("https://app.teamonetech.com/api/v1/province/", {
        .get<any>(`${baseUrl}weather/`, params)
        .then((res) => {
          return res.data;
        })
    );
  }

  FetchNextWeather(params) {
    return (
      axios
        // .get<ILocation, any>("https://app.teamonetech.com/api/v1/province/", {
        .get<any>(`${baseUrl}next_weather/`, params)
        .then((res) => {
          return res.data;
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
        // console.log("**RES", res);

        res.data.results.map((value: IFieldReport, i: number) => {
          let variety = value?.season[0].crop_variety;
          let plantationDate = value?.season[0]
            ? value.season[0].crop_plantation_date
            : "N/A";
          var date = new Date(plantationDate);
          var newDate = date.setDate(date.getDate() + 90);
          var year = date.toLocaleDateString(newDate);
          console.log(
            "*** Date",
            moment(newDate).format("Dd MM YYYY"),
            plantationDate,
            year
          );
          // if (variety) {
          //   console.log("*** Value", value?.season[0].crop_variety);
          // }
          tempReturnValue = [
            ...tempReturnValue,
            {
              farm_id: value.farm_id,
              farm_area: value.farm_area.toFixed(2),
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
              plantation_date: plantationDate,
              ward: value.ward,
              ward_number: value.ward_number,
              tole_name: value.tole_name,
              farm_polygon_json: value.farm_polygon_json,
              extra_field: value.extra_field,
              current_phase: {
                name: value?.season[0]
                  ? value.season[0].crops.current_phase?.phase_name
                  : "N/A",
                value: value?.season[0]
                  ? value.season[0].crops.current_phase?.ndvi
                    ? value.season[0].crops.current_phase.ndvi.ndvi_value
                    : "N/A"
                  : "N/A",
                phaseValue: value?.season[0]
                  ? value.season[0].crops.current_phase?.phase_ndvi_value
                    ? value.season[0].crops.current_phase.phase_ndvi_value
                    : "N/A"
                  : "N/A",
              },
              previous_phase: {
                name: value?.season[0]
                  ? value.season[0].crops.previous_phase?.phase_name
                  : -1,
                value: value?.season[0]
                  ? value.season[0].crops.previous_phase?.ndvi?.ndvi_value
                  : "N/A",
                phaseValue: value?.season[0]
                  ? value.season[0].crops.previous_phase?.phase_ndvi_value
                  : "N/A",
              },
              // current_phase: value?.season[0] ? value.season[0].crops.current_phase.phase_name : 'N/A',
              current_phase_value: value?.season[0]
                ? value.season[0].crops.current_phase?.ndvi?.ndvi_value
                : "N/A",
              current_phase_name: value?.season[0]
                ? value.season[0].crops.current_phase?.phase_name
                : "N/A",
              previous_phase_value: value?.season[0]
                ? value.season[0].crops.previous_phase?.ndvi?.ndvi_value
                : "N/A",
              previous_phase_name: value?.season[0]
                ? value.season[0].crops.previous_phase?.phase_name
                : "N/A",
              yield_estimation_77: value?.season[0]
                ? value.season[0].yield_estimation_77
                : "N/A",
              yield_estimation_120: value?.season[0]
                ? value.season[0].yield_estimation_120
                : "N/A",
              days_before_harvest: 30,
              seed_variety: value?.season[0].crop_variety
                ? value?.season[0].crop_variety
                : "N/A",
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

  GetAllUsers() {
    return axios
      .get<IFieldReport, any>(`${baseUrl}allusers/`, {})
      .then((res) => {
        return res.data;
      });
  }
  FetchUsers() {
    return axios.get<any>(`${baseUrl}allusers/`, {}).then((res) => {
      let tempReturnValue: any = [];

      res.data.results.map((value: { name: string; id: number }) => {
        tempReturnValue = [
          ...tempReturnValue,
          { title: value.username, value: value.id },
        ];
        // console.log("**API**DropdDowm", tempReturnValue);
      });
      return tempReturnValue;
    });
  }

  FetchDropdownFarm(params: any) {
    return axios
      .get<IFieldReport, any>(`${baseUrl}farm_info_view/`, {
        params,
      })
      .then((res) => {
        let tempReturnValue: any = [];
        // console.log("***res",res)
        res.data.results.map((value: any) => {
          tempReturnValue = [
            ...tempReturnValue,
            { title: value.farm_name, value: value.farm_id },
          ];
          // console.log("**API**DropdDowm", tempReturnValue);
        });
        return tempReturnValue;
      });
  }

  AddNewActivity(params: IActivity) {
    return axios
      .post<IFieldReport, any>(`${baseUrl}tasks/`, params)
      .then((res) => {
        return res.data;
      });
  }

  FetchTasks() {
    return axios.get<any>(`${baseUrl}tasks/`).then((res) => {
      let tempReturnValue: IFieldReport[] = [];
      // console.log("**RES", res);

      res.data.results.map((value: IFieldReport, i: number) => {
        // if (variety) {
        //   console.log("*** Value", value?.season[0].crop_variety);
        // }
        tempReturnValue = [...tempReturnValue, value];
        // console.log("**API**DropdDowm", tempReturnValue);
      });
      let ServerData = tempReturnValue;

      return ServerData;
    });
  }
})();

// export default new ReportService
