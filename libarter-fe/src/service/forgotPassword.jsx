import axiosInstance, { jwtInterceptor } from "../axios/axiosInstance";

const forgotPassword = async (email) => {
    axiosInstance.interceptors.request.eject(jwtInterceptor);

    try{
        const response = await axiosInstance.post("auth/forgotPassword", {email:email});

        axiosInstance.interceptors.request.use(jwtInterceptor);
        return true;
    }
    catch{
        axiosInstance.interceptors.request.use(jwtInterceptor);
        return false;
    }
}
 
export default forgotPassword;