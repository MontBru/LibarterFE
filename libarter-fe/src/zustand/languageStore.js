import {create} from "zustand";

const languageStore = create((set)=>({
    language: 'BG',
    setLanguage: (newLang) => set((state)=>{
        return {...state, language: newLang}
        }),
}));

export default languageStore;