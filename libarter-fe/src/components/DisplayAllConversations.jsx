import ConversationButton from "./ConversationButton";

const DisplayAllConversations = ({conversations}) => {
    
    return ( 
        <ul>
            {
                conversations.map(conversation => {
                    return (
                    <li key={conversation.id}>
                        <ConversationButton image={conversation.base64image} bookName={conversation.bookName} clientName={conversation.clientName}/>
                    </li>
                    );
                    
                })
            }
        </ul>
    );
}
 
export default DisplayAllConversations;