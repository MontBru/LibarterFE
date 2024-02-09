import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import showLoginPopupStore from "./zustand/showLoginPopupStore";
import { routes } from "./constants";

function App() {

  const [show, setShow] = useState(false);
  const { showLoginPopup, setShowLoginPopup } = showLoginPopupStore();

  const onMenuClick = () => {
    setShow(!show);
  }

  const LoginPopup = () => {
    return (
      <Popup
        onClose={() => { setShowLoginPopup(false) }}>
        <div>
          You should log in to use this feature
        </div>
        <button
          className="w-full bg-customColors-secondary text-white py-2 px-4 rounded-md cursor-pointer"
          onClick={() => {
            window.location.href = routes.login;
          }}
        >
          Log in
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
