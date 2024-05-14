import axiosInstance from "../axios/axiosInstance";

const addMessage = async ({body, conversationId})  => {
    try{
        const response = await axiosInstance.post("user/messages", {body, conversationId});
        const message = await response.data;
        return message; 
    }
    catch{
        return null;
    }
}
 
export default addMessage;