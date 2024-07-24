import SendEmail from "../components/SendEmail";
import requestRegister from "../service/public/requestRegister";
import languageStore from '../zustand/languageStore';

const RegisterWtihToken = () => {
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["Register"]:["Регистрация"];

    return ( 
        <SendEmail title={text[0]} service={requestRegister}/>
    
 );
}
 
export default RegisterWtihToken;