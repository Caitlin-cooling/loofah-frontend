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
import { startCase, range } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  accordion: {
    boxShadow: "none",
    border: `${grey[300]} solid 1px`,
    borderRadius: "4px"
  },
  summary: {
    borderBottom: `${grey[300]} solid 3px`
  },
  grade: {
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    borderBottom: `${grey[300]} solid 1px`
  },
  skills: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: "auto"
  },
  borderBottom: {
    borderBottom: `${grey[300]} solid 1px`
  },
  details: {
    paddingLeft: 0,
    width: "100%"
  },
  list: {
    width: "100%"
  },
  expandAllSwitch: {
    alignItems: "flex-end",
    marginBottom: theme.spacing(1)
  }
}));

export default function SimpleAccordion({ skills }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    expanded: []
  });

  const handleExpandAll = (event) => {
    if (event.target.checked) {
      setState({ ...state, expanded: range(Object.keys(skills).length)});
    } else {
      setState({ ...state, expanded: []});
    }
  };

  const handleExpandSingle = (index) => () => {
    if (state.expanded.includes(index)) {
      const newArray = state.expanded.filter((element) => element !== index);
      setState({ ...state, expanded: newArray});
    } else {
      setState({ ...state, expanded: [...state.expanded, index]});
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
      {Object.keys(skills).map((topic, index) => {
        return <Accordion
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
              <Typography variant="h5" component="h5">
                {startCase(topic)}
              </Typography>
            </AccordionSummary>
          <AccordionDetails className={classes.details}>
              <List className={classes.list}>
                {Object.keys(skills[topic]).map((grade) => {
                    return <div key={grade}>
                      <Typography variant="h6" component="h6" className={classes.grade}>
                        {startCase(grade)}
                      </Typography>
                      {skills[topic][grade].map((skill, index) => {
                        return <ListItem
                          key={skill.id}
                          className={
                            classes.skills
                            + " "
                            + (index + 1 >= skills[topic][grade].length ? "" : classes.borderBottom)
                          }
                        >
                          <ListItemText primary={skill.description} />
                        </ListItem>;
                      })}
                    </div>;
                  })}
              </List>
          </AccordionDetails>
        </Accordion>;
      })}
    </div>
  );
}

SimpleAccordion.propTypes = {
  skills: PropTypes.object.isRequired
};