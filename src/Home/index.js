import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import {
  Drawer,
  Divider,
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GET_GRADES_QUERY, GET_CRAFTS_QUERY } from "../queries/index";
import { TabGroup } from "../TabGroup";
import { Crafts } from "../Crafts";
import { Skills } from "../Skills";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  loofah: {
    fontWeight: "bold"
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
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  heading: {
    fontFamily: "ChronicleDisp-Roman",
    fontSize: "4rem"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [queryFilter, setQueryFilter] = useState();

  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesResponse
  } = useQuery(GET_GRADES_QUERY);

  const {
    loading: craftsLoading,
    error: craftsError,
    data: craftsResponse
  } = useQuery(GET_CRAFTS_QUERY);

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  if (gradesLoading || craftsLoading)
    return <p>Loading...</p>;
  if (gradesError || craftsError) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.loofah}>
            LOOFAH
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div>
          <Divider />
          <Crafts
            handleFilterChange={handleFilterChange}
            craftList={craftsResponse.crafts}
          />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <TabGroup
          handleFilterChange={handleFilterChange}
          listItems={gradesResponse.grades}
          keyName="gradeTitles"
        />
        <Typography variant="h1" className={classes.heading}>
          Engineering pathways
        </Typography>
        <Skills queryDetails={{ variables: { filter: queryFilter } }} />
      </main>
    </div>
  );
};

export default Home;
