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

    FetchFieldReport(params:any) {
        return axios.get<IFieldReport, any>('https://app.teamonetech.com/api/v1/farm_info_view/', {params}).then((res) => {
            let tempReturnValue: IFieldReport[] = [];
            res.data.results.map((value: {}, i: number) => {
                tempReturnValue = [
                    ...tempReturnValue,
                    {
                        farm_id: i + 1,
                        farm_area: '12',
                        farm_name: "Farm Name",
                        farmer_name: "Some Farmer",
                        gender: "M / F",
                        age: 40,
                        contact_no: 9843323432,
                        organization: "Some Organization",
                        crop_type_name: "Maize",
                        plantation_date: "2022-02-10",
                    },
                ];
                // console.log("**API**DropdDowm", tempReturnValue);
            });
            let  ServerData = {
                data : tempReturnValue,
                total : res.data.count
            }
            return ServerData;
        });

    }
}


export default new ReportService