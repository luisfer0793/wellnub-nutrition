import { createSlice } from '@reduxjs/toolkit';

import { DRAWERS, ROLES } from 'utils/constants.util';

const initialState = {
  drawers: {
    [ROLES.PARTNER]: [],
    [ROLES.CLIENT]: [
      {
        name: DRAWERS.CLIENT.PAYMENT_METHOD,
        title: 'Agregar método de pago',
        isVisible: false,
      },
      {
        name: DRAWERS.CLIENT.CHECKOUT,
        title: 'Finaliza tu compra',
        isVisible: false,
      },
    ],
    [ROLES.NUTRITIONIST]: [],
    [ROLES.ADMIN]: [],
  },
};

const drawersSlice = createSlice({
  name: 'drawers',
  initialState,
  reducers: {
    setDrawerVisibility: (state, action) => {
      const drawersByRole = state.drawers[action.payload.role];
      const index = drawersByRole.findIndex(
        drawer => drawer.name === action.payload.name,
      );
      if (index >= 0) drawersByRole[index].isVisible = action.payload.isVisible;
    },
  },
});

export const { setDrawerVisibility } = drawersSlice.actions;
export const DrawersReducer = drawersSlice.reducer;
