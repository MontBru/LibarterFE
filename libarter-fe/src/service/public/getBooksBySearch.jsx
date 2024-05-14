import { publicAxiosInstance } from "../../axios/axiosInstance";

const getBooksBySearch = async (loadDTO) => {
    try{
        const response = await publicAxiosInstance.post('public/book/getBooksBySearch', loadDTO);
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBooksBySearch;