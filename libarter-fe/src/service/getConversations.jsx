import axiosInstance from "../axios/axiosInstance";

const getConversations = async (asClient) => {
    try{
        const response = await axiosInstance.get(`user/message/getConversations/${!asClient}`)
        return await response.data;
    }
    catch(e){
        return null;
    }
}
 
export default getConversations;