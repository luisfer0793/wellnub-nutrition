export const drawersSelector = state => state.drawers.drawers;

export const drawerSelector = (state, name, role) =>
  state.drawers.drawers[role].find(drawer => drawer.name === name);
