import { logUser } from "../../functions/logUser";
import { publicAxiosInstance } from "../../axios/axiosInstance";

const register = async (registerDTO) => {
    try{
        const response = await publicAxiosInstance.post("auth/register", registerDTO);
        const data = await response.data;
        logUser(data);
        return true;

    }
    catch{
        return false;
    }
}
 
export default register;