import React, { useState } from 'react';
import './App.css';
import Skills from './Skills/Skills';
import HomePage from './HomePage/HomePage';
import { Route, Switch } from 'react-router-dom'

const App = (props) => {


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </div>
  );
}

export default App;


