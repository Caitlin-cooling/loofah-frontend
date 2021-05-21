import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import startCase from "lodash/startCase";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3)
  },
  tabText: {
    color: grey[900],
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    fontSize: "1.5rem"
  },
  selected: {
    background: `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.main} 100%,transparent 100%,transparent)`,
    backgroundSize: "100% 40%",
    backgroundPosition: "center 100%",
    backgroundRepeat: "no-repeat",
    lineHeight: "1em"
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
        textColor="secondary"
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
