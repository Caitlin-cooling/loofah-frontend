import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_GRADES_QUERY } from './queries';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import startCase from 'lodash/startCase';
import { makeStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  selected: {
    color: teal[500],
    fontWeight: 'bold'
  }
}));

export const Grades = ({ handleFilterChange }) => {
  const classes = useStyles();
  const [gradeTitle, setGradeIdTitle] = useState(null);
  const { loading, error, data } = useQuery(GET_GRADES_QUERY);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  function handleGradeSelection(e) {
    const value = e.currentTarget.getAttribute('value');
    setGradeIdTitle(value);
    handleFilterChange({ gradeTitle: value });
  }

  return(
    <div>
      <Typography variant="h6" className={classes.heading}>
        Grade
      </Typography>
      <List>
        {data.grades.map((grade) => (
          <ListItem button key={grade.id} onClick={handleGradeSelection} value={grade.title}>
            <ListItemText
              primary={startCase(grade.title)}
              classes={{ primary: gradeTitle === grade.title ? classes.selected : '' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

Grades.propTypes = {
  handleFilterChange: PropTypes.func
};
