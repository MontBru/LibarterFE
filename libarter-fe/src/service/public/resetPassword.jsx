import { publicAxiosInstance } from "../../axios/axiosInstance";

const resetPassword = async ({newPassword, token}) => {

    try{
        const response = await axiosInstance.post("auth/resetPassword", {newPassword, token});
        return true;
    }
    catch{
        return false;
    }
}
 
export default resetPassword;