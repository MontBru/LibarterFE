import axiosInstance from "../axios/axiosInstance";
import { logUser } from "../functions/logUser";
import { jwtInterceptor } from "../axios/axiosInstance";

const login = async (loginDTO) => {
    axiosInstance.interceptors.request.eject(jwtInterceptor);
    
    try{
        const response = await axiosInstance.post('/auth/login', loginDTO);
        axiosInstance.interceptors.request.use(jwtInterceptor);
        const data = await response.data;
        logUser(data);
        return true;
    }
    catch{
        axiosInstance.interceptors.request.use(jwtInterceptor);
        return false;
    }
}
 
export default login;