import React from 'react';
import './App.css';
import { Skills } from './components/Skills/Skills';
import Playlist from './components/Playlist/Playlist';
import HomePage from './components/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/skills" component={Skills} />
        <Route path="/playList" component={Playlist} />
      </Switch>
    </div>
  );
};

export default App;


