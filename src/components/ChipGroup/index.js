import React, { useState } from "react";
import PropTypes from "prop-types";
import startCase from "lodash/startCase";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipGroup: {
    paddingTop: theme.spacing(2)
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    lineHeight: "1.3em",
    fontSize: theme.spacing(2)
  },
  selected: {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: "rgba(0, 0, 0, 0.04)"
  },
  green: {
    backgroundColor: "#f3fde5"
  }
}));

export const ChipGroup = ({ handleFilterChange, chipItems, keyName, backgroundColor, variant }) => {
  const classes = useStyles();
  const [selectedTitles, setSelectedTitles] = useState([]);

  function handleSelection(value) {
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
          className={`
            ${classes.chip}
            ${selectedTitles.includes(item.title) ? classes.selected: ""}
            ${classes[backgroundColor]}
          `}
          key={item.id}
          onClick={handleFilterChange ? () => handleSelection(item.title) : undefined}
          label={startCase(item.title)}
          variant={variant}
        />
      ))}
  </div>
  );
};

ChipGroup.propTypes = {
  handleFilterChange: PropTypes.func,
  chipItems: PropTypes.array,
  keyName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  variant: PropTypes.string
};
