
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type AudioPlay = {
    isShowModalPlay : boolean, 
    isFixed : boolean,
}

const initialState : AudioPlay = {
    isShowModalPlay : false,
    isFixed : true,
}

const audioPlaySlide = createSlice({
    name: "audioPlay" ,
    initialState,
    reducers: {
        setShowModal  :  (state, action : PayloadAction<boolean>) => {
            state.isShowModalPlay = action.payload

        }
    }

})


export const audioPlayReducer = audioPlaySlide.reducer
export const {setShowModal} = audioPlaySlide.actions

export const audioPlaySelector = (state: any) => state.audioPlayReducer