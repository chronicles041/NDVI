import axios, { responseEncoding } from "axios";
import { IFieldReport, ILocation } from "../reportTypes";


class ReportService {

    FetchProvince() {
        return axios.get<ILocation, any>('https://app.teamonetech.com/api/v1/province/').then((res) => {
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

    FetchDistricts() {
        return axios.get<ILocation, any>('https://app.teamonetech.com/api/v1/district/').then((res) => {
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
        return axios.get<ILocation, any>('https://app.teamonetech.com/api/v1/municipality/').then((res) => {
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
        return axios.get<ILocation, any>('https://app.teamonetech.com/api/v1/ward/').then((res) => {
            let tempReturnValue: ILocation[] = [];
            res.data.results.map((value: { name: number; id: number }) => {
                tempReturnValue = [
                    ...tempReturnValue,
                    { title: (value.number), value: value.id },
                ];
                // console.log("**API**DropdDowm", tempReturnValue);
            });
            return tempReturnValue;
        });

    }

    FetchOrganizations() {
        return axios.get<ILocation, any>('https://app.teamonetech.com/api/v1/organization/').then((res) => {

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
        return axios.get<IFieldReport, any>('https://app.teamonetech.com/api/v1/farm_info_view/', { params }).then((res) => {
            let tempReturnValue: IFieldReport[] = [];
            res.data.results.map((
                value: IFieldReport
                , i: number) => {
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
                        crop_type_name: "Maize",
                        plantation_date: "2022-02-10",
                        ward: value.ward,
                        ward_number: value.ward_number,
                        tole_name: value.tole_name,
                        farm_polygon_json:value.farm_polygon_json,
                        extra_field:value.extra_field
                    },

                ];
                // console.log("**API**DropdDowm", tempReturnValue);
            });
            let ServerData = {
                data: tempReturnValue,
                total: res.data.count
            }
            return ServerData;
        });

    }
    FetchFieldReportID(id: number) {
        return axios.get<IFieldReport, any>(`https://app.teamonetech.com/api/v1/farm_info_view/${id}/`).then((res) => {
            console.log("Farm Detail : ", res.data)
            let ServerData = {
                data: {},
                total: 20
            }
            return res.data;
        });

    }
}


export default new ReportService