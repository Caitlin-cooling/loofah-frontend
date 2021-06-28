import React from "react";
import "./App.css";
import Skills from "./pages/Skills";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
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
      color: "#111820",
      fontFamily: "Open Sans, sans-serif"
    },
    body2: {
      color: "#6b6d70",
      fontFamily: "Open Sans, sans-serif"
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

const barHeight = 110;

const useStyles = makeStyles({
  logo: {
    height: theme.spacing(8)
  },
  logoAndLoofah: {
    display: "flex",
    alignItems: "center"
  },
  appBar: {
    padding: theme.spacing(3),
    backgroundColor: "white",
    color: "black",
    zIndex: theme.zIndex.drawer + 1,
    height: `${barHeight}px`
  },
  toolBar: {
    width: "100%",
    margin: "auto",
    justifyContent: "space-between"
  },
  divider: {
    margin: theme.spacing(1)
  },
  drawer: {
    flexShrink: 0
  },
  drawerPaper: {
    [theme.breakpoints.down("sm")]: {
    width: "100%"
    },
    [theme.breakpoints.up("md")]: {
    width: "15%"
    },
    zIndex: theme.zIndex.drawer + 2
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: `${barHeight}px`,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2)
      },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 6)
    }
  },
  list: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2)
      },
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(9)
    }
  },
  link: {
    fontSize: "1.4rem",
    fontWeight: "bold"
  },
  menuIconWrapper: {
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 6)
    }
  },
  menuIcon: {
    fontSize: theme.spacing(5)
  }
});

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolBar}>
            <div className={classes.logoAndLoofah}>
              <Link to={"/"}>
                <img src={logo} alt="Deloitte Digital logo" className={classes.logo} />
              </Link>
              <Divider orientation="vertical" flexItem className={classes.divider} />
              <Link to={"/"}>
                <Typography variant="h6">
                  LOOFAH
                </Typography>
              </Link>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuIconWrapper}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
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
          <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className={classes.list}>
            {[
              { text: "Browse Skills", path: "/skills" }
            ].map((link) => (
              <ListItem button key={link.text}>
                <Link
                  to={link.path}
                  className={classes.link}
                  onClick={handleDrawerClose}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </ThemeProvider >
    </Router>
  );
};

export default App;


