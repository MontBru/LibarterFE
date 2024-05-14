import { publicAxiosInstance } from "../../axios/axiosInstance";

const getUserById = async (uid) => {
    try{
        const response = await publicAxiosInstance.get(`public/users/${uid}`)
        return await response.data;
    }
    catch{
        return null;
    }
}
 
export default getUserById;