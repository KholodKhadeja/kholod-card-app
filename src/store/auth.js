import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  loggedInVar: false,
  userInfo:{}, /*encrypted data about token*/
  userData:null, /*data that contains the user name*/
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state,action) {
      state.loggedInVar = true;
      state.userInfo=action.payload;
  },
    logout(state) {
       state.loggedInVar = false; 
      state.userInfo={};
    },
    updateUserData(state, action){
      state.userData=action.payload;
    }
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
