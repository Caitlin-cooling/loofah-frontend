import React, { useState } from "react";
import { Drawer, Divider, Typography, AppBar, Toolbar, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grades } from "../Grades";
import { Categories } from "../Categories";
import { Crafts } from "../Crafts";
import { Skills } from "../Skills";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#323232",
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [queryFilter, setQueryFilter] = useState({});

  function handleFilterChange(value) {
    setQueryFilter(oldDetails => {
      return { ...oldDetails, ...value };
     });
  }

  return(
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" >
        <Toolbar>
          <Typography variant="h6" noWrap>
            LOOFAH
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div>
            <Grades handleFilterChange={handleFilterChange} />
            <Divider />
            <Categories handleFilterChange={handleFilterChange} />
            <Divider />
            <Crafts handleFilterChange={handleFilterChange} />
          </div>
        </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography variant="h1" className={classes.heading}>
            Skills
          </Typography>
        <Skills queryDetails={ { variables: { filter: queryFilter } } } />
      </main>
    </div>
  );
};

export default Home;