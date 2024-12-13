import React from 'react';
import MyNavbar from './MyNavbar';
import HomePage from './HomePage';

const App = () => {
  return (
    <div className="d-flex">
      <MyNavbar />
      <main className="flex-grow-1 p-3">
        <HomePage />
      </main>
    </div>
  );
};

export default App;
