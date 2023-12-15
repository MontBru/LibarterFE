import {create} from "zustand";

const showLoginPopupStore = create((set)=>({
    showLoginPopup:false,
    setShowLoginPopup: (newShow) => set((state)=>{
        return {...state, showLoginPopup: newShow}
        }),
}));

export default showLoginPopupStore;