import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nutritionists: [
    {
      id: 'nutritionist-1',
      name: 'Robert Chase',
      title: 'Nutriólogo especializado en dietas y nutrición vegana',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80',
      specialties: [
        { id: 'specialty-1', title: 'Alimentación cetogénica' },
        { id: 'specialty-2', title: 'Bulimia, anorexia y otros' },
        { id: 'specialty-3', title: 'Control de peso' },
        { id: 'specialty-4', title: 'Cirugía barítica' },
        { id: 'specialty-5', title: 'Alimentación vegetariana' },
      ],
    },
    {
      id: 'nutritionist-2',
      name: 'Allison Cameron',
      title: 'Educadora en diabetes',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      specialties: [
        { id: 'specialty-1', title: 'Alimentación cetogénica' },
        { id: 'specialty-2', title: 'Bulimia, anorexia y otros' },
        { id: 'specialty-3', title: 'Control de peso' },
        { id: 'specialty-4', title: 'Cirugía barítica' },
        { id: 'specialty-5', title: 'Alimentación vegetariana' },
      ],
    },
    {
      id: 'nutritionist-3',
      name: 'Erick Foreman',
      title: 'Dietista',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80',
      specialties: [
        { id: 'specialty-1', title: 'Alimentación cetogénica' },
        { id: 'specialty-2', title: 'Bulimia, anorexia y otros' },
        { id: 'specialty-3', title: 'Control de peso' },
        { id: 'specialty-4', title: 'Cirugía barítica' },
        { id: 'specialty-5', title: 'Alimentación vegetariana' },
      ],
    },
    {
      id: 'nutritionist-4',
      name: 'Gregory House',
      title: 'Diagnosta y especialista en desnutrición',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      specialties: [
        { id: 'specialty-1', title: 'Alimentación cetogénica' },
        { id: 'specialty-2', title: 'Bulimia, anorexia y otros' },
        { id: 'specialty-3', title: 'Control de peso' },
        { id: 'specialty-4', title: 'Cirugía barítica' },
        { id: 'specialty-5', title: 'Alimentación vegetariana' },
      ],
    },
  ],
};

const nutritionistsSlice = createSlice({
  name: 'nutritionists',
  initialState,
  reducers: {
    setNutritionists: (state, action) => {
      state.nutritionists = action.payload;
    },
  },
});

export const { setNutritionists } = nutritionistsSlice.actions;
export const NutritionistsReducer = nutritionistsSlice.reducer;
