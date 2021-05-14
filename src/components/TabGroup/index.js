import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import cyan from "@material-ui/core/colors/cyan";
import startCase from "lodash/startCase";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2)
  },
  tabText: {
    color: grey[900],
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    fontSize: "1.5rem"
  },
  selected: {
    borderBottom: `${cyan[300]} 4px solid`
  }
}));

export const TabGroup = ({ handleFilterChange, listItems, keyName }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelection(e, value) {
    setSelectedIndex(value);
    handleFilterChange({ [keyName]: [listItems[value].title] });
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={selectedIndex}
        onChange={handleSelection}
        textColor="primary"
        TabIndicatorProps={{ style: { display: "none" } }}
        centered
        variant="fullWidth"
      >
        {listItems.map((item, index) => (
          <Tab
            key={item.id}
            label={
              <span
                className={`${classes.tabText} ${
                  index === selectedIndex ? classes.selected : ""
                }`}
              >
                {startCase(item.title)}
              </span>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

TabGroup.propTypes = {
  handleFilterChange: PropTypes.func,
  listItems: PropTypes.array,
  keyName: PropTypes.string.isRequired
};
