import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthenticationReducer } from './slices/authentication/authentication.slice';
import { NutritionistsReducer } from './slices/nutritionists/nutritionists.slice';
import { TestimonialsReducer } from './slices/testimonials/testimonials.slice';
import { LayoutReducer } from './slices/layout/layout.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication'],
};

const reducer = combineReducers({
  authentication: AuthenticationReducer,
  nutritionists: NutritionistsReducer,
  testimonials: TestimonialsReducer,
  layout: LayoutReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
