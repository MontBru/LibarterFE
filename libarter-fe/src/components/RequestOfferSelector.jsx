import languageStore from "../zustand/languageStore";
import TwoThingSelector from "./TwoThingSelector";

const RequestOfferSelector = ({isRequest, setIsRequest}) => {

    const {language, setLanguage} = languageStore();
    let thingText = language === "EN"? "Requests" : "Търсения";
    let notThingText = language === "EN"? "Offers" : "Обяви"

    return ( 
        <TwoThingSelector isThing={isRequest} setIsThing={setIsRequest} thingText={thingText} notThingText={notThingText} />
     );
}
 
export default RequestOfferSelector;