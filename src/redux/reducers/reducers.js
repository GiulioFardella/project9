import { combineReducers } from 'redux';

// Esempio di un reducer per gestire i brani preferiti
const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter((track) => track.id !== action.payload.id);
    default:
      return state;
  }
};

// Combina tutti i reducer (puoi aggiungerne altri in futuro)
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
