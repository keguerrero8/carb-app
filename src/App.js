
import './App.css';
import React, {useState} from "react"
import {
  BrowserRouter as 
  Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Header from "./Header"
import SwipeButtons from "./SwipeButtons"
import TinderCards from "./TinderCards"
import Chats from "./Chats"
import Account from "./Account"
import ChatScreen from "./ChatScreen"



function App() {
  const [user, setUser] = useState({});
  
  function handleUser(currentUser) {
    setUser(currentUser)
  }
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/account" element= {<><Header backButton="/"/><Account handleUser={handleUser} user={user}/></>} />
          <Route path="/chat/:person" element={<><Header backButton="/chat"/><ChatScreen user={user}/></>}/>
          <Route path="/chat" element={<><Header backButton="/"/><Chats user={user} /></>} />
          <Route path="/" element={<><Header /><TinderCards/><SwipeButtons/></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
