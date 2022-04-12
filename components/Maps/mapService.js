import axios from "axios";

// const BASE_URL = 'https://farminsure.teamonetech.com/api/v1/'
const BASE_URL = "https://app.teamonetech.com/api/v1/";

class MapService {
  addNewField(params) {
    return axios.post(BASE_URL + "farm-details/", params);
  }

  fetchFarmList(params) {
    return axios.get(BASE_URL + "farm_info_view/?user_id=2260&ordering=-farm_id")
    // return axios.get(BASE_URL + "farm_info_view/?user__id=203");
    // return axios.get(BASE_URL + "farm_info_view/",{params});
  }

  fetchFarmListNDVI(params) {
    // return axios.get(BASE_URL + "farm_info_view/")
    // return axios.get(BASE_URL + "latestndvi/?user_id=2260");
    return axios.get(BASE_URL + "latestndvi/?user_id=2260&ordering=-farm_id");
    
    // https://app.teamonetech.com/api/v1/latestndvi/?user_id=2260
    // return axios.get(BASE_URL + "latestndvi/",{params});
  }

  fetchFarmListID(id) {
    // return axios.get(BASE_URL + "farm_info_view/")
    return axios.get(`${BASE_URL}farm_info_view/${id}/`);
  }

  getDateImage(params) {
    console.log("Param From Service for Image Dates ", params);
    return axios.get(BASE_URL + "export_image/", { params });
  }

  getDisasterImage(params) {
    return axios.get(BASE_URL + "export_image", { params });
  }

  getWeather(params){

    return   axios.get(BASE_URL + "next_weather/", { params });
  }
}
export default new MapService();

// axios.patch(`${USER_API_BASE_URL}artist/${id}/`, data)
