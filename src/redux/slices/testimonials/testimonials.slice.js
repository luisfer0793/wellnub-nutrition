import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [
    {
      author: 'Daniela Lara',
      title: 'Lic. en Nutrición',
      image:
        'https://wellnub.s3.us-west-1.amazonaws.com/homeNutris/nutritionist_daniela_lara.jpg',
      socialMedia: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/3fitfoodies/',
        },
      ],
      quote:
        'Estoy encantada con Wellnub y mis pacientes también. La atención es excelente, el proceso es fácil y cómodo y como nutrióloga viviendo fuera de México me da mucho gusto poder seguir ofreciendo este plus en mis consultas.',
      location: 'Alemania',
    },
    {
      author: 'Karina Márquez',
      title: 'Nutrióloga y Educadora en Diabetes',
      image:
        'https://wellnub.s3.us-west-1.amazonaws.com/homeNutris/nutritionist_karina_marquez.jpeg',
      socialMedia: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/nutrikarimrqz/',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/nutriologakarinamarquez',
        },
      ],
      quote:
        'Wellnub me ha ayudado a darles un mejor seguimiento a mis pacientes de Ciudad de México desde Querétaro. Es una plataforma muy sencilla de utilizar tanto para el nutriólogo y paciente. Constantemente están haciendo mejoras y actualizaciones y eso me encanta.',
      location: 'Querétaro',
    },
    {
      author: 'Fernanda Sandoval',
      title:
        'Lic. en Nutrición y Ciencia de los Alimentos / Mtra. en Metabolismo',
      image:
        'https://wellnub.s3.us-west-1.amazonaws.com/homeNutris/nutritionist_fernanda_sandoval+.png',
      socialMedia: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/nutriologasexitosas/',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/institutoeligenutricion',
        },
      ],
      quote:
        'Wellnub es un gran aliado para todas las nutriólogas, tan fácil como asignar un pase, el paciente acude a su análisis de composición corporal sin tu intervención y tú recibes los resultados para interpretarlos y complementar su diagnóstico.',
      location: 'CDMX',
    },
    {
      author: 'Angélica Reyes',
      title: 'Nutrióloga Perinatal',
      image:
        'https://wellnub.s3.us-west-1.amazonaws.com/homeNutris/nutritionist_angelica_reyes.jpeg',
      socialMedia: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/renalmente_nutritivo/',
        },
        {
          name: 'instagram',
          url: 'https://www.instagram.com/nutretumaternidad/',
        },
      ],
      quote:
        'La evaluación nutricional y el seguimiento de los pacientes se hace más sencillo con InBody y Wellnub. Estas herramientas te permiten adecuar planes de alimentación personalizados, además de llevar un monitoreo exacto y preciso de la composición corporal.',
      location: 'CDMX',
    },
    {
      author: 'Diana Espinoza',
      title: 'Dietista / Nutrióloga',
      image:
        'https://wellnub.s3.us-west-1.amazonaws.com/homeNutris/nutritionist_diana_espinoza.jpeg',
      socialMedia: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/dianutriendo/',
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/dianutriendo',
        },
        {
          name: 'website',
          url: 'http://www.dianaespinoza.com',
        },
      ],
      quote:
        'Wellnub ha resuelto una pieza clave para mis consultas online. Estoy encantada y siempre están dispuestos a ayudarme.',
      location: 'CDMX',
    },
  ],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;
export const TestimonialsReducer = testimonialsSlice.reducer;
