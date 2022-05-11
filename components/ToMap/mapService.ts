import axios from "axios";
import { baseUrl } from "../../api/serviceConfig";

// const BASE_URL = 'https://farminsure.teamonetech.com/api/v1/'
const BASE_URL = baseUrl
const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : "";

// const token = localStorage?.getItem("token");

class MapService {
  // getDateImage(params) {
  //   console.log("Param From Service for Image Dates ", params);
  //   return axios.get(BASE_URL + "export_image/", {
  //     headers: { Authorization: `Token ${token}` },
  //     params,
  //   });
  // }

  getDateImage(params) {
    console.log("Param From Service for Image Dates ", params);
    return axios.get(BASE_URL + "export_plantation_image/", {
      headers: { Authorization: `Token ${token}` },
      params,
    });
  }
  
}
export default new MapService();
