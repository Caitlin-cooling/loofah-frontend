import React from "react";
import {
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem
} from "@material-ui/core";
import { craftResources } from "../../data/crafts";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "42%",
    margin: "auto",
    padding: theme.spacing(3)
  },
  toolbar: {
    padding: "0 0 1.5em"
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  craftDetails: {
    padding: 0
  },
  craftChannel: {
    fontStyle: "italic"
  },
  craftLink: {
    textDecoration: "underline"
  }
}));

const Crafts = () => {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar}/>
        <Typography variant="h1">
          Crafts Resources
        </Typography>
        <List>
          {
            craftResources.map((craft) => <ListItem key={craft.title}>
              <div className={classes.detailsContainer}>
                <Typography variant="h3">
                  {craft.title}
                </Typography>
                <Typography className={`${classes.craftDetails} ${classes.craftChannel}`}>
                  {craft.channel}
                </Typography>
                <Typography className={classes.craftDetails}>
                  {craft.leads}
                </Typography>
                <a
                  href={craft.link}
                  target="blank"
                  className={`${classes.craftDetails} ${classes.craftLink}`}
                >
                  {craft.linkText}
                </a>
              </div>
            </ListItem>)
          }
        </List>
      </main>
    </div>
  );
};

export default Crafts;