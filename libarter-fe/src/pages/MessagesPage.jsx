import { useState } from "react";
import Background from "../components/Background";
import BackgroundWithoutFooter from "../components/BackgroundWithoutFooter";
import FormInputComponent from "../components/FormInputComponent";

const MessagesPage = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    return ( 
    <BackgroundWithoutFooter>

    </BackgroundWithoutFooter> );
}
 
export default MessagesPage;