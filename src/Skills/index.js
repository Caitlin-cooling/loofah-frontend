import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { GET_SKILLS_QUERY } from "./queries";
import { groupSkillsByTitle } from "../utils/formatters";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { teal, purple } from "@material-ui/core/colors";
import startCase from "lodash/startCase";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  gradeChip: {
    color: "white",
    backgroundColor: teal[500],
    margin: theme.spacing(0.5)
  },
  categoryChip: {
    color: "white",
    backgroundColor: purple[500],
    margin: theme.spacing(0.5)
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

  return(
    <List>
      {Object.keys(groupedSkills).map((title, index) => {
        return <ListItem key={index} className={classes.listItem}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  component="h6"
                  variant="h6"
                  color="textPrimary"
                >
                  {startCase(title)}
                </Typography>
              </React.Fragment>
            }
            secondary={
              groupedSkills[title].map((skill) => {
                return <React.Fragment key={skill.id}>
                <Typography
                  component="p"
                  color="textSecondary"
                >
                  {skill.description}
                </Typography>
              </React.Fragment>;
              })
            }
          />
        </ListItem>;
      })}
    </List>
  );
};

Skills.propTypes = {
  queryDetails: PropTypes.object
};