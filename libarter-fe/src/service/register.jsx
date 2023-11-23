import axiosInstance from "../axios/axiosInstance";
import { logUser } from "../functions/logUser";

const register = async (registerDTO) => {
    const response = await axiosInstance.post("auth/register", registerDTO);
    if(response.status === 200)
    {
        const data = await response.data;
        logUser(data);
        return true;
    }
    else
        return false;
}
 
export default register;