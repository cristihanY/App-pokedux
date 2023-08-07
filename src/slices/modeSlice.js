import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statemode: false,
};

export const modeSlice = createSlice({
    name:'mode',
    initialState,
    reducers:{
        setStatemode: (state, action) => {
            state.statemode = action.payload;
        },
    }
});

export const {setStatemode} = modeSlice.actions;
export default modeSlice.reducer;
