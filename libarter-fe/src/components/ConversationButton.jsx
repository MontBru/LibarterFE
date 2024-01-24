import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import timeToReadableTime from "../functions/timeToReadableTime";

const ConversationButton = ({ image, bookName, clientName, id, lastMessage }) => {
    const navigate = useNavigate()


    return (
        <button className="flex flex-row border-y w-full border-customColors-primary bg-customColors-primary shadow-md shadow-customColors-primary border-b-customColors-accent hover:bg-customColors-secondary"
            onClick={() => {
                navigate(`${routes.messages}/${id}`);
            }}
        >
            <img
                className="h-24 w-24 border border-r-customColors-primary shadow-md shadow-customColors-primary"
                src={image}
                alt="image not loading"
            />

            <div className="flex flex-col h-24 justify-center overflow-hidden px-3  line-clamp-1 w-full text-left text-customColors-complementary ">
                <div className="flex justify-between">
                    <h3 className="max-w-full overflow-hidden overflow-ellipsis font-bold">{clientName}</h3>
                    <h4 className="flex-shrink-0 overflow-hidden">{timeToReadableTime({ time: lastMessage?.time, broad: true })}</h4>
                </div>

                <h2 className="line-clamp-1 text-customColors-accent font-bold">{bookName}</h2>
                {lastMessage === null ?
                    <p className="line-clamp-1">There aren't any messages in this conversation</p> :
                    <p>{(lastMessage.you ? "you" : lastMessage.username) + ": " + lastMessage.body}</p>}
            </div>

        </button>
    );
}

export default ConversationButton;