import axiosInstance from "../axios/axiosInstance";

const updateBookById = async (id, book) => {
    const response = await axiosInstance.put(`user/book/updateById/${id}`, book);
    if(response.status === 200)
        return true;
    else
        return false;
}
 
export default updateBookById;