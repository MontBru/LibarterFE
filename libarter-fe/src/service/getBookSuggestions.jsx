import axiosInstance from "../axios/axiosInstance";

const getBookSuggestions = async (book) => {
    const response = await axiosInstance.post(`user/book/getBookSuggestions`, book)
    if(response.status !== 200)
        return await response.data;
    else 
        return null;
}
 
export default getBookSuggestions;