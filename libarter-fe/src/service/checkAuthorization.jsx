import axiosInstance from "../axios/axiosInstance";

const checkAuthorization = async () => {
    try {
        await axiosInstance.get("user/");
        return true;
    }catch{
        return false;
    }
}
 
export default checkAuthorization;