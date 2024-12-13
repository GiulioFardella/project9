import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Collega Redux all'app
import store from './redux/store'; // Importa lo store configurato
import App from './components/App'; // Componente principale dell'app
import 'bootstrap/dist/css/bootstrap.min.css'; // (Opzionale) Importa Bootstrap CSS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <App />
    </Provider>
  
);
