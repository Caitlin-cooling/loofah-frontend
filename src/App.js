import React from 'react';
import './App.css';
import { SkillsByCategory } from './Categories';
import { SkillsByCraft } from './Crafts';
import { SkillsByGrade } from './Grades';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills-by-category" component={SkillsByCategory} />
        <Route path="/skills-by-craft" component={SkillsByCraft} />
        <Route path="/skills-by-grade" component={SkillsByGrade} />
      </Switch>
    </div>
  );
};

export default App;


