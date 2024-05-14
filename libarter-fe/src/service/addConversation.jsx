import axiosInstance from "../axios/axiosInstance";

const addConversation = async (bookId) => {
    try{
        const response = await axiosInstance.post(`user/messages/conversations/${bookId}`);
        return response.data;
    }catch{
        return -1;
    }
}
 
export default addConversation;