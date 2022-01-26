import React, {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';



const Info = ({matches}) => {

const [open, setOpen] = useState(false)
const [randInt, setRandInt] = useState(0)
const handleClose = () => setOpen(false)
const handleOpen = () => {
   let randIndex = getRandomInt(0, matches.length)
   setRandInt(randIndex)
   setOpen(true)
}

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

 function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); 
 }


return (
      <Container maxWidth="sm">
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Here are your Matching Restaurants!
          </Typography>
            <List sx={{ ml: "25%" }}>
               {matches.map(match => (
                  <ListItem key={match.id}>
                     <ListItemAvatar>
                        <Avatar sx={{ width: 60, height: 60, marginRight: 5 }} src={match.picture_url} />
                     </ListItemAvatar>
                     <ListItemText
                        primary={match.name}
                        secondary={match.details}
                     />
                  </ListItem>
               ))
               }
            </List>
            <Container sx={{ mt: 10 }}>
               <Button variant="contained" color="secondary" onClick={handleOpen}>Randomly Choose for us!</Button>
               <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               >
                  <Box sx={style}>
                     <Typography id="modal-modal-title" variant="h6" component="h2">
                        Let's eat at...
                     </Typography>
                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {matches.length == 0 ? "No matches available" : matches[randInt].name}
                     </Typography>
                  </Box>
               </Modal>
            </Container>
      </Container>
)
}

export default Info;

