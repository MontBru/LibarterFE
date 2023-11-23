import axiosInstance from "../axios/axiosInstance";

const getBookByISBN = async (isbn) => {
    const response = await axiosInstance.get(`user/book/getBookByISBN/${isbn}`);
    if(response.status === 200)
        return await response.data;
    else 
        return null;
}
 
export default getBookByISBN;