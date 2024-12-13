import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './components/Homepage';
import MyNavbar from './components/MyNavbar';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="d-flex">
     <MyNavbar/>
        <main className="flex-grow-1 p-3">
          <HomePage />
        </main>
      </div>
    </Provider>
  );
};

export default App;
