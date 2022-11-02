import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoteCard from '../Components/Card/NoteCard';
import axios from 'axios';
import { Box } from '@mui/system';
import NavBar from '../Components/NavBar/NavBar';
function HomePage() {
    useEffect(() => {
     AllNotes()
    }, [])
    const [allNotesData, setAllNotesData] = useState()
    
    const BASE_URL='http://127.0.0.1:8000/'
    let AllNotes = () =>{
        axios.get(BASE_URL+'api/v1/notes')
        .then((response)=>{
            setAllNotesData(response.data)
        }).catch((error)=>{

        })
    }

  return (
    <div>
        <NavBar/>
        <Grid container sx={{marginTop:'100px'}}>
        {allNotesData?allNotesData.map((obj)=>
            <NoteCard data={obj}/>
        )
        
    :null}
    </Grid>
    </div>
  )
}

export default HomePage