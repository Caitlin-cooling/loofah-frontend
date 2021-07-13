import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    maxWidth: "60%",
    margin: "auto",
    padding: theme.spacing(3)
  }
}));

export const MainWrapper = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node
};
