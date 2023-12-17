import ConversationButton from "./ConversationButton";

const DisplayAllConversations = ({conversations}) => {
    if(conversations == null)
        conversations = []

    return ( 
        <ul>
            {
                conversations.map(conversation => {
                    return (
                    <li key={conversation.id}>
                        <ConversationButton image={conversation.base64image} bookName={conversation.bookName} clientName={conversation.clientName} id={conversation.id}/>
                    </li>
                    );
                    
                })
            }
        </ul>
    );
}
 
export default DisplayAllConversations;