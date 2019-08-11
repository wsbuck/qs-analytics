import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';
import NewUserChart from './Components/NewUserChart';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
      <NewUserChart/>
    </div>
  );
}

export default App;