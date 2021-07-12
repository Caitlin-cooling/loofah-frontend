import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  Typography,
  Toolbar
} from "@material-ui/core";
import kebabCase from "lodash/kebabCase";
import { HashLink as Link } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import { GET_GRADES_QUERY, GET_CRAFTS_QUERY } from "../../queries";
import { DEFAULT_GRADE } from "../../data";
import { TabGroup } from "../../components/TabGroup";
import { ChipGroup } from "../../components/ChipGroup";
import { SkillsList } from "./SkillsList";
import { orderCraftTitles } from "../../utils/formatters";

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
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.56",
    paddingBottom: theme.spacing(2)
  },
  seeMore: {
    color: "#0E5B7C",
    textDecoration: "underline"
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
  const defaultGrade = location.state ? location.state.grade : DEFAULT_GRADE;
  const classes = useStyles();
  const [queryFilter, setQueryFilter] = useState({
    gradeTitles: [DEFAULT_GRADE]
  });

  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesResponse
  } = useQuery(GET_GRADES_QUERY);

  const {
    loading: craftsLoading,
    error: craftsError,
    data: craftsResponse
  } = useQuery(GET_CRAFTS_QUERY);

  const selectedGradeTitle = queryFilter.gradeTitles[0];

  function getSelectedGradeByTitle(title) {
    return gradesResponse.grades.find((grade) => grade.title === title) || {};
  }

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  function getSeeMoreLink(gradeTitle) {
    return `/pathway#${kebabCase(gradeTitle)}`;
  }

  if (gradesLoading || craftsLoading)
    return <p>Loading...</p>;
  if (gradesError || craftsError) return <p>Error</p>;

  const orderedCraftTitles = orderCraftTitles(craftsResponse.crafts);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <Typography variant="h1">Engineering Skills</Typography>
          <TabGroup
            handleFilterChange={handleFilterChange}
            listItems={gradesResponse.grades}
            keyName="gradeTitles"
            selectedGradeTitle={selectedGradeTitle}
          />
          <Typography variant="body2" className={classes.paragraph}>
            { getSelectedGradeByTitle(selectedGradeTitle).description }
          </Typography>
          <Link to={getSeeMoreLink(selectedGradeTitle)} className={classes.seeMore}>
            See more
          </Link>
          <div className={classes.skillsAndFilters}>
            <div className={classes.filters}>
              <Typography variant="body1" className={classes.craftFilter}>
                <span>By </span>
                <Link to="/crafts">Craft:</Link>
              </Typography>
              <ChipGroup
                handleFilterChange={handleFilterChange}
                chipItems={orderedCraftTitles}
                keyName="craftTitles"
                variant="outlined"
              />
          </div>
          <SkillsList queryDetails={{ variables: { filter: queryFilter } }} />
        </div>
      </main>
    </div>
  );
};

export default Skills;
