import axios from 'axios';
import { dbAdress } from '../constants';

const axiosInstance = axios.create({
    baseURL: dbAdress
})

export const jwtInterceptor = axiosInstance.interceptors.request.use(
    (config) => {
        const jwt = sessionStorage.getItem('JWT');
        if(jwt)
        {
            config.headers.Authorization = `Bearer ${jwt}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response!==undefined && error.response.status === 401) {
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default axiosInstance;