import axiosInstance from "../axios/axiosInstance";

const deleteBookById = async (id) => {
    const response = await axiosInstance.delete(`user/book/deleteById/${id}`);
    if(response.status === 200)
        return await response.data;
    else
        return null;
}
 
export default deleteBookById;