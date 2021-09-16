import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { GET_SKILLS_QUERY } from "../../../queries/skill.queries";
import { groupSkillsByTitleAndGrade } from "../../../utils/formatters";
import SimpleAccordion from "./SimpleAccordion";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import isEmpty from "lodash/isEmpty";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4)
  },
  topicContainer: {
    marginBottom: theme.spacing(4)
  }
}));

export const SkillsList = ({ queryDetails }) => {
  const classes = useStyles();
  const { loading, error, data, refetch } = useQuery(GET_SKILLS_QUERY, {
    variables: queryDetails.variables
  });

  useEffect(() => {
    refetch();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const groupedSkills = groupSkillsByTitleAndGrade(data["skills"]);

  const skills = <SimpleAccordion skills={groupedSkills} />;

  const noResults = <Typography component="p" variant="body2" className={classes.container}>
      No results found. Try changing your filters.
    </Typography>;

  return(isEmpty(groupedSkills) ? noResults : skills);
};

SkillsList.propTypes = {
  queryDetails: PropTypes.object
};