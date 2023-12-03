import axiosInstance from "../axios/axiosInstance";

const deleteBookById = async (id) => {
    try{
        const response = await axiosInstance.delete(`user/book/deleteById/${id}`);
        return await response.data;
    }
    catch{
        return null;
    }
}
 
export default deleteBookById;