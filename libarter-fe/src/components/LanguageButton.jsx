import languageStore from "../zustand/languageStore";

const LanguageButton = () => {
    const {language, setLanguage} = languageStore();

    return ( 
        <button
        className='text-white py-2 hover:bg-orange-200 hover:bg-opacity-50 h-9 w-9 rounded-full'
        onClick={()=>{setLanguage(language==="BG"?"EN":"BG")}}
        >
            {language}
        </button>
     );
}
 
export default LanguageButton;