import axiosInstance from "../axios/axiosInstance";


const getBooksBySearch = async (endpoint, loadDTO) => {
    const response = await axiosInstance.post(endpoint, loadDTO);
    if(response.status === 200)
        return await response.data;
    else
        return null;
}
 
export default getBooksBySearch;