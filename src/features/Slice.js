import { createSlice } from "@reduxjs/toolkit";

import { getUser, setUser, clearAll } from "./localStorage";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: getUser(),

  },

  reducers: {
    addUserToLocal: (state, action) => {
      state.userInfo = action.payload;
      setUser(state.userInfo);
    },

    clearAlls: (state, action) => {
      state.userInfo = null;

      clearAll();
    }
  }
});

export const { addUserToLocal, clearAlls } = userSlice.actions;
export default userSlice.reducer;