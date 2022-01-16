import React, {useState, useEffect} from 'react'
import SwipeButtons from "./SwipeButtons"
import database from "./firebase"
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"


const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }


const TinderCards = () => {
    
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        database.collection('restaurants').onSnapshot(snapshot =>
            setRestaurants(snapshot.docs.map(doc=>doc.data())))
    }, [])

    return (
        <div className="tinderCards_cardContainer">
            {restaurants.map(restaurant => (
            <TinderCard 
                className="swipe"
                key={restaurant.name}
                onSwipe={onSwipe} 
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                preventSwipe={['up', 'down']}>
                <div className="card" style={{ backgroundImage: `url(${restaurant.url})`}} >
                    <h3> {restaurant.name}</h3>
            </div>
            </TinderCard>   
            ))}
        </div>
    )
}

export default TinderCards
