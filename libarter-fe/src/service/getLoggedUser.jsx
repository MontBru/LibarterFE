import axiosInstance from "../axios/axiosInstance";

const getLoggedUser = async () => {
    try{
        const response = await axiosInstance.get(`user/getLoggedUser`)
        return await response.data;
    }
    catch{
        return null;
    }
}
 
export default getLoggedUser;