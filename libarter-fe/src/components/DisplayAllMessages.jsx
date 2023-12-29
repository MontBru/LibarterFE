import Message from "./Message";

const DisplayAllMessages = ({messages}) => {

    return (
        <ul className="p-3 flex flex-col-reverse">
            {
                messages.map(message => {
                    return (
                        <Message key={message.id} message={message}/>
                    )
                })
            }
        </ul>

    );
}

export default DisplayAllMessages;