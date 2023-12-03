import axiosInstance from "../axios/axiosInstance";

const getAllBooksOfLoggedUser = async (isRequest) => {
    try{
        const response = await axiosInstance.get(`user/getAllBooksByUID/${isRequest}`)
        return await response.data;
    }
    catch{
        return [];
    }
       
}
 
export default getAllBooksOfLoggedUser;

