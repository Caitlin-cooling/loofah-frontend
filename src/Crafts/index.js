import React, { useState } from "react";
import PropTypes from "prop-types";
import startCase from "lodash/startCase";
import { FormGroup, FormControl, FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formGroup: {
    paddingLeft: theme.spacing(2)
  },
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontFamily: "ChronicleDisp-Roman",
    fontWeight: "bold"
  }
}));

export const Crafts = ({ handleFilterChange, craftList }) => {
  const classes = useStyles();
  const [craftTitles, setCraftTitles] = useState([]);

  function handleCraftsSelection(e) {
    e.persist();
    const value = e.currentTarget.getAttribute("value");

    let titles = [];
    if (craftTitles.includes(value)) {
      titles = craftTitles.filter(title => title !== value);
    } else {
      titles = [...craftTitles, value];
    }
    setCraftTitles(titles);
    titles.length ? handleFilterChange({ craftTitles: titles }) : handleFilterChange({ craftTitles: null });
  }

  return(
    <FormControl component="fieldset">
      <Typography variant="h4" className={classes.heading}>
        <legend>Crafts</legend>
      </Typography>
        <FormGroup className={classes.formGroup}>
          {craftList.map((craft) => (
            <FormControlLabel
              key={craft.id}
              control={<Checkbox
                checked={craftTitles.includes(craft.title)}
                onChange={handleCraftsSelection}
                name={craft.title}
                value={craft.title}
              />}
              label={startCase(craft.title)}
            />
          ))}
      </FormGroup>
  </FormControl>
  );
};

Crafts.propTypes = {
  handleFilterChange: PropTypes.func,
  craftList: PropTypes.array
};
