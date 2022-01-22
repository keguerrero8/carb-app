import React, {useRef,useState, useEffect} from 'react'
import { matchRoutes } from 'react-router-dom';

const Info = ({restaurants, usersList, onDeleteRestaurant, matches, refresh}) => {



return (
    <>
    <p> Who are our users for this app?</p>
    <ol>
       {usersList.map(usr => <li key={usr.first_name}>{usr.first_name}</li>)} 
    </ol>
    
    <div className="restaurants">
    <p> What are our restaurants for this app?</p>
    <ol>
       {restaurants.map((prjct, index) =><li>{prjct.name}</li>)} 
    </ol>
    
    <p> What are your matches with your partner?</p>
    <ol>
       {matches.map(match => <li>{match}</li>)} 
    </ol>
    <button onClick={refresh} >Refresh (currently not working)</button>
    
    </div>
    </>
)
}

export default Info;

