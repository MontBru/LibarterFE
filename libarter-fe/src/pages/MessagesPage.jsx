import { useState } from "react";
import Background from "../components/Background";
import BackgroundWithoutFooter from "../components/BackgroundWithoutFooter";
import FormInputComponent from "../components/FormInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DisplayAllMessages from "../components/DisplayAllMessages";

const MessagesPage = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(newMessage);
        setNewMessage("");
    }

    console.log(messages)

    return ( 
    <BackgroundWithoutFooter>
        <DisplayAllMessages messages={messages}/>

        <form onSubmit={sendMessage} className="bg-customColors-primary fixed bottom-0 w-full p-3 flex justify-center">
            <div className="w-full max-w-xl">
                <FormInputComponent field="message" type="text" value={newMessage} setValue={setNewMessage} isError={false} setIsError={()=>{}} showLabel={false}/>
            </div>
                       <button className="bg-customColors-accent hover:bg-customColors-complementary p-2 px-3 rounded-full ml-3 mb-2">
                <FontAwesomeIcon icon={faArrowRight} className="text-customColors-primary"/>
            </button>

        </form>
    </BackgroundWithoutFooter> );
}
 
export default MessagesPage;