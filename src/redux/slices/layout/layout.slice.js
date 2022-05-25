import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navbar: {
    isVisible: true,
  },
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setNavbarVisibility: (state, action) => {
      state.navbar.isVisible = action.payload;
    },
  },
});

export const { setNavbarVisibility } = layoutSlice.actions;
export const LayoutReducer = layoutSlice.reducer;
