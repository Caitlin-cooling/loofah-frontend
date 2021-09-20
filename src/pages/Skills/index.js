import React, { useState } from "react";
import {
  Typography,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  grades,
  DEFAULT_GRADE,
  crafts
} from "../../data";
import { TabGroup } from "../../components/TabGroup";
import { ChipGroup } from "../../components/ChipGroup";
import GradeDescriptions from "./GradeDescriptions";
import LoofahLink from "../../components/LoofahLink";
import { SkillsList } from "./SkillsList";
import { camelCase, kebabCase } from "lodash";

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
  const classes = useStyles();
  const gradesList = Object.keys(grades).map((grade) => grades[grade]);
  const craftsList = Object.keys(crafts).map((craft) => crafts[craft]);

  const url = new URL(window.location);
  const { searchParams } = url;
  const defaultGrade = searchParams.get("grade")
    ? camelCase(searchParams.get("grade"))
    : DEFAULT_GRADE;
  const preSelectedCraftTitles =
    searchParams.getAll("crafts").map((craft) => camelCase(craft));
  const craftTitles = preSelectedCraftTitles.length ? preSelectedCraftTitles : null;

  const [queryFilter, setQueryFilter] = useState({
    gradeTitles: [defaultGrade],
    ...(craftTitles && { craftTitles })
  });

  const selectedGradeTitle = queryFilter.gradeTitles[0];

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  function handleGradeChange(value) {
    handleFilterChange(value);
    searchParams.set("grade", kebabCase(value.gradeTitles[0]));
    window.history.pushState({}, "", url);
  }

  function handleCraftChange(value) {
    handleFilterChange(value);
    searchParams.delete("crafts");
    if (value.craftTitles) value.craftTitles.forEach((title) => {
      searchParams.append("crafts", kebabCase(title));
    });
    window.history.pushState({}, "", url);
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <Typography variant="h1">Engineering Learning Framework</Typography>
        <TabGroup
          handleFilterChange={handleGradeChange}
          listItems={gradesList}
          keyName="gradeTitles"
          selectedGradeTitle={selectedGradeTitle}
        />
        <GradeDescriptions selectedGrade={selectedGradeTitle} />
        <div className={classes.skillsAndFilters}>
          <div className={classes.filters}>
            <Typography variant="body1" className={classes.craftFilter}>
              <span>By </span>
              <LoofahLink to="/crafts">Craft:</LoofahLink>
            </Typography>
            <ChipGroup
              handleFilterChange={handleCraftChange}
              chipItems={craftsList}
              keyName="craftTitles"
              variant="outlined"
              id="craft-filter"
              preSelectedTitles={preSelectedCraftTitles}
            />
          </div>
          <SkillsList queryDetails={{ variables: { filter: queryFilter } }} />
        </div>
      </main>
    </div>
  );
};

export default Skills;
