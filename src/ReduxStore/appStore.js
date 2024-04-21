
import { configureStore } from "@reduxjs/toolkit";
import signInSelection from './toggleSignInSelection.js'
import User from "./currentUserSlice.js";





const appStore= configureStore({
    reducer: {
        signInSelection : signInSelection,
        currentUser : User 
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),


})

export default appStore;