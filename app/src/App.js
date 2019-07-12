import React from 'react';
import './App.css';
import { Header } from './Header';
import { Search } from './Search';
import { OpenOrders } from './OpenOrders';

const App = () => (
  <div className="App">
    <Header />
    
    <main className="App-main">
      <Search />
      <h2>Open Orders</h2>
      <OpenOrders />
    </main>
  </div>
);

export default App;
