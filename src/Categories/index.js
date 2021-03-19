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
    fontSize: "1.5rem",
  },
  selected: {
    borderBottom: `${cyan[300]} 4px solid`,
  },
}));

export const Categories = ({ handleFilterChange, categoryList }) => {
  const classes = useStyles();
  const [categoryIndex, setCategoryIndex] = useState(0);

  function handleCategorySelection(e, value) {
    setCategoryIndex(value);
    handleFilterChange({ categoryTitle: categoryList[value].title });
  }

  return (
    <div>
      <Tabs
        value={categoryIndex}
        onChange={handleCategorySelection}
        textColor="primary"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {categoryList.map((category, index) => (
          <Tab
            key={category.id}
            label={
              <span
                className={`${classes.tabText} ${
                  index === categoryIndex ? classes.selected : ""
                }`}
              >
                {category.title}
              </span>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

Categories.propTypes = {
  handleFilterChange: PropTypes.func,
  categoryList: PropTypes.array,
};
