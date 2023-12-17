import { useNavigate } from "react-router-dom";
import { routes } from "../constants";

const ConversationButton = ({image, bookName, clientName, id, lastMessage}) => {
    const navigate = useNavigate()
    console.log(lastMessage)

    return ( 
        <button className="flex flex-row border-y w-full border-customColors-primary bg-customColors-primary shadow-md shadow-customColors-primary"
            onClick={() => {
                navigate(`${routes.messages}/${id}`);
            }}
        >
            <img 
                className="h-24 w-24 border border-r-customColors-primary shadow-md shadow-customColors-primary"
                src={image} 
                alt="image not loading"
            />

            <div className="flex flex-col h-24 justify-center overflow-hidden px-3 whitespace-nowrap">
                <h3 className="flex overflow-ellipsis w-full text-left text-customColors-complementary font-bold">{clientName}</h3>
                <h2 className="flex  overflow-ellipsis w-full text-left text-customColors-accent font-bold">{bookName}</h2>
                {lastMessage === null?
                <p className="flex  overflow-ellipsis w-full text-left text-customColors-complementary">There aren't any messages in this conversation</p>:
                <p></p>}
            </div>
            
        </button>
     );
}
 
export default ConversationButton;