
import './App.css';
import React from "react"
import {
  BrowserRouter as 
  Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import SwipeButtons from "./SwipeButtons"
import TinderCards from "./TinderCards"
import Chat from "./Chat"
import Account from "./Account"



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/account" element= {<><Header/><Account/></>} />
          <Route path="/chat" element={<><Header backButton="/"/><Chat /></>} />
          <Route path="/" element={<><Header /><TinderCards/><SwipeButtons/></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
