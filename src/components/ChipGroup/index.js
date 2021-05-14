import React, { useState } from "react";
import PropTypes from "prop-types";
import startCase from "lodash/startCase";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import camelCase from "lodash/camelCase";

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
    <div>
      {chipItems.map((item) => (
        <Chip
          color="primary"
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
