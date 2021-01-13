import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import startCase from "lodash/startCase";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontFamily: "ChronicleDisp-Roman",
    fontWeight: "bold"
  },
  selected: {
    color: purple[500],
    fontWeight: "bold"
  }
}));

export const Categories = ({ handleFilterChange, categoryList }) => {
  const classes = useStyles();
  const [categoryTitle, setCategoryTitle] = useState(null);

  function handleCategorySelection(e) {
    const value = e.currentTarget.getAttribute("value");
    setCategoryTitle(value);
    handleFilterChange({ categoryTitle: value });
  }

  return(
    <div>
      <Typography variant="h4" className={classes.heading}>
        Categories
      </Typography>
      <List>
        <ListItem button onClick={handleCategorySelection} value={null}>
          <ListItemText
            primary="All"
            classes={{ primary: categoryTitle === null ? classes.selected : "" }}
          />
        </ListItem>
        {categoryList.map((category) => (
          <ListItem button key={category.id} onClick={handleCategorySelection} value={category.title}>
            <ListItemText
              primary={startCase(category.title)}
              classes={{ primary: categoryTitle === category.title ? classes.selected : "" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

Categories.propTypes = {
  handleFilterChange: PropTypes.func,
  categoryList: PropTypes.array
};
