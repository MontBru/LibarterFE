import axiosInstance from "../axios/axiosInstance";

const addBook = async (book) => {
    try{
        const response = await axiosInstance.post("user/books", book);
        return true;
    }
    catch{
        return false;
    }
        
}
 
export default addBook;