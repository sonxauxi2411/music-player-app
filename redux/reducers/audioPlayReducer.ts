
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type AudioPlay = {
    isShowModalPlay : boolean, 
    isFixed : boolean,
    playList : any[],
    isActionPlay : boolean,
}

const initialState : AudioPlay = {
    isShowModalPlay : false,
    isFixed : false,
    playList : [],
    isActionPlay: false,
 
}

const audioPlaySlide = createSlice({
    name: "audioPlay" ,
    initialState,
    reducers: {
        setShowModal  :  (state, action : PayloadAction<boolean>) => {
            state.isShowModalPlay = action.payload

        },
        setFixedShow : (state, action : PayloadAction<boolean>) =>{
            state.isFixed = action.payload
        },
        setPlayAudio :  (state) =>{
            // state.playList = [...state.playList, action.payload]
            state.isFixed = true ,
            state.isActionPlay = true
            
        },
        setActionAudioPlay : (state, action : PayloadAction<boolean>) =>{
            state.isActionPlay = action.payload
        }
    }

})


export const audioPlayReducer = audioPlaySlide.reducer
export const {setShowModal , setFixedShow , setPlayAudio , setActionAudioPlay} = audioPlaySlide.actions

export const audioPlaySelector = (state: any) => state.audioPlayReducer