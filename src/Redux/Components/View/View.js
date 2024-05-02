import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProd } from '../../Reducer/MediaSlice';
import { Box, Table } from '@mui/material';
import { Link } from 'react-router-dom/dist';

const View = () => {
    let [state, setState] = useState([])

    // const { loading, error } = useSelector((state) => state.addprods)
    // console.log("Get data: ", allData);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProd())
            .then((res) => {
                // console.log("Axios data: ", res);
                setState(res.payload)
            })
            .catch((err) => {
                console.log("Axios Error: ", err);
            })
    }, [dispatch])
    // console.log("state: ", state);

    return (
        <Box>
            <Box style={{ display: "flex", height: "100vh", justifyContent: "center" }}>
                <Table style={{ maxWidth: 800, backgroundColor: "whiteSmoke" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            state.map((prod, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>
                                        {prod}
                                    </td>
                                    <td>
                                        <Link to={`/prod/${prod}`}>view</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </Table>
            </Box>
        </Box >
    )
}

export default View