import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    accessToken: '',
    roles: [],
  },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthentication: {
      reducer: (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.payload.user;
      },
      prepare: (isAuthenticated, credentials) => ({
        payload: {
          isAuthenticated,
          user: isAuthenticated ? credentials : { ...initialState.user },
        },
      }),
    },
  },
});

export const { setAuthentication } = authenticationSlice.actions;
export const AuthenticationReducer = authenticationSlice.reducer;
