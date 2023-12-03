import axiosInstance from "../axios/axiosInstance";

const getBookByISBN = async (isbn) => {
    try{
        const response = await axiosInstance.get(`user/book/getBookByISBN/${isbn}`);
        return await response.data;
    }
    catch{
        return null;
    }        
}
 
export default getBookByISBN;