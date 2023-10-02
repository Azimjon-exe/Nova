import axios from "axios";
export const baseUrl = `http://localhost:8000/api`;
const token = localStorage.getItem("token");

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
