import { publicAxiosInstance } from "../../axios/axiosInstance";

const getBookById = async (id) => {
    try{
        const response = await publicAxiosInstance.get(`public/books/${id}`);
        return await response.data;
    }
    catch{
        return null;
    }
        
}
 
export default getBookById;