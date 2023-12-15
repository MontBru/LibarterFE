import TwoThingSelector from "./TwoThingSelector";

const RequestOfferSelector = ({isRequest, setIsRequest}) => {
    return ( 
        <TwoThingSelector isThing={isRequest} setIsThing={setIsRequest} thingText={"Requests"} notThingText={"Offers"} />
     );
}
 
export default RequestOfferSelector;