import axios from "axios";


// const BASE_URL = 'https://farminsure.teamonetech.com/api/v1/'
const BASE_URL = 'https://app.teamonetech.com/api/v1/'
const token = localStorage.getItem("token");

class MapService {
    addNewField(params) {
        return axios.post(BASE_URL + "farm-details/", params)
    }

    fetchFarmList(params) {
        // return axios.get(BASE_URL + "farm_info_view/")
        return axios.get(BASE_URL + "farm_info_view/", { params })
    }


    getDateImage(params) {
        console.log("Param From Service for Image Dates ", params)
        return axios.get(BASE_URL + "export_image/", { 
            headers: { Authorization: `Token ${token}` },
            params
         })
    }

    getDisasterImage(params) {
        return axios.get(BASE_URL + "export_image", { params })
    }
}
export default new MapService();