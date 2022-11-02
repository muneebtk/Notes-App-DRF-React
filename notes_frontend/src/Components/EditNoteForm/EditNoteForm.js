import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Typography,
  Box,
  TextField,
  TextareaAutosize,
  Button,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function EditNoteForm() {
  let params = useParams();
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  const BASE_URL = "http://127.0.0.1:8000/";
  let [fieldError,setFieldError] = useState()
  let navigate = useNavigate()

  let SubmitEditedNote = (e) => {
    e.preventDefault()
    if (title==='' || body===''){
        setFieldError('Please fill those fields')
        return false
    }else{
    axios
      .put(BASE_URL + `api/v1/notes/${params.id}/`, {
        title: title,
        body: body,
      })
      .then((response) => {
        if (response.status===200){
            navigate('/')
        }
      })
      .catch((error) => {
        setFieldError('Something goes wrong, Please try again!')
      });
  }}
  let GetSingleNoteData = () => {
    axios.get(BASE_URL + `api/v1/notes/${params.id}/`).then((response) => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  };
  useEffect(() => {
    GetSingleNoteData();
  }, []);

  return (
    <div align='center'>
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
        <EditIcon sx={{ color: "#2c387e", marginTop: "20px" }} />
        <Typography variant="h5" style={{ fontFamily: "fantasy" }}>
          Edit Note
        </Typography>
        {fieldError&&<Alert onClose={()=>setFieldError(null)} severity="error">{fieldError}</Alert>}
        <form onSubmit={SubmitEditedNote}>
          <Box sx={{ marginTop: "10px" }}>
            <Typography align='start'>Title</Typography>
            <TextField
              value={title}
              sx={{ marginBottom: "10px" }}
              fullWidth
              name="title"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            ></TextField>
            <br />
            <Typography align='start'>Body</Typography>
            <TextareaAutosize
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              sx={{ marginTop: "10px" }}
              placeholder="Enter body"
              minRows={8}
              label="Enter Body"
              style={{ width: "100%" }}
            ></TextareaAutosize>
            <Button sx={{margin:'10px 0'}} type='submit'>Submit</Button>
          </Box>
        </form>
      </Card>
    </div>
  );
}

export default EditNoteForm;
