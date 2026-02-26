import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL 
  ? `${import.meta.env.VITE_API_BASE_URL}/api`
  : "http://localhost:3000/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
