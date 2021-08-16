import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Toolbar
} from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import {
  grades,
  DEFAULT_GRADE,
  crafts
} from "../../data";
import { TabGroup } from "../../components/TabGroup";
import { ChipGroup } from "../../components/ChipGroup";
import GradeDescriptions from "./GradeDescriptions";
import { SkillsList } from "./SkillsList";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    padding: "0 0 1.5em"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    maxWidth: "60%",
    margin: "auto",
    padding: theme.spacing(3)
  },
  heading: {
    padding: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px 0`
  },
  skillsAndFilters: {
    position: "relative",
    paddingTop: theme.spacing(15)
  },
  filters: {
    display: "flex",
    position: "absolute",
    top: theme.spacing(3)
  },
  craftFilter: {
    fontWeight: "bold",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    width: "100px"
  }
}));

const Skills = () => {
  const location = useLocation();
  const classes = useStyles();

  const defaultGrade = location.state ? location.state.grade : DEFAULT_GRADE;
  const [queryFilter, setQueryFilter] = useState({
    gradeTitles: [defaultGrade]
  });

  const selectedGradeTitle = queryFilter.gradeTitles[0];
  const gradesList = Object.keys(grades).map((grade) => grades[grade]);
  const craftsList = Object.keys(crafts).map((craft) => crafts[craft]);

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <Typography variant="h1">Engineering Skills</Typography>
        <TabGroup
          handleFilterChange={handleFilterChange}
          listItems={gradesList}
          keyName="gradeTitles"
          selectedGradeTitle={selectedGradeTitle}
        />
        <GradeDescriptions selectedGrade={selectedGradeTitle} />
        <div className={classes.skillsAndFilters}>
          <div className={classes.filters}>
            <Typography variant="body1" className={classes.craftFilter}>
              <span>By </span>
              <Link to="/crafts">Craft:</Link>
            </Typography>
            <ChipGroup
              handleFilterChange={handleFilterChange}
              chipItems={craftsList}
              keyName="craftTitles"
              variant="outlined"
              id="craft-filter"
            />
          </div>
          <SkillsList queryDetails={{ variables: { filter: queryFilter } }} />
        </div>
      </main>
    </div>
  );
};

export default Skills;
