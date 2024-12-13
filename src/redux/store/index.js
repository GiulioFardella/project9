import { configureStore } from '@reduxjs/toolkit';  // Importa configureStore
import rootReducer from '../reducers/reducers';


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',  // Abilita DevTools in ambiente di sviluppo
});

export default store;
