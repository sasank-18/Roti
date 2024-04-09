
import { configureStore } from "@reduxjs/toolkit";
import signInSelection from './toggleSignInSelection.js'
const appStore= configureStore({
    reducer: {
        signInSelection : signInSelection
    }
})

export default appStore;