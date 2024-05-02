import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { base_url, category_url, single_url } from '../../Api/api'
import axios from 'axios';

const local_api = base_url;
// console.log("local api: ", local_api);

//get
export const fetchProd = createAsyncThunk("get/fetchProd", async () => {
    const res = await axios.get(local_api);
    // console.log("fetch slice: ", res);
    return res?.data;
})

//single category products
export const singleProd = createAsyncThunk("get/singleProd", async (prod) => {
    const res = await axios.get(`${category_url}/${prod}`);
    // console.log("single prod slice: ", res.data.products);
    return res?.data;
})

//single products
export const oneProd = createAsyncThunk("get/oneProd", async (id) => {
    const res = await axios.get(`${single_url}/${id}`);
    // console.log("One prod slice: ", res.data);
    return res?.data;
})

const initial_value = {
    isLoading: false,
    allData: [],
    error: null,
};

export const MediaSlice = createSlice({
    name: "mobiles",
    initialState: initial_value,

    //work as middleware for handling asynchronous action
    extraReducers: (builder) => {
        builder.addCase(fetchProd.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProd.fulfilled, (state, action) => {
            // console.log("Action for fulfilled", action);
            state.isLoading = false;
            state.allData = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProd.rejected, (state, action) => {
            console.log("Action for rejected", action);
            state.isLoading = false;
            state.allData = [];
            state.error = action.error.message;
        });

        //single products
        builder.addCase(singleProd.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(singleProd.fulfilled, (state, action) => {
            // console.log("Action for fulfilled", action);
            state.isLoading = false;
            state.allData = action.payload;
            state.error = null;
        });
        builder.addCase(singleProd.rejected, (state, action) => {
            console.log("Action for rejected", action);
            state.isLoading = false;
            state.allData = [];
            state.error = action.error.message;
        });

        //one products
        builder.addCase(oneProd.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(oneProd.fulfilled, (state, action) => {
            // console.log("Action for fulfilled", action);
            state.isLoading = false;
            state.allData = action.payload;
            state.error = null;
        });
        builder.addCase(oneProd.rejected, (state, action) => {
            console.log("Action for rejected", action);
            state.isLoading = false;
            state.allData = [];
            state.error = action.error.message;
        });
    },
});

export default MediaSlice.reducer;
