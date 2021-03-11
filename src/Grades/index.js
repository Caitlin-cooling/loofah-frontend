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

export const Grades = ({ handleFilterChange, gradeList }) => {
  const classes = useStyles();
  const [gradeTitles, setGradeIdTitles] = useState([]);

  function handleGradeSelection(e) {
    e.persist();
    const value = e.currentTarget.getAttribute("value");

    let titles = [];
    if (gradeTitles.includes(value)) {
      titles = gradeTitles.filter(title => title !== value);
    } else {
      titles = [...gradeTitles, value];
    }
    setGradeIdTitles(titles);
    titles.length ? handleFilterChange({ gradeTitles: titles }) : handleFilterChange({ gradeTitles: null });
  }

  return(
    <FormControl component="fieldset" className={classes.fieldset}>
      <Typography variant="h4" className={classes.heading}>
        <legend>Grade</legend>
      </Typography>
        <FormGroup className={classes.formGroup}>
          {gradeList.map((grade) => (
            <FormControlLabel
              key={grade.id}
              control={<Checkbox
                classes={{
                  root: classes.root,
                  checked: classes.checked
                }}
                checked={gradeTitles.includes(grade.title)}
                onChange={handleGradeSelection}
                name={grade.title}
                value={grade.title}
              />}
              label={startCase(grade.title)}
            />
          ))}
      </FormGroup>
    </FormControl>
  );
};

Grades.propTypes = {
  handleFilterChange: PropTypes.func,
  gradeList: PropTypes.array
};
