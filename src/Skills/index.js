import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { GET_SKILLS_QUERY } from './queries';
import { List, ListItem, ListItemText, Typography, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { teal, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  gradeChip: {
    color: 'white',
    backgroundColor: teal[500],
    margin: theme.spacing(0.5)
  },
  categoryChip: {
    color: 'white',
    backgroundColor: purple[500],
    margin: theme.spacing(0.5)
  }
}));

export const Skills = ({ queryDetails }) => {
  const classes = useStyles();
  const { loading, error, data, refetch } = useQuery(GET_SKILLS_QUERY, {
    variables: queryDetails.variables
  });

  useEffect(() => {
    refetch();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return(
    <List>
      {data['skills'].map((skill) => {
        return <ListItem key={skill.id}  className={classes.listItem}>
          <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="p"
                variant="overline"
                color="textSecondary"
              >
                {skill.title}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                color="textPrimary"
              >
                {skill.description}
              </Typography>
            </React.Fragment>
          }
        />
        <div>
          <Chip label={skill.grade.title} className={classes.gradeChip} />
          <Chip label={skill.category.title} className={classes.categoryChip} />
        </div>
        </ListItem>;
      })}
    </List>
  );
};

Skills.propTypes = {
  queryDetails: PropTypes.object
};