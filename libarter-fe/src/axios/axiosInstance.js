import axios from 'axios';
import { dbAdress } from '../constants';
import showLoginPopupStore from '../zustand/showLoginPopupStore';

const axiosInstance = axios.create({
    baseURL: dbAdress
})

export const publicAxiosInstance = axios.create({
  baseURL:dbAdress
})

const setOnUnauthInterceptor = (instance) => {

  instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response!==undefined && error.response.status === 401) {
      showLoginPopupStore.getState().setShowLoginPopup(true);
    }
    return Promise.reject(error);
  }
);


}

setOnUnauthInterceptor(publicAxiosInstance);
setOnUnauthInterceptor(axiosInstance);


axiosInstance.interceptors.request.use(
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

export default axiosInstance;