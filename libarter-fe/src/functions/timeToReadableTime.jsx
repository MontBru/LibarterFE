const timeToReadableTime = ({time, broad=false}) => {

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
    const options = { 
    year: "numeric",
    month: "numeric", 
    day: "numeric", 
    hour: "numeric", 
    minute: "numeric"
    };

    if(broad)
    {
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        if (
            areDatesEqual(now, date)
        )
        {
            options = {
                hour: "numeric", 
                minute: "numeric"
                };
        }
        else if(areDatesEqual(date, yesterday))
        {
            return "Yesterday";
        }
    }

    return date.toLocaleDateString("en-UK", options);
}
 
export default timeToReadableTime;