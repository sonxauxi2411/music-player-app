import { configureStore , applyMiddleware  } from "@reduxjs/toolkit";
import { audioPlayReducer } from "./reducers/audioPlayReducer";
import thunk, { ThunkDispatch } from 'redux-thunk';




const store = configureStore({
    reducer: {
        audioPlayReducer
    }
})


export default store