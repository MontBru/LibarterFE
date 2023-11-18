import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

function App() {

  const [show, setShow] = useState(false);

  const onMenuClick = () =>{
    setShow(!show);
  }

  return (
    <Router>
      <Navbar show={show} onMenuClick={onMenuClick}/>
      <div className="flex flex-col h-screen">
        <Topbar onMenuClick={onMenuClick}/>
        <AppRoutes/>
      </div>
      
    </Router>
      
  );
  
}

export default App;
