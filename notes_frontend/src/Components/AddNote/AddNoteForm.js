import {
  Alert,
  Button,
  Card,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNoteForm() {
  const BASE_URL = "http://127.0.0.1:8000/";
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [fieldError,setFieldError] = useState()
  let navigate = useNavigate()
  let SubmitNote = (e)=>{
    e.preventDefault()
    if (title===''|| body===''){
      setFieldError('Please fill those fields')
      return false
    }else{
    axios.post(BASE_URL + 'api/v1/notes/',{
      title:title,
      body:body,
    })
    .then((response)=>{
      if (response.status===200){
        navigate('/')
      }
    })
  }}
  return (
    <div align="center">
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          marginTop: "100px",
          maxWidth: "300px",
          minWidth: "20%",
          padding: "0 20px",
        }}
        align="center"
      >
        <NoteAddIcon sx={{ color: "#b28900", marginTop: "20px" }} />
        <Typography variant="h5" style={{ fontFamily: "fantasy" }}>
          Add Note
        </Typography>
        {fieldError&&<Alert severity="error" onClose={()=>setFieldError(null)}>{fieldError}</Alert>}
        <form onSubmit={SubmitNote}>
          <Box sx={{ marginTop: "10px" }}>
            <TextField
              name="title"
              label="Enter Title"
              sx={{ marginBottom: "10px" }}
              fullWidth
              onChange={(e)=>setTitle(e.target.value)}
            ></TextField>
            <br />
            <TextareaAutosize
              name="body"
              sx={{ marginTop: "10px" }}
              placeholder="Enter body"
              minRows={8}
              label="Enter Body"
              style={{ width: "100%" }}
              onChange={(e)=>setBody(e.target.value)}
            ></TextareaAutosize>
            <Button sx={{ margin: "10px 0" }} type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Card>
    </div>
  );
}

export default AddNoteForm;
