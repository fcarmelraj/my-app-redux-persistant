import {createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state, action)=>{
          state.count++;
        },
        decrement: (state, action)=>{
            state.count--;
        }
    }
});

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;