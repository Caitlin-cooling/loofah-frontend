import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    margin: "auto",
    padding: theme.spacing(3),
    maxWidth: "40%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "50%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%"
    }
  },
  extraWide: {
    margin: "auto",
    padding: theme.spacing(3),
    maxWidth: "50%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "67%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%"
    }
  }
}));

export const MainWrapper = ({ children, styleType = "content" }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes[styleType]}>{children}</main>
    </div>
  );
};

MainWrapper.propTypes = {
  styleType: PropTypes.string,
  children: PropTypes.node
};
