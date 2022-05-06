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
        { id: 'nutritionist-1-specialty-1', title: 'Alimentación cetogénica' },
        {
          id: 'nutritionist-1-specialty-2',
          title: 'Bulimia, anorexia y otros',
        },
        { id: 'nutritionist-1-specialty-3', title: 'Control de peso' },
        { id: 'nutritionist-1-specialty-4', title: 'Cirugía barítica' },
        { id: 'nutritionist-1-specialty-5', title: 'Alimentación vegetariana' },
      ],
      services: [
        { id: 'nutritionist-1-service-1', title: 'En línea' },
        { id: 'nutritionist-1-service-2', title: 'Presencial' },
        { id: 'nutritionist-1-service-3', title: 'A domicilio' },
      ],
    },
    {
      id: 'nutritionist-2',
      name: 'Allison Cameron',
      title: 'Educadora en diabetes',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      specialties: [
        { id: 'nutritionist-2-specialty-1', title: 'Alimentación cetogénica' },
        {
          id: 'nutritionist-2-specialty-2',
          title: 'Bulimia, anorexia y otros',
        },
        { id: 'nutritionist-2-specialty-3', title: 'Control de peso' },
        { id: 'nutritionist-2-specialty-4', title: 'Cirugía barítica' },
        { id: 'nutritionist-2-specialty-5', title: 'Alimentación vegetariana' },
      ],
      services: [
        { id: 'nutritionist-2-service-1', title: 'En línea' },
        { id: 'nutritionist-2-service-2', title: 'Presencial' },
        { id: 'nutritionist-2-service-3', title: 'A domicilio' },
      ],
    },
    {
      id: 'nutritionist-3',
      name: 'Erick Foreman',
      title: 'Dietista',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80',
      specialties: [
        { id: 'nutritionist-3-specialty-1', title: 'Alimentación cetogénica' },
        {
          id: 'nutritionist-3-specialty-2',
          title: 'Bulimia, anorexia y otros',
        },
        { id: 'nutritionist-3-specialty-3', title: 'Control de peso' },
        { id: 'nutritionist-3-specialty-4', title: 'Cirugía barítica' },
        { id: 'nutritionist-3-specialty-5', title: 'Alimentación vegetariana' },
      ],
      services: [
        { id: 'nutritionist-3-service-1', title: 'En línea' },
        { id: 'nutritionist-3-service-2', title: 'A domicilio' },
      ],
    },
    {
      id: 'nutritionist-4',
      name: 'Gregory House',
      title: 'Diagnosta y especialista en desnutrición',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      specialties: [
        { id: 'nutritionist-4-specialty-1', title: 'Alimentación cetogénica' },
        {
          id: 'nutritionist-4-specialty-2',
          title: 'Bulimia, anorexia y otros',
        },
        { id: 'nutritionist-4-specialty-3', title: 'Control de peso' },
        { id: 'nutritionist-4-specialty-4', title: 'Cirugía barítica' },
        { id: 'nutritionist-4-specialty-5', title: 'Alimentación vegetariana' },
      ],
      services: [
        { id: 'nutritionist-4-service-1', title: 'En línea' },
        { id: 'nutritionist-4-service-2', title: 'Presencial' },
        { id: 'nutritionist-4-service-3', title: 'A domicilio' },
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
