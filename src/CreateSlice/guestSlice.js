import {createSlice} from '@reduxjs/toolkit';

const guestSlice = createSlice({
    name:'guest',
    initialState: 'Guest'
})

// export const { guestSlice } = createSlice.actions;
export default guestSlice.reducer;