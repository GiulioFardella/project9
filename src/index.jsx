import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Collega Redux all'app
import store from './store'; // Importa lo store configurato
import App from './components/App'; // Componente principale dell'app
import 'bootstrap/dist/css/bootstrap.min.css'; // (Opzionale) Importa Bootstrap CSS
import './styles/App.css'; // (Opzionale) Stili personalizzati

// Monta l'app nel DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' deve corrispondere all'ID del contenitore nel file public/index.html
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
);
