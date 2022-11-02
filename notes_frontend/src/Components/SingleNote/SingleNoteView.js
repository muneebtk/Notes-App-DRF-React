import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleNoteView() {
  let params = useParams();
  const [singleNoteData, setSingelNoteData] = useState();
  const BASE_URL = "http://127.0.0.1:8000/";
  let SingleNote = () => {
    axios.get(BASE_URL + `api/v1/notes/${params.id}/`).then((response) => {
      setSingelNoteData(response.data);
    });
  };
  useEffect(() => {
    SingleNote();
  }, []);

  return (
    <div align='center'>
      <Card
        minWidth='200px'
        align="center"
        elevation={0}
        sx={{ margin: "100px 20px" ,maxWidth:'400px',minWidth:'300px'}}
      >
        <Typography variant="h4">
          {singleNoteData && singleNoteData.title}
        </Typography>
        <Typography variant="h6">
          {singleNoteData && singleNoteData.body}
        </Typography>
      </Card>
    </div>
  );
}

export default SingleNoteView;
