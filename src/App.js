import React from 'react';
import './App.css';
import { SkillsByCategory } from './Categories';
import { Crafts } from './Crafts';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills-by-category" component={SkillsByCategory} />
        <Route path="/crafts" component={Crafts} />
      </Switch>
    </div>
  );
};

export default App;


