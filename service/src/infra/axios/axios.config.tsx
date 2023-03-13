import axios, { AxiosInstance } from "axios";

const config = {
  'Ocp-Apim-Subscription-Key': process.env.REACT_APP_CORE_API_SUBSCRIPTION_KEY,
  Lang: 'PT',
};

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_CORE_API_URL,
  headers: config,
});