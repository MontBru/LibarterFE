const ConversationButton = ({image, bookName, clientName}) => {

    return ( 
        <button className="flex flex-row border-y w-full border-gray-800 bg-customColors-darkBrown"
            onClick={() => {}}
        >
            <img 
                className="h-24 w-24"
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