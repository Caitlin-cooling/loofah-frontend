import React from "react";
import "./App.css";
import Skills from "./Skills";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loofah: {
    fontWeight: "bold"
  },
  appBar: {
    padding: "1.5em",
    backgroundColor: "white",
    color: "black",
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    padding: "0 0 1.5em"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <img src="/src/assets/dd-logo.png" alt="Deloitte Digital logo" />
          <Divider orientation="vertical" flexItem />
          <Typography variant="h5" noWrap className={classes.loofah}>
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


