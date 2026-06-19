import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:'login',
    initialState:{userName:'', password:'', isLoggedIn:false},
    reducers:{
        login:(state, action)=>{
            const { userName, password, isLoggedIn } = action.payload;
            state.userName = userName;
            state.password = password;
            state.isLoggedIn = isLoggedIn;
        },
        logout: (state, action)=>{
            // const { userName, password, isLoggedIn } = action.payload;
             console.log('logout called')
              state.userName = '';
              state.password = '';
              state.isLoggedIn = false;
           
        }
    },
});

// const {login} = loginSlice.actions;
// export default loginSlice.reducer;

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
