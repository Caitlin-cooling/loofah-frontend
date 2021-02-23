import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import startCase from "lodash/startCase";
import { makeStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import { DEFAULT_GRADE } from "./data";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontFamily: "ChronicleDisp-Roman",
    fontWeight: "bold"
  },
  selected: {
    color: teal[500],
    fontWeight: "bold"
  }
}));

export const Grades = ({ handleFilterChange, gradeList }) => {
  const classes = useStyles();
  const [gradeTitles, setGradeIdTitle] = useState(DEFAULT_GRADE);

  function handleGradeSelection(e) {
    const value = e.currentTarget.getAttribute("value");
    setGradeIdTitle(value);
    handleFilterChange({ gradeTitles: value });
  }

  return(
    <div>
      <Typography variant="h4" className={classes.heading}>
        Grade
      </Typography>
      <List>
        {gradeList.map((grade) => (
          <ListItem button key={grade.id} onClick={handleGradeSelection} value={grade.title}>
            <ListItemText
              primary={startCase(grade.title)}
              classes={{ primary: gradeTitles === grade.title ? classes.selected : "" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

Grades.propTypes = {
  handleFilterChange: PropTypes.func,
  gradeList: PropTypes.array
};
