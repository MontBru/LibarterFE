import { useEffect, useState } from "react";
import TwoThingSelector from "../components/TwoThingSelector";
import getConversations from "../service/getConversations";
import Background from "../components/Background";
import ConversationButton from "../components/ConversationButton";
import DisplayAllConversations from "../components/DisplayAllConversations";

const ConversationsPage = () => {
    const [conversations, setConversations] = useState([]);
    const [isBuyerChat, setIsBuyerChat] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await getConversations(!isBuyerChat);
            setConversations(data);
        }

        fetchData();
        
    },[isBuyerChat]);

    return ( 
        <Background>
            <img src="Chat.png" alt="" 
                className="w-full h-2/5 object-contain bg-customColors-chatImageBg shadow-lg shadow-customColors-primary"
            />
            <TwoThingSelector isThing={isBuyerChat} setIsThing={setIsBuyerChat} thingText={"You are client"} notThingText={"You own the offer"}/>
            <DisplayAllConversations conversations={conversations}/>
        </Background>
            

     );
}
 
export default ConversationsPage;