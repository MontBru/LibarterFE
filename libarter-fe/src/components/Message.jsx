import timeToReadableTime from "../functions/timeToReadableTime";

const Message = ({ message }) => {
    const myMessageStyle = "bg-customColors-primary text-customColors-accent rounded-br-none";
    const otherMessageStyle = "bg-customColors-accent rounded-bl-none";

    return (
        <li key={message.id} className={`w-full flex ${message.you?"justify-end":"justify-start"}`}>
            <div style={{maxWidth:"80%"}} className={` rounded-md max-w-xl mb-1 shadow-md py-1 px-2 ${message.you?myMessageStyle:otherMessageStyle}`}>
                <h3 className={`whitespace-normal break-all ${message.you?"text-end":"text-start"}`}>
                    {message.body}
                </h3>
                
                <h4 className=" text-xs text-right">
                    {timeToReadableTime({time:message.time})}
                </h4>
            </div>
        </li>
    );
}

export default Message;