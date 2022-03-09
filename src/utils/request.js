import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "/dev-api", // url = base url + request url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use();

// response interceptor
service.interceptors.response.use();

export default service;
