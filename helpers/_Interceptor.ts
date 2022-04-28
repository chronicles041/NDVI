import axios from "axios";
import Router from "next/router";


axios.interceptors.request.use(function (config) {
  const token: any = localStorage.getItem("token");
  // Do something before request is sent
  if (token) {
    config.headers.common = {
      Authorization: `Token ${token}`
    }


  }
  if (token === '') {
    config.headers.common = {
      Authorization: null
    }
  }

  return config;
});

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // alert("error")
  if (error.response.status === 401) {
    Router.push('/login')
  }
  console.log("Error", Promise.reject(error))
  return Promise.reject(error);
});



