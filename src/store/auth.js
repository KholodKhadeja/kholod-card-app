import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  loggedInVar: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedInVar = true;},
    logout(state) {
       state.loggedInVar = false; },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
