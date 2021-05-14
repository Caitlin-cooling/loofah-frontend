import React from "react";
import "./App.css";
import Skills from "./pages/Skills";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./assets/Deloitte-Digital-Logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: theme.spacing(5)
  },
  appBar: {
    padding: theme.spacing(3),
    backgroundColor: "white",
    color: "black",
    zIndex: theme.zIndex.drawer + 1
  },
  divider: {
    margin: theme.spacing(1)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <img src={logo} alt="Deloitte Digital logo" className={classes.logo} />
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <Typography variant="h6">
            LOOFAH
          </Typography>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;


