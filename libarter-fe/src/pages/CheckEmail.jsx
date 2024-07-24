import Background from "../components/Background";
import languageStore from '../zustand/languageStore';

const CheckEmail = () => {
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["AN EMAIL HAS BEEN SENT TO YOU, CHECK YOUR INBOX"]:["Беше Ви изпратен имейл, проверете пощата си"];

    return ( 
        <Background>
            <h1 className="p-12 font-extrabold text-customColors-primary text-xl overflow-scroll">
                {text[0]}
            </h1>
        </Background>
            
     );
}
 
export default CheckEmail;