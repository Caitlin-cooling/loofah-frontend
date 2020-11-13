import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { GET_CATEGORIES_QUERY } from './queries';
import startCase from 'lodash/startCase';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  selected: {
    color: purple[500],
    fontWeight: 'bold'
  }
}));

export const Categories = () => {
  const classes = useStyles();
  const [categoryId, setCategoryId] = useState(null);
  const { loading, error, data } = useQuery(GET_CATEGORIES_QUERY);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  function handleCategorySelection(e) {
    setCategoryId(e.currentTarget.getAttribute('value'));
  }

  return(
    <div>
      <Typography variant="h6" className={classes.heading}>
        Categories
      </Typography>
      <List>
        <ListItem button onClick={handleCategorySelection} value={null}>
          <ListItemText
            primary='All'
            classes={{ primary: categoryId === null ? classes.selected : '' }}
          />
        </ListItem>
        {data.categories.map((category) => (
          <ListItem button key={category.id} onClick={handleCategorySelection} value={category.id}>
            <ListItemText
              primary={startCase(category.title)}
              classes={{ primary: categoryId === category.id ? classes.selected : '' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
