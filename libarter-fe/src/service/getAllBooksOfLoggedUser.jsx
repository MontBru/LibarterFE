import axiosInstance from "../axios/axiosInstance";

const getAllBooksOfLoggedUser = async (isRequest) => {
    const response = await axiosInstance.get(`user/getAllBooksByUID/${isRequest}`)
    if(response.status === 200)
        return await response.data;
    else 
        return [];
}
 
export default getAllBooksOfLoggedUser;

