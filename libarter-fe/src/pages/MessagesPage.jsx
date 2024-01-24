import { useEffect, useRef, useState } from "react";
import Background from "../components/Background";
import BackgroundWithoutFooter from "../components/BackgroundWithoutFooter";
import FormInputComponent from "../components/FormInputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DisplayAllMessages from "../components/DisplayAllMessages";
import getMessagesByConversation from "../service/getMessagesByConversation";
import { useParams } from "react-router-dom";
import addMessage from "../service/addMessage";

const MessagesPage = () => {
    const { convId } = useParams();

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [pageNum, setPageNum] = useState(0);
    const [prevPageNum, setPrevPageNum] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);

    const lastMessageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);

    const [ShowLoadButton, setShowLoadButton] = useState(true);

    const sendMessage = (e) => {
        e.preventDefault();

        const addData = async () => {
            const tmpMessage = newMessage;
            setNewMessage("");
            const response = await addMessage({ body: newMessage, conversationId: convId });
            if (response !== null) {
                setMessages([response, ...messages]);
            }
            else {

                alert("Error while sending message!")
                setNewMessage(tmpMessage);
            }

        }

        addData();
    }

    const scrollToBottom = () => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            setTimeout(() => {
                scrollToBottom();
            }, 30)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMessagesByConversation({ conversationId: convId, pageNum });
            let tmpMessages = [...messages, ...data.messages];
            const uniqueMessageIds = new Set();
            tmpMessages = tmpMessages.filter((message) => {
                if (!uniqueMessageIds.has(message.id)) {
                    uniqueMessageIds.add(message.id);
                    return true;
                }
                return false;
            })
            setMessages(tmpMessages);
            setButtonLoading(false);
            setIsLoading(false);

            if(pageNum >= data.totalPageCount-1)
                setShowLoadButton(false);
        }

        if (pageNum !== prevPageNum || firstLoad) {
            fetchData();
            setFirstLoad(false);

            if (firstLoad) {
                scrollToBottom();
            }

            setPrevPageNum(pageNum);

        }


    }, [pageNum])

    const LoadMoreButton = () => {
        return (
            <div className="w-full flex justify-center p-2">
                <button className="bg-customColors-accent text-customColors-primary hover:bg-customColors-primary hover:text-customColors-accent opacity-80 p-2 rounded-md shadow-lg"
                    onClick={
                        () => { 
                            setButtonLoading(true);
                            setPageNum(pageNum + 1); 
                        }
                    }
                >
                    {buttonLoading?"Loading...":"Load More"}
                </button>
            </div>);
    }

    return (
        <>
            <BackgroundWithoutFooter>
                {
                    isLoading ? <div>Loading...</div> :
                        <>
                            {
                                ShowLoadButton &&
                                <LoadMoreButton />
                            }

                            <DisplayAllMessages messages={messages} />
                            <div ref={lastMessageRef} />
                        </>
                }

            </BackgroundWithoutFooter>

            <form onSubmit={sendMessage} className="bg-customColors-primary w-full p-3 flex justify-center">
                <div className="w-full max-w-xl">
                    <FormInputComponent field="message" type="text" value={newMessage} setValue={setNewMessage} isError={false} setIsError={() => { }} showLabel={false} />
                </div>
                <button className="bg-customColors-accent hover:bg-customColors-complementary p-2 px-3 rounded-full ml-3 mb-2">
                    <FontAwesomeIcon icon={faArrowRight} className="text-customColors-primary" />
                </button>
            </form>

        </>
    );
}

export default MessagesPage;