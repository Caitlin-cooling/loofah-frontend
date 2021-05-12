import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import startCase from "lodash/startCase";
import { makeStyles } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$checked": {
      color: cyan[300]
    }
  },
  checked: {},
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontFamily: "ChronicleDisp-Roman",
    fontWeight: "bold"
  },
  formGroup: {
    paddingLeft: theme.spacing(2)
  },
  fieldset: {
    paddingBottom: theme.spacing(2)
  }
}));

export const CheckboxGroup = ({ groupTitle, handleFilterChange, listItems, keyName }) => {
  const classes = useStyles();
  const [titles, setTitles] = useState([]);

  function handleSelection(e) {
    e.persist();
    const value = e.currentTarget.getAttribute("value");

    let selectedTitles = [];
    if (titles.includes(value)) {
      selectedTitles = titles.filter(title => title !== value);
    } else {
      selectedTitles = [...titles, value];
    }
    setTitles(selectedTitles);
    selectedTitles.length
      ? handleFilterChange({ [keyName]: selectedTitles })
      : handleFilterChange({ [keyName]: null });
  }

  return(
    <FormControl component="fieldset" className={classes.fieldset}>
      <Typography variant="h4" className={classes.heading}>
        <legend>{groupTitle}</legend>
      </Typography>
        <FormGroup className={classes.formGroup}>
          {listItems.map((item) => (
            <FormControlLabel
              key={item.id}
              control={<Checkbox
                classes={{
                  root: classes.root,
                  checked: classes.checked
                }}
                checked={titles.includes(item.title)}
                onChange={handleSelection}
                name={item.title}
                value={item.title}
              />}
              label={startCase(item.title)}
            />
          ))}
      </FormGroup>
    </FormControl>
  );
};

CheckboxGroup.propTypes = {
  groupTitle: PropTypes.string,
  handleFilterChange: PropTypes.func,
  listItems: PropTypes.array,
  keyName: PropTypes.string
};
