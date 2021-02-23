import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import startCase from "lodash/startCase";

import { Drawer, Divider, Typography, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Grades } from "../Grades";
import { GET_GRADES_QUERY } from "../Grades/queries";
import { DEFAULT_GRADE } from "../Grades/data";
import { Categories } from "../Categories";
import { GET_CATEGORIES_QUERY } from "../Categories/queries";
import { Crafts } from "../Crafts";
import { GET_CRAFTS_QUERY } from "../Crafts/queries";
import { Skills } from "../Skills";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
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
    fontFamily: "ChronicleDisp-Roman"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [queryFilter, setQueryFilter] = useState({gradeTitles: DEFAULT_GRADE});

  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesResponse
  } = useQuery(GET_GRADES_QUERY);

  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesResponse
  } = useQuery(GET_CATEGORIES_QUERY);

  const {
    loading: craftsLoading,
    error: craftsError,
    data: craftsResponse
  } = useQuery(GET_CRAFTS_QUERY);

  const selectedGradeTitle = queryFilter.gradeTitles;

  function getSelectedGradeByTitle(title) {
    return gradesResponse.grades.find((grade) => grade.title === title);
  }

  function handleFilterChange(value) {
    setQueryFilter(oldDetails => {
      return { ...oldDetails, ...value };
     });
  }

  if (gradesLoading || categoriesLoading || craftsLoading) return <p>Loading...</p>;
  if (gradesError || categoriesError || craftsError) return <p>Error</p>;

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
            paper: classes.drawerPaper
          }}
        >
          <Toolbar />
          <div>
            <Grades
              handleFilterChange={handleFilterChange}
              gradeList={gradesResponse.grades}
            />
            <Divider />
            <Categories
              handleFilterChange={handleFilterChange}
              categoryList={categoriesResponse.categories}
            />
            <Divider />
            <Crafts
              handleFilterChange={handleFilterChange}
              craftList={craftsResponse.crafts}
            />
          </div>
        </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography variant="h1" className={classes.heading}>
          { startCase(selectedGradeTitle) }
        </Typography>
        <Typography variant="body2">
          { getSelectedGradeByTitle(selectedGradeTitle).description }
        </Typography>
        <Skills queryDetails={ { variables: { filter: queryFilter } } } />
      </main>
    </div>
  );
};

export default Home;