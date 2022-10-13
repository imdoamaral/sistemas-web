import React from 'react';
import './App.css';
import ListEstados from './components/estados/ListEstados';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header name='Israel' />
      <ListEstados />
    </div>
  );
}

export default App;
