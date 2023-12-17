import { useNavigate } from "react-router-dom";
import { routes } from "../constants";

const ConversationButton = ({image, bookName, clientName, id}) => {
    const navigate = useNavigate()

    return ( 
        <button className="flex flex-row border-y w-full border-customColors-primary bg-customColors-secondary shadow-md shadow-customColors-primary"
            onClick={() => {
                navigate(`${routes.messages}/${id}`);
            }}
        >
            <img 
                className="h-24 w-24 border border-r-customColors-primary shadow-md shadow-customColors-primary"
                src={image} 
                alt="image not loading"
            />

            <div className="flex flex-col w-full justify-center">
                <h3>{clientName}</h3>
                <h2>{bookName}</h2>
            </div>
            
        </button>
     );
}
 
export default ConversationButton;