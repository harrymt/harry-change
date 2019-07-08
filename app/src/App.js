import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Harry's Exchange.</h1>
      </header>
      <main className="App-main">
        <div className="App-search">
          <input disabled className="Search-input" alt="Search Box" type="text"/>
          <button className="App-search-button" disabled>Search</button>
        </div>
      </main>
    </div>
  );
}

export default App;
