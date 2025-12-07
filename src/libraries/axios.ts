import { ADDRESS_API_URL, SERVER_URL } from "@/configurations";
import { storage } from "@/utils/storage";
import Axios, { InternalAxiosRequestConfig } from "axios";

export const axios = Axios.create({
  baseURL: SERVER_URL,
});

const axiosRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  const token = storage.getValue("token");
  if (token && config?.headers) {
    config.headers["X-Authorization"] = `Bearer ${token}`;
  }
  return config;
};

axios.interceptors.request.use(axiosRequestInterceptor);

export const addressRequest = Axios.create({
  baseURL: ADDRESS_API_URL,
});
