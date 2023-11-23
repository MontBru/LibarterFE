import axiosInstance from "../axios/axiosInstance";

const addBook = async (book) => {
    const response = await axiosInstance.post("user/book/add", book);
    if(response.status === 200)
        return true;
    else
        return false;
}
 
export default addBook;