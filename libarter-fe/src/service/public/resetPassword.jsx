import { publicAxiosInstance } from "../../axios/axiosInstance";

const resetPassword = async ({newPassword, token}) => {

    try{
        const response = await publicAxiosInstance.post("auth/resetPassword", {newPassword, token});
        return true;
    }
    catch{
        return false;
    }
}
 
export default resetPassword;