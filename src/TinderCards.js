import React, {useState, useEffect, useRef, useMemo} from 'react'
import SwipeButtons from "./SwipeButtons"
import TinderCard from 'react-tinder-card'
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
import "./SwipeButtons.css"
import "./TinderCards.css"





///Code taken from npm-react-tinder-card Advanced version

const TinderCards = ({restaurants}) => {
    const [currentIndex, setCurrentIndex] = useState(restaurants.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
   
    const childRefs = useMemo(
        () =>
          Array(restaurants.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )

      const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
      }
    
      const canGoBack = currentIndex < restaurants.length - 1
    
      const canSwipe = currentIndex >= 0
    
      // set last direction and decrease current index
      const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
        fetch("http://localhost:9292/likes", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                restaurant_id: index+1
            })
        })
        .then((r) => r.json())
        .then((newUser) => console.log(newUser));
      }

      const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
      }
    
      const swipe = async (dir) => {
        if (canSwipe && currentIndex < restaurants.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }  
      }
    
      // increase current index and show card
      const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
      }


    return (
        <div>
        <link
          href='https://fonts.googleapis.com/css?family=Damion&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
          rel='stylesheet'
        />
        <h1>Choose A Restaurant, Bae!</h1>
        <div className='tinderCards_cardContainer'>
          {restaurants.map((restaurant, index) => (
            <TinderCard
              ref={childRefs[index]}
              className='swipe'
              key={restaurant.name}
              onSwipe={(dir) => swiped(dir, restaurant.name, index)}
              onCardLeftScreen={() => outOfFrame(restaurant.name, index)}
            >
              <div
                style={{ backgroundImage: 'url(' + restaurant.picture_url + ')' }}
                className='card'
              >
                <h3>{restaurant.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className='buttons'>
            <IconButton onClick={() => goBack()} className="swipeButtons__repeat">
               <ReplayIcon fontSize="large" /> 
            </IconButton>
            <IconButton style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')} className="swipeButtons__left">
               <CloseIcon fontSize="large" /> 
            </IconButton>
            <IconButton className="swipeButtons__star">
               <StarRateIcon fontSize="large" /> 
            </IconButton>
            <IconButton  onClick={() => swipe('right')} className="swipeButtons__right">
               <FavoriteIcon fontSize="large" /> 
            </IconButton>         
            <IconButton className="swipeButtons__lightning">
               <FlashOnIcon fontSize="large" /> 
            </IconButton>
        </div>
      </div>



        // <div className="tinderCards_cardContainer">
        //     {restaurants.map((restaurant, index) => (
        //     <TinderCard 
        //         className="swipe"
        //         key={restaurant.id}
        //         onSwipe={onSwipe} 
        //         onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
        //         preventSwipe={['up', 'down']}>
        //         <div className="card" style={{ backgroundImage: `url(${restaurant.picture_url})`}} >
        //             <h1> {restaurant.name}</h1>
        //             <h3> {restaurant.details}</h3>
        //     </div>
        //     </TinderCard>   
        
        //     ))}
        // </div>
    )
}

export default TinderCards
