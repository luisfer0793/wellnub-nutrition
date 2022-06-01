import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: {},
  collection: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointmentsCollection: (state, action) => {
      state.collection = action.payload;
    },
    setActiveAppointment: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setAppointmentsCollection, setActiveAppointment } =
  appointmentsSlice.actions;

export const AppointmentsReducer = appointmentsSlice.reducer;
