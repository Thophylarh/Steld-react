import axios from "axios";

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
 baseURL: process.env.REACT_APP_BASE_URL, // Your API base URL

  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => Promise.reject(error)
);

export default axiosInstance;
