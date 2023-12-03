import axiosInstance from "../axios/axiosInstance";

const getBookSuggestions = async (book) => {
    try{
        const response = await axiosInstance.post(`user/book/getBookSuggestions`, book)
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBookSuggestions;