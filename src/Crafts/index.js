import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CRAFTS_QUERY } from './queries';
import startCase from 'lodash/startCase';
import { FormGroup, FormControl, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formGroup: {
    paddingLeft: theme.spacing(2)
  },
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
}));

export const Crafts = () => {
  const classes = useStyles();
  const [craftIds, setCraftIds] = useState([]);
  const { loading, error, data } = useQuery(GET_CRAFTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  function handleCraftsSelection(e) {
    e.persist();
    const value = e.currentTarget.getAttribute('value');
    if (craftIds.includes(value)) {
      setCraftIds(craftIds.filter(id => id !== value));
    } else {
      setCraftIds(oldArray => [...oldArray, value]);
    }
  }

  return(
    <FormControl component="fieldset">
      <Typography variant="h6" className={classes.heading}>
        <legend>Crafts</legend>
      </Typography>
        <FormGroup className={classes.formGroup}>
          {data.crafts.map((craft) => (
            <FormControlLabel
              key={craft.id}
              control={<Checkbox
                checked={craftIds.includes(craft.id)}
                onChange={handleCraftsSelection}
                name={craft.title}
                value={craft.id}
              />}
              label={startCase(craft.title)}
            />
          ))}
      </FormGroup>
  </FormControl>
  );
};
