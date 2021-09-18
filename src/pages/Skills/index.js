import React, { useState } from "react";
import {
  Typography,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  gradeKeys,
  DEFAULT_GRADE,
  craftKeys
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

const getCraftsFromURLSearchParams = (searchParams) => {

  return searchParams.getAll("crafts")
            .map((craft) => camelCase(craft));
};

const Skills = () => {
  const classes = useStyles();
  const gradesList = Object.keys(gradeKeys).map((grade) => gradeKeys[grade]);
  const craftsList = Object.keys(craftKeys).map((craft) => craftKeys[craft]);

  const currentPageUrl = new URL(window.location);
  const { searchParams } = currentPageUrl;
  const defaultGrade = searchParams.get("grade")
    ? camelCase(searchParams.get("grade"))
    : DEFAULT_GRADE;

  const crafts = getCraftsFromURLSearchParams(searchParams);

  const [filterParams, setFilterParams] = useState({
    grade: defaultGrade,
    ...(crafts.length > 1 && { crafts })
  });

  const selectedGradeTitle = filterParams.grade;

  function applyFilterChanges(value) {
    setFilterParams((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  function handleGradeChange(value) {
    applyFilterChanges(value);
    searchParams.set("grade", kebabCase(value.grade));
    window.history.pushState({}, "", currentPageUrl);
  }

  function handleCraftChange(value) {
    applyFilterChanges(value);

    searchParams.delete("crafts");
    if (value.crafts) value.crafts.forEach((craft) => {
      searchParams.append("crafts", kebabCase(craft));
    });
    window.history.pushState({}, "", currentPageUrl);
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <Typography variant="h1">Engineering Skills</Typography>
        <TabGroup
          handleFilterChange={handleGradeChange}
          listItems={gradesList}
          keyName="grade"
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
              keyName="crafts"
              variant="outlined"
              id="craft-filter"
              preSelectedTitles={crafts}
            />
          </div>
          <SkillsList filterParams={filterParams} />
        </div>
      </main>
    </div>
  );
};

export default Skills;
