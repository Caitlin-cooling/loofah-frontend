import React, { useState } from 'react';
import { Drawer, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grades } from '../Grades';
import { Categories } from '../Categories';
import { Crafts } from '../Crafts';
import { Skills } from '../Skills';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'flex',
    position: 'absolute',
    marginTop: theme.spacing(6)
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 300,
      flexShrink: 0
    }
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawerPaper: {
    overflow: 'auto',
    position: 'inherit'
  },
  mainContainer: {
    paddingLeft: theme.spacing(3)
  }
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
    <main className={classes.root}>
      <nav className={classes.drawer} aria-label="filter options">
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <Grades handleFilterChange={handleFilterChange} />
            <Divider />
            <Categories handleFilterChange={handleFilterChange} />
            <Divider />
            <Crafts handleFilterChange={handleFilterChange} />
          </div>
        </Drawer>
      </nav>
      <div className={classes.mainContainer}>
        <Typography variant="h1" className={classes.heading}>
            Skills
          </Typography>
        <Skills queryDetails={ { variables: { filter: queryFilter } } } />
      </div>
    </main>
  );
};

export default Home;