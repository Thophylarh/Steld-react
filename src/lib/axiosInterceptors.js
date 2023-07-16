import axios from "axios";
import { store } from "../redux/store";

let demoBaseUrl = "https://api.example.com";

export const baseUrL = demoBaseUrl

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
baseURl:baseUrL, // Your API base URL
headers:{
    "Access-Control-Allow-Origin": "*",
},
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
      // You can modify the request config here, such as adding headers or authentication tokens
      // For example, you can add an authorization header like this:
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
      
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );
  
// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
      // You can modify the response data here if needed
      return response;
    },
    (error) => {
      // Handle response error
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
