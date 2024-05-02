import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { oneProd } from '../../Reducer/MediaSlice';
import { Box, Typography } from '@mui/material';
import { Card, CardBody } from 'react-bootstrap';

const Single = () => {
  let [state, setState] = useState([])
  let [img, setImg] = useState([])

  let { id } = useParams()
  // console.log("Single user ID:", id);


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(oneProd(id))
      .then((res) => {
        // console.log("Axios data: ", res.payload);
        // console.log("images data: ", res.payload.images);
        setImg(res.payload.images)
        setState(res.payload)
      })
      .catch((err) => {
        console.log("Axios Error: ", err);
      })
  }, [dispatch, id])
  // console.log("state: ", state);


  return (
    <Box style={{ display: "flex", height: "100vh", justifyContent: "center" }}>
      <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CardBody style={{ border: "1px solid black", margin: "10px", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left", gap: "1rem" }}>
          <Box>
            {
              img.map((img, index) => (
                <React.Fragment key={index}>
                  <img src={img} style={{ maxWidth: "200px" }} alt='no img' />
                </React.Fragment>

              ))
            }
          </Box>
          {/* <img src={state.thumbnail} style={{ maxWidth: "50px" }} /> */}
          <Box style={{ backgroundColor: "whitesmoke" }}>
            <Typography>ID: {id}</Typography>
            <Typography>Brand: {state.brand}</Typography>
            <Typography>Title: {state.title}</Typography>
            <Typography>Price: ${state.price}</Typography>
            <Typography>Description: ${state.description}</Typography>
          </Box>
        </CardBody>
      </Card>
    </Box >
  )
}

export default Single