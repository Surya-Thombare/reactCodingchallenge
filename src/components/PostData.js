import React, {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from "axios";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    
//   >
//     •
//   </Box>
// );

export default function OutlinedCard() {

const [category, setCategory] = useState()
const [language, setLanguage] = useState()
const [genre, setGenre] = useState()
const [sort, setSort] = useState()

const categoryRef = useRef()

const onCategory = (event) => setCategory(event.target.value);
const onLanguage = (event) => setLanguage(event.target.value);
const onGenre = (event) => setGenre(event.target.value);
const onSort = (event) => setSort(event.target.value);

const onClick = () =>{
    console.log(categoryRef.current.value);
    axios.post('https://hoblist.com/movieList', {
        category: 'Movies',
        language: 'Kannada',
        genre: 'all',
        sort: 'voting'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(category);
}
  return (
    <Box 
    // sx={{ minWidth: 275 }} 
    sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      fullWidth
    >
      <Card variant="outlined"><CardContent>
        <Stack direction="column" spacing={2} sx={{width: 300}}>
            <TextField  id="standard-basic" label="category" variant="standard" ref={categoryRef} onChange={onCategory} value='movies' />
            <TextField id="standard-basic" label="language" variant="standard" onChange={onLanguage} value='kannada' />
            <TextField id="standard-basic" label="genre" variant="standard" onChange={onGenre} value='all' />
            <TextField id="standard-basic" label="sort" variant="standard" onChange={onSort} value='voting' />
            <Button
              type="submit"
              fullWidth
              onClick={onClick}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
        </Stack>
    </CardContent></Card>
    </Box>
  );
}
