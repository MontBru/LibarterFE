import axiosInstance from "../axios/axiosInstance";
import { logUser } from "../functions/logUser";

const login = async (loginDTO) => {
    const response = await axiosInstance.post('/auth/login', loginDTO);
    if(response.status === 200)
    {
        const data = await response.data;
        logUser(data);
        return true;
    }
    else 
        return false;
}
 
export default login;