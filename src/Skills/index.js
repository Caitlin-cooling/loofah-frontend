import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { GET_SKILLS_QUERY } from "./queries";
import { groupSkillsByTitle } from "../utils/formatters";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import startCase from "lodash/startCase";
import isEmpty from "lodash/isEmpty";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4)
  },
  topicContainer: {
    marginBottom: theme.spacing(4)
  }
}));

export const Skills = ({ queryDetails }) => {
  const classes = useStyles();
  const { loading, error, data, refetch } = useQuery(GET_SKILLS_QUERY, {
    variables: queryDetails.variables
  });

  useEffect(() => {
    refetch();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const groupedSkills = groupSkillsByTitle(data["skills"]);

  const skills = <div className={classes.container}>
  {Object.keys(groupedSkills).map((title, index) => {
    return <div key={index} className={classes.topicContainer}>
      <Typography
      component="h5"
      variant="h5"
    >
      {startCase(title)}
      </Typography>
    <List>
      {groupedSkills[title].map((skill) => {
        return <ListItem key={skill.id}>
          <ListItemText primary={skill.description} />
        </ListItem>;
      })}
    </List>
    </div>;
  })}
</div>;

  const noResults = <Typography component="p" variant="body-2" className={classes.container}>
      No results found. Try changing your filters.
    </Typography>;

  return(isEmpty(groupedSkills) ? noResults : skills);
};

Skills.propTypes = {
  queryDetails: PropTypes.object
};