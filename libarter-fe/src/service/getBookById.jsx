import axiosInstance from "../axios/axiosInstance";

const getBookById = async (id) => {
    try{
        const response = await axiosInstance.get(`public/book/getById/${id}`);
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBookById;