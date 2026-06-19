// import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import {persistReducer, persistStore} from 'redux-persist';
// import counterSlice from '../CreateSlice/counterSlice';
// import guestSlice from '../CreateSlice/guestSlice';
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//     counter: counterSlice,
//     guest: guestSlice
// })

// const persistCofig = {
//     key: 'root',
//     storage
// }

// const persisteReudcer = persistReducer(persistCofig, rootReducer)

// export const store = configureStore({
//     reducer:{
//         counter: counterSlice,
//         guest: guestSlice
//     }
// });

// export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../CreateSlice/counterSlice";
import guestReducer from '../CreateSlice/guestSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loginReducer from '../CreateSlice/loginSlice';
import RegisterReducer from '../CreateSlice/registerSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  guest: guestReducer,
  login: loginReducer,
  register: RegisterReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);