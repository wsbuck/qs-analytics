import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/Cards/CardContainer';
import UsersContainer from './Components/Users/UsersContainer';

// import NewUserChart from './Components/Users/NewUserChart';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/analytics" exact component={CardContainer} />
      <Route path="/analytics/users" exact component={UsersContainer} />
      {/* <NewUserChart/> */}
    </div>
  );
}

export default App;