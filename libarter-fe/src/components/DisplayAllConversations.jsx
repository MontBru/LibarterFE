import ConversationButton from "./ConversationButton";

const DisplayAllConversations = ({conversations}) => {
    if(conversations == null)
        conversations = []

    console.log(conversations)

    return ( 
        <ul className="min-h-screen">
            {
                conversations.map(conversation => {
                    return (
                    <li key={conversation.id}>
                        <ConversationButton image={conversation.base64image} bookName={conversation.bookName} clientName={conversation.clientName} id={conversation.id} lastMessage={conversation.lastMessage}/>
                    </li>
                    );
                    
                })
            }
        </ul>
    );
}
 
export default DisplayAllConversations;