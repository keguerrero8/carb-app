
import './App.css';
import React, {useState, useEffect} from "react"
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
import SignIn from "./SignIn"
import ChatScreen from "./ChatScreen"
import SignUp from "./SignUp"
import Info from "./Info"
           

function App() {
  const [user, setUser] = useState({});
  const [rubyUser, setRubyUser] = useState({})
  const [usersList, setUsersList] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [matches, setMatches] = useState([])
  const [refreshPage, setRefreshPage] =useState("")

function onDeleteRestaurant(newRestaurant){
  const newList = restaurants.filter((item) => item.id !== newRestaurant.id)
  setRestaurants(newList)
}

useEffect(() => {
    fetch('http://localhost:9292/users')
    .then((r)=> r.json())
    .then((usrs) => {
        console.log(usrs)
        setUsersList(usrs)
    },)
    fetch('http://localhost:9292/restaurants')
    .then((r)=> r.json())
    .then((data) => {
        console.log(data)
        setRestaurants(data)
    },)
    fetch('http://localhost:9292/matches')
    .then((r)=> r.json())
    .then((data) => {
        console.log(data)
        setMatches(data)
    },)
}, [])

function refresh(){
  setRefreshPage(" ")
}

  function handleUser(currentUser) {
    setUser(currentUser)
  }
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/info" element = {<><Header backButton="/"/><Info refresh={refresh} restaurants={restaurants} usersList={usersList} onDeleteRestaurant={onDeleteRestaurant} matches={matches}/></>}/>
          <Route path="/signup" element = {<><Header backButton="/"/><SignUp/></>}/>
          <Route path="/signin" element= {<><Header backButton="/"/><SignIn handleUser={handleUser} user={user}/></>} />
          <Route path="/chat/:person" element={<><Header backButton="/chat"/><ChatScreen user={user}/></>}/>
          <Route path="/chat" element={<><Header backButton="/"/><Chats user={user} /></>} />
          <Route path="/" element={<><Header /><TinderCards restaurants={restaurants}/></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
