import React from "react";
import "./App.css";
import Skills from "./pages/Skills";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider,
  Typography,
  AppBar,
  Toolbar,
  Divider
} from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import logo from "./assets/Deloitte-Digital-Logo.png";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8cf101"
    },
    secondary: {
      main: "#9dd4cf"
    }
  },
  typography: {
    h1: {
      fontFamily: "ChronicleDisp-Roman",
      fontSize: "4rem",
      color: "#111820"
    },
    body1: {
      color: "#111820"
    },
    body2: {
      color: "#6b6d70"
    }
  },
  overrides: {
    MuiTab: {
      wrapper: {
        display: "inline"
      }
    }
  }
});

const useStyles = makeStyles({
  logo: {
    height: theme.spacing(5)
  },
  appBar: {
    padding: theme.spacing(3),
    backgroundColor: "white",
    color: "black",
    zIndex: theme.zIndex.drawer + 1
  },
  toolBar: {
    width: "75%",
    margin: "auto"
  },
  divider: {
    margin: theme.spacing(1)
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolBar}>
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
            <Route exact path="/crafts">
            </Route>
          </Switch>
        </div>
      </ThemeProvider >
    </Router>
  );
};

export default App;


