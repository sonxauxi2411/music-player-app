import { configureStore } from "@reduxjs/toolkit";
import { audioPlayReducer } from "./reducers/audioPlayReducer";


const store = configureStore({
    reducer: {
        audioPlayReducer
    }
})


export default store