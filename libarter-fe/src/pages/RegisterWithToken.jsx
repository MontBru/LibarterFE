import SendEmail from "../components/SendEmail";
import requestRegister from "../service/public/requestRegister";

const RegisterWtihToken = () => {
    return ( 
        <SendEmail title={"Register"} service={requestRegister}/>
    
 );
}
 
export default RegisterWtihToken;