import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Reducer/MediaSlice";


const store = configureStore({
    reducer: {
        addprods: reducer,
    },
});
export default store;
