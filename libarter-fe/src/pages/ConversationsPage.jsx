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

            <div className="md:flex md:flex-row md:justify-between shadow-lg shadow-customColors-primary">
                <img src="Chat.png" alt="" 
                    className="w-full h-2/5 object-contain bg-customColors-chatImageBg"
                />
                <div className=" bg-customColors-chatImageBg flex justify-center w-full">
                    <TwoThingSelector isThing={isBuyerChat} setIsThing={setIsBuyerChat} thingText={"You are client"} notThingText={"You own the offer"}/>
                </div>
                
            </div>
            

            <DisplayAllConversations conversations={conversations}/>
        </Background>
            

     );
}
 
export default ConversationsPage;