import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import {
  Typography,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GET_GRADES_QUERY, GET_CRAFTS_QUERY } from "../../queries";
import { DEFAULT_GRADE } from "../../data";
import { TabGroup } from "../../components/TabGroup";
import { ChipGroup } from "../../components/ChipGroup";
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
    maxWidth: "70%",
    margin: "auto",
    padding: theme.spacing(3)
  },
  heading: {
    fontFamily: "ChronicleDisp-Roman",
    fontSize: "4rem",
    paddingTop: theme.spacing(3)
  }
}));

const Skills = () => {
  const classes = useStyles();
  const [queryFilter, setQueryFilter] = useState({gradeTitles: [DEFAULT_GRADE]});

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
    return gradesResponse.grades.find((grade) => grade.title === title);
  }

  function handleFilterChange(value) {
    setQueryFilter((oldDetails) => {
      return { ...oldDetails, ...value };
    });
  }

  if (gradesLoading || craftsLoading)
    return <p>Loading...</p>;
  if (gradesError || craftsError) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
          <Typography variant="h1" className={classes.heading}>
            Engineering pathways
          </Typography>
          <TabGroup
            handleFilterChange={handleFilterChange}
            listItems={gradesResponse.grades}
            keyName="gradeTitles"
          />
          <Typography variant="body1">
            { getSelectedGradeByTitle(selectedGradeTitle).description }
          </Typography>
          <ChipGroup
            handleFilterChange={handleFilterChange}
            chipItems={craftsResponse.crafts}
            keyName="craftTitles"
          />
          <SkillsList queryDetails={{ variables: { filter: queryFilter } }} />
      </main>
    </div>
  );
};

export default Skills;
