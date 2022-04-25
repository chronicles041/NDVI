import axios from "axios";
import Router from "next/router";


axios.interceptors.request.use(function (config) {
  const token: any = localStorage.getItem("token") ;
  // Do something before request is sent
  config.headers.common = {
    Authorization: `Token ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  if (error.response.status === 401) {
    Router.push('/login')
  }
  return Promise.reject(error);
});

