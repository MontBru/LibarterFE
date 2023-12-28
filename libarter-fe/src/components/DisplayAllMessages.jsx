const DisplayAllMessages = ({messages}) => {
    return (
        <ul>
            {
                messages.map(message => {
                    return (
                        <li className="bg-customColors-complementary">
                            {message.body}
                        </li>
                    )
                })
            }
        </ul>

    );
}

export default DisplayAllMessages;