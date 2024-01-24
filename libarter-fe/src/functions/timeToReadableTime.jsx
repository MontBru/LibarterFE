const timeToReadableTime = ({time}) => {


    if(time === undefined)
        return "No messages yet"

    const areDatesEqual = (date1, date2) => {
        if (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        )
            return true;
        else 
            return false;
    }

    const date = new Date(time);
    const now = new Date();
    let options = { 
    year: "numeric",
    month: "numeric", 
    day: "numeric", 
    hour: "numeric", 
    minute: "numeric"
    };


    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (
        areDatesEqual(now, date)
    )
    {

        let displayDate = date.toLocaleDateString("en-UK", options);

        return displayDate.split(' ')[1];
    }
    else if(areDatesEqual(date, yesterday))
    {
        let displayDate = date.toLocaleDateString("en-UK", options);

        displayDate = displayDate.split(' ')[1];

        return "Yesterday " + displayDate;
    }

    return date.toLocaleDateString("en-UK", options);
}
 
export default timeToReadableTime;