import axiosInstance from "../axios/axiosInstance";
import { jwtInterceptor } from "../axios/axiosInstance";

const resetPassword = async ({newPassword, token}) => {
    axiosInstance.interceptors.request.eject(jwtInterceptor);

    try{
        const response = await axiosInstance.post("auth/resetPassword", {newPassword, token});
    
        axiosInstance.interceptors.request.use(jwtInterceptor);

        return true;
    }
    catch{
        axiosInstance.interceptors.request.use(jwtInterceptor);
        return false;
    }
}
 
export default resetPassword;