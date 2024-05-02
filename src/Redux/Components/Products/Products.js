import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { singleProd } from '../../Reducer/MediaSlice';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom/dist';
import { Button, Card, CardBody } from 'react-bootstrap';

const Products = () => {
    let [state, setState] = useState([])

    let { prod } = useParams()
    // console.log("Single user ID:", prod);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(singleProd(prod))
            .then((res) => {
                // console.log("Axios data: ", res.payload.products);
                setState(res.payload.products)
            })
            .catch((err) => {
                console.log("Axios Error: ", err);
            })
    }, [dispatch, prod])
    // console.log("state: ", state);

    return (
        <Box>
            <Grid container spacing={2}>
                {
                    state.map((prod) => (
                        <Grid item key={prod.id} xs={12} sm={6} md={4}>
                            <Card style={{ gap: "1rem", backgroundColor: "whitesmoke", border: "1px solid black", margin: "10px" }} >
                                <CardBody style={{ backgroundColor: "whitesmoke", }}>
                                    <img src={prod.thumbnail} style={{ maxHeight: "200px" }} alt='no img'/>
                                    <Box >
                                        <Typography>Brand: {prod.brand}</Typography>
                                        <Typography>Title: {prod.title}</Typography>
                                        <Typography>Price: ${prod.price}</Typography>
                                        <Typography>ID: {prod.id}</Typography>
                                        <Button className='btn btn-success' >
                                            <Link to={`/single/${prod.id}`} style={{ textDecoration: "none" }}>
                                                View more</Link>
                                        </Button>
                                    </Box>
                                </CardBody>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    )
}

export default Products