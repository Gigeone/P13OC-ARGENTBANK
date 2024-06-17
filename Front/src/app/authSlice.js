import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: null,
  user: null,
  error: null,
  token:null,
  isLoggedIn: false
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;