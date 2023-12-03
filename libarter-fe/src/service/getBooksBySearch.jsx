import axiosInstance from "../axios/axiosInstance";


const getBooksBySearch = async (endpoint, loadDTO) => {
    try{
        const response = await axiosInstance.post(endpoint, loadDTO);
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBooksBySearch;