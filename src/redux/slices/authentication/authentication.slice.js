import { createSlice } from '@reduxjs/toolkit';

export const AUTHENTICATION_INITIAL_STATE = {
  isAuthenticated: false,
  tokens: {
    access: '',
    refresh: '',
  },
  user: {
    id: '',
    name: '',
    email: '',
    roles: [],
    lastName: '',
  },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: AUTHENTICATION_INITIAL_STATE,
  reducers: {
    setAuthenticationStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthenticationTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setAuthenticationUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setAuthenticationStatus,
  setAuthenticationTokens,
  setAuthenticationUser,
} = authenticationSlice.actions;
export const AuthenticationReducer = authenticationSlice.reducer;
