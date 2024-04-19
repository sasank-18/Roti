import {createSlice} from "@reduxjs/toolkit"


const toggle_SignIn_SelectionSlice = createSlice({
     name : 'toggle_SignIn_Selection',
     initialState : { 
       SignInSelection: false,
     }, 
     reducers : {
        toggleSignIn_Selection : (state)  => {
             state.SignInSelection = !state.SignInSelection;
        }
      
     }
})


export const {toggleSignIn_Selection} = toggle_SignIn_SelectionSlice.actions;
export default toggle_SignIn_SelectionSlice.reducer;