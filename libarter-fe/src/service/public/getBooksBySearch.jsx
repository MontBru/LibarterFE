import { publicAxiosInstance } from "../../axios/axiosInstance";

const getBooksBySearch = async (endpoint, loadDTO) => {
    try{
        const response = await publicAxiosInstance.post(endpoint, loadDTO);
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBooksBySearch;