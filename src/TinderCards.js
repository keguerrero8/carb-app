import React, {useState, useRef, useMemo} from 'react'
import TinderCard from 'react-tinder-card'
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import "./SwipeButtons.css"
import "./TinderCards.css"


const TinderCards = ({restaurants}) => {
    const [currentIndex, setCurrentIndex] = useState(restaurants.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
    //{current : currentIndex}, value that can be updated between re-renders but does not actually re-render page
   
    const childRefs = useMemo( //it will store values/memoization so it isnt slow when output is the same
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
        // fetch("http://localhost:9292/likes", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type":"application/json",
        //     },
        //     body: JSON.stringify({
        //         restaurant_id: index+1
        //     })
        // })
        // .then((r) => r.json())
        // .then((newUser) => console.log(newUser));
      }

      const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      }
    
      const swipe = async (dir) => {
        if (canSwipe && currentIndex < restaurants.length) {
          await childRefs[currentIndex].current.swipe(dir) 
        }  
      }

      // increase current index and show card, also used for the back button to return to previous card if mistake is made
      const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
      }

      function handleLike () {
        console.log("we liked this")
        let index
        if (currentIndex == -1) {
          index = restaurants.length-1
        } else {
          index = currentIndex
        }
        fetch("http://localhost:9292/likes", {
          method: "POST",
          headers: {
              "Content-Type":"application/json",
          },
          body: JSON.stringify({
              restaurant_id: index+1,
              user_id: 1 //fixed for now
          })
        })
        .then((r) => r.json())
        .then((newlike) => console.log(newlike));
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
        <h1 style={{marginBottom : "20px"}} >Lets Taco 'bout it!</h1>
        <div className='tinderCards_cardContainer'>
          {restaurants.map((restaurant, index) => (
            <TinderCard
              ref={childRefs[index]} 
              className='swipe'
              key={restaurant.id}
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
            <IconButton  onClick={() => swipe('right')} className="swipeButtons__right">
               <FavoriteIcon fontSize="large" /> 
            </IconButton>
            {/* <IconButton  onClick={handleLike} className="swipeButtons__right">
               <FavoriteIcon fontSize="large" /> 
            </IconButton>              */}
        </div>
      </div>

    )
}

export default TinderCards
