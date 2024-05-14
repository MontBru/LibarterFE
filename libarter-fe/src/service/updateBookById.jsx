import axiosInstance from "../axios/axiosInstance";

const updateBookById = async (id, book) => {
    try{
        await axiosInstance.put(`user/books/${id}`, book);
        return true;
    }
    catch{
        return false;
    }
}
 
export default updateBookById;