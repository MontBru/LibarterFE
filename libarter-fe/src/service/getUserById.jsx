import axiosInstance from "../axios/axiosInstance";

const getUserById = async (uid) => {
    const response = await axiosInstance.get(`public/user/getById/${uid}`)
    if(response.status === 200)
        return await response.data;
    else 
        return null;
}
 
export default getUserById;