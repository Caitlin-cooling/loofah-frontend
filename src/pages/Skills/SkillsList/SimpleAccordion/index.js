import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ChipGroup } from "../../../../components/ChipGroup";
import { startCase, range } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  accordion: {
    boxShadow: "none",
    border: `${grey[300]} solid 1px`,
    borderRadius: "4px",
    marginBottom: theme.spacing(3)
  },
  summary: {
    borderBottom: `${grey[300]} solid 3px`
  },
  skills: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: "100%"
  },
  details: {
    paddingLeft: 0,
    width: "100%"
  },
  list: {
    width: "100%",
    padding: `0 ${theme.spacing(4)}px`
  },
  skill: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: theme.spacing(4)
  },
  headline: {
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  description: {
    padding: `${theme.spacing(2)}px 0 0 0`,
    fontStyle: "italic"
  },
  examples: {
    paddingTop: theme.spacing(1)
  },
  example: {
    listStyleType: "disc",
    display: "list-item",
    padding: `${theme.spacing(1)}px 0 0 0`,
    marginLeft: theme.spacing(2)
  },
  craftChips: {
    padding: theme.spacing(3)
  },
  expandAllSwitch: {
    position: "absolute",
    top: theme.spacing(3),
    right: 0
  }
}));

export default function SimpleAccordion({ skills }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    expanded: []
  });

  const handleExpandAll = (event) => {
    if (event.target.checked) {
      setState({ ...state, expanded: range(Object.keys(skills).length) });
    } else {
      setState({ ...state, expanded: [] });
    }
  };

  const handleExpandSingle = (index) => () => {
    if (state.expanded.includes(index)) {
      const newArray = state.expanded.filter((element) => element !== index);
      setState({ ...state, expanded: newArray });
    } else {
      setState({ ...state, expanded: [...state.expanded, index] });
    }
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.expandAllSwitch}>
        <FormGroup aria-label="expand all" row>
          <FormControlLabel
            value="top"
            control={
              <Switch
                color="primary"
                checked={state.showAll}
                onChange={handleExpandAll}
                name="showAll"
              />
            }
            label="Expand all"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
      {Object.keys(skills).map((category, index) => {
        return (
          <Accordion
            className={classes.accordion}
            key={index}
            expanded={state.expanded.includes(index)}
            onChange={handleExpandSingle(index)}
          >
            <AccordionSummary
              className={classes.summary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`accordion${index}-content`}
              id={`accordion${index}-header`}
            >
              <Typography variant="h5" component="h2">
                {startCase(category)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <List component="nav" className={classes.list}>
                {skills[category].map((skill) => {
                  return (
                    <ListItem key={skill.id} className={classes.skill}>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography
                              component="h3"
                              className={classes.headline}
                            >
                              {skill.headline}
                            </Typography>
                            {skill.description ? (
                              <Typography
                                variant="body2"
                                className={classes.description}
                              >
                                {skill.description}
                              </Typography>
                            ) : null}
                          </React.Fragment>
                        }
                      />
                      <List className={classes.examples}>
                        {skill.examples ? skill.examples.map((example, index) => {
                          return (
                              <ListItem key={index} className={classes.example}>
                                  {example}
                              </ListItem>
                          );
                        }) : null}
                      </List>
                      <ChipGroup
                        chipItems={skill.crafts}
                        keyName="craftTitles"
                        backgroundColor="green"
                        outlined={false}
                        className={classes.craftChips}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

SimpleAccordion.propTypes = {
  skills: PropTypes.object.isRequired
};
