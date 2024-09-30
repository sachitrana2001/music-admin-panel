import { toast } from "react-toastify";
import axios from "axios";
import { appConfig } from "../Config";

const showError = (message) => {
  toast.error(
    message.charAt(0).toUpperCase() + message.slice(1).toLowerCase() ||
      "Something went wrong"
  );
};

export const AxiosInstance = axios.create({
  baseURL: appConfig.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token=""
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      showError(error?.response?.data?.message || error?.message);
    }

    return Promise.reject(error);
  }
);
