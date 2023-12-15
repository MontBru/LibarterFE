import checkAuthorization from "../service/checkAuthorization";
import showLoginPopupStore from "../zustand/showLoginPopupStore";

const redirectToLoginIfUnauth = async () => {
    const isAuth = await checkAuthorization();
    if(isAuth===false)
    {
        showLoginPopupStore.getState().setShowLoginPopup(true);
    }
}
 
export default redirectToLoginIfUnauth;