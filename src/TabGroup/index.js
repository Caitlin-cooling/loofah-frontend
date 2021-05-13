import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import cyan from "@material-ui/core/colors/cyan";

const useStyles = makeStyles((theme) => ({
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

export const TabGroup = ({ handleFilterChange, tabList, keyName }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelection(e, value) {
    setSelectedIndex(value);
    handleFilterChange({ [keyName]: tabList[value].title });
  }

  return (
    <div>
      <Tabs
        value={selectedIndex}
        onChange={handleSelection}
        textColor="primary"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {tabList.map((item, index) => (
          <Tab
            key={item.id}
            label={
              <span
                className={`${classes.tabText} ${
                  selectedIndex === index ? classes.selected : ""
                }`}
              >
                {item.title}
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
  tabList: PropTypes.array,
  keyName: PropTypes.string
};
