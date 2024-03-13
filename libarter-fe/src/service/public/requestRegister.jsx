import { publicAxiosInstance } from "../../axios/axiosInstance";
const requestRegister = async (email) => {
    try{
        const response = await publicAxiosInstance.post("auth/requestRegister", {email:email});
        return true;
    }
    catch{
        return false;
    }
}
 
export default requestRegister;