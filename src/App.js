import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppBar color="inherit">
          <Toolbar>
            <Typography variant="h6">
              LOOFAH
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;


