import axiosInstance from "../axios/axiosInstance";

const getMessagesByConversation = async ({conversationId, pageNum}) => {
    try{
        const response = await axiosInstance.post("/user/message/getMessagesByConversation", {conversationId, pageNum});
        return await response.data;
    }
    catch(e)
    {
        return {totalPageCount:0, messages:[]};
    }
}
 
export default getMessagesByConversation;