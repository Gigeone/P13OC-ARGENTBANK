import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isLoggedIn: false,
  token: null,
  firstName: null,
  lastName: null,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    logInSuccess: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName= action.payload.lastName;
    },

    logOut: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { logOut, logIn, logInSuccess } = authSlice.actions;

export default authSlice.reducer;