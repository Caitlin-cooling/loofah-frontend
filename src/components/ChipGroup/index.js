import React, { useState } from "react";
import PropTypes from "prop-types";
import startCase from "lodash/startCase";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import camelCase from "lodash/camelCase";

const useStyles = makeStyles((theme) => ({
  chipGroup: {
    paddingTop: theme.spacing(2)
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  selected: {
    border: `3px solid ${theme.palette.primary.main}`
  }
}));

export const ChipGroup = ({ handleFilterChange, chipItems, keyName }) => {
  const classes = useStyles();
  const [selectedTitles, setSelectedTitles] = useState([]);

  function handleSelection(e) {
    e.persist();
    const value = camelCase(e.target.innerHTML);

    let titles = [];
    if (selectedTitles.includes(value)) {
      titles = selectedTitles.filter(title => title !== value);
    } else {
      titles = [...selectedTitles, value];
    }
    setSelectedTitles(titles);
    titles.length ? handleFilterChange({ [keyName]: titles }) : handleFilterChange({ [keyName]: null });
  }

  return(
    <div className={classes.chipGroup}>
      {chipItems.map((item) => (
        <Chip
          className={`${classes.chip} ${selectedTitles.includes(item.title) ? classes.selected: ""}`}
          key={item.id}
          onClick={handleSelection}
          label={startCase(item.title)}
          variant="outlined"
        />
      ))}
  </div>
  );
};

ChipGroup.propTypes = {
  handleFilterChange: PropTypes.func,
  chipItems: PropTypes.array,
  keyName: PropTypes.string
};
