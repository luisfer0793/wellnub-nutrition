export const API_BASE_URL = 'https://dev.api.wellnub.com';

export const NUTRITIONISTS_META_TAGS = [
  {
    id: 'nutritionists-meta-1',
    name: 'Nutriologos',
    description:
      'Encuentra a tu nutriólogo que más se adecue a tus necesidades',
  },
];

export const NUTRITIONIST_PROFILE_META_TAGS = [
  {
    id: 'nutritionist-profile-meta-1',
    name: 'Nutriologo',
    description:
      'Tu nutriólogo especialista que siempre te acompaña en tu camino a una mejor salud',
  },
];

export const PARTNERS_META_TAGS = [
  {
    id: 'partners-meta-1',
    name: 'Partners Wellnub',
    description:
      'Encuentra a tu parner Wellnub con el que podrás realizarte escaneos InBody',
  },
];

export const LANDING_PAGE_META_TAGS = [
  {
    id: 'landing-page-meta-1',
    name: 'Wellnub',
    description:
      'La plataforma donde puedes encontrar a tu profesional de la salud más adecuado para ti',
  },
];

export const LOGIN_PAGE_META_TAGS = [
  {
    id: 'login-page-meta-1',
    name: 'Iniciar sesión',
    description: 'Inicia sesión en Wellnub',
  },
];

export const ROLES = {
  ADMIN: 'WN-1010',
  CLIENT: 'WN-1011',
  PARTNER: 'WN-1012',
  NUTRITIONIST: 'WN-1013',
};

export const REGISTERED_USERS = [
  {
    id: 'WN-USER-ADMIN-1',
    name: 'Alonso',
    lastName: 'Vieyra',
    role: ROLES.ADMIN,
    accessToken: 'TKN-WN-001',
    email: 'admin@wellnub.com',
    password: 'password',
    image:
      'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 'WN-USER-PARTNER-1',
    name: 'Gabriela',
    lastName: 'Zarate',
    role: ROLES.PARTNER,
    accessToken: 'TKN-WN-002',
    email: 'partner@wellnub.com',
    password: 'password',
    image:
      'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'WN-USER-NUTRITIONIST-1',
    name: 'Anahí',
    lastName: 'Zepeda',
    role: ROLES.NUTRITIONIST,
    accessToken: 'TKN-WN-003',
    email: 'nutriologo@wellnub.com',
    password: 'password',
    image:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
  },
  {
    id: 'WN-USER-CLIENT-1',
    name: 'Fernando',
    lastName: 'Jiménez',
    role: ROLES.CLIENT,
    accessToken: 'TKN-WN-004',
    email: 'cliente@wellnub.com',
    password: 'password',
    image:
      'https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
  },
];

export const NAVBAR_ADMIN_LINKS = [
  {
    id: 'navbar-admin-link-1',
    to: 'calendario',
    label: 'Mi Calendario admin',
    icon: 'faCalendarCheck',
  },
  {
    id: 'navbar-admin-link-2',
    to: 'pases',
    label: 'Mis Pases admin',
    icon: 'faTicketSimple',
  },
  {
    id: 'navbar-admin-link-3',
    to: 'analisis-corporal',
    label: 'Análisis Corporal admin',
    icon: 'faWeightScale',
  },
];
export const NAVBAR_CLIENT_LINKS = {
  General: [
    {
      to: 'dashboard',
      label: 'Dashboard',
      icon: 'faLaptop',
    },
  ],
  Salud: [
    {
      to: 'progreso',
      label: 'Progreso',
      icon: 'faChalkboardUser',
    },
    {
      to: 'analisis-corporal',
      label: 'Análisis Corporal',
      icon: 'faWeightScale',
    },
  ],
  Market: [
    {
      to: 'compras',
      label: 'Compras y suscripciones',
      icon: 'faStore',
    },
    {
      to: 'promociones',
      label: 'Promociones',
      icon: 'faMoneyBill',
    },
  ],
  Apps: [
    {
      to: 'calendario',
      label: 'Mi Calendario',
      icon: 'faCalendarCheck',
    },
  ],
};

export const CALENDAR_EVENT_TYPES = {
  APPOINTMENT: 'CITA_NUTRIOLOGO',
  ANALYSIS: 'ANALISIS_INBODY',
  FREE: 'TIEMPO_LIBRE',
  RANDOM: 'ALEATORIO',
};

// ---- Z-INDEXES ----
export const ZINDEX = {
  OVERLAY: 100,
  NAVBAR: 101,
  DRAWER: 102,
};

// ---- REACT QUERY KEYS ----
export const QUERY_KEYS = {
  CLIENT: {
    GET_APPOINTMENTS: 'GET_APPOINTMENTS',
    GET_RECEIVED_PASSES: 'GET_RECEIVED_PASSES',
  },
};

// ---- DRAWERS NAMES ----
export const DRAWERS = {
  CLIENT: {
    PAYMENT_METHOD: 'PAYMENT_METHOD',
    CHECKOUT: 'CHECKOUT',
  },
};
