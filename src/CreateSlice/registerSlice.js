import {createSlice} from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name:'register',
    initialState:[{id:1, userName:'test', password:'123', email: 'test@gmail.com'},{id:2, userName:'test1', password:'123', email: 'test1@gmail.com'}],
    reducers:{
        register:(state, action)=>{
            const {userName, password, email} = action.payload;
            state.push({
                id:Date.now(), // unique id
                userName,
                password,
                email
            })
        }
    }
});

export const {register} = registerSlice.actions;
export default registerSlice.reducer;