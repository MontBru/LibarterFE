import {publicAxiosInstance} from "../../axios/axiosInstance";

const forgotPassword = async (email) => {
    try{
        const response = await publicAxiosInstance.post("auth/forgotPassword", {email:email});
        return true;
    }
    catch{
        return false;
    }
}
 
export default forgotPassword;