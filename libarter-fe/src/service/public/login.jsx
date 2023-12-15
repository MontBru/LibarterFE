import { publicAxiosInstance } from "../../axios/axiosInstance";
import { logUser } from "../../functions/logUser";

const login = async (loginDTO) => {
    try{
        const response = await publicAxiosInstance.post('/auth/login', loginDTO);
        const data = await response.data;
        logUser(data);
        return true;
    }
    catch{
        return false;
    }
}
 
export default login;