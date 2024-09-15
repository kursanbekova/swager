import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://ec2-3-68-183-137.eu-central-1.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

let store;

export const injectStore = (main) => {
  return (store = main);
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updateCOnfig = { ...config };
    const token = localStorage.getItem("adminToken");

    if (token) {
      updateCOnfig.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
