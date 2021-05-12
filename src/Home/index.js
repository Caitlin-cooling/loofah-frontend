import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import {
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Categories } from "../Categories";
import { SidePanel } from "../SidePanel";
import { GET_CATEGORIES_QUERY } from "../Categories/queries";
import { Skills } from "../Skills";


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
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesResponse
  } = useQuery(GET_CATEGORIES_QUERY);

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  if (categoriesLoading)
    return <p>Loading...</p>;
  if (categoriesError) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.loofah}>
            LOOFAH
          </Typography>
        </Toolbar>
      </AppBar>
      <SidePanel handleFilterChange={handleFilterChange} />
      <main className={classes.content}>
        <Toolbar />
        <Categories
          handleFilterChange={handleFilterChange}
          categoryList={categoriesResponse.categories}
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
