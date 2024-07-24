import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import showLoginPopupStore from "./zustand/showLoginPopupStore";
import { routes } from "./constants";
import languageStore from './zustand/languageStore';

function App() {

  const [show, setShow] = useState(false);
  const { showLoginPopup, setShowLoginPopup } = showLoginPopupStore();
  const {language, setLanguage} = languageStore();
  let text = language === "EN"?["You should log in to use this feature", "Login"]:["Трябва да влезете в профила си, за да използвате тази страница", "Логин"];

  const onMenuClick = () => {
    setShow(!show);
  }

  const LoginPopup = () => {
    return (
      <Popup
        onClose={() => { setShowLoginPopup(false) }}>
        <div>
          {text[0]}
        </div>
        <button
          className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
          onClick={() => {
            window.location.href = routes.login;
          }}
        >
          {text[1]}
        </button>
      </Popup>
    );
  }

  return (
    <Router>
      <Navbar show={show} onMenuClick={onMenuClick} />
      <div className="flex flex-col h-screen overflow-hidden">
        <Topbar onMenuClick={onMenuClick} />
        <AppRoutes />

        {
          showLoginPopup === true &&
          <LoginPopup/>
        }
      </div>

    </Router>

  );

}

export default App;
