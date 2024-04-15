import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'user',
    initialState : {
      User : null
    }, 
    reducers : {
        
        UpdateUser : (state, action) => {
         state.User = action.payload;
        }
    
    }
  

})

export const {UpdateUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;