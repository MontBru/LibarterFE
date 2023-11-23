import axiosInstance from "../axios/axiosInstance";

const getBookById = async (id) => {
    const response = await axiosInstance.get(`public/book/getById/${id}`);
    if(response.status === 200)
        return await response.data;
    else
        return null;
}
 
export default getBookById;