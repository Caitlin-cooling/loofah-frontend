import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "inline-block",
    marginBottom: theme.spacing(2),
    background:
      `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.main} 100%,transparent 100%,transparent)`,
    backgroundSize: "100% 40%",
    backgroundPosition: "center 100%",
    backgroundRepeat: "no-repeat",
    transition: "all 500ms ease",
    "&:hover": {
      backgroundSize: "100% 100%"
    }
  }
}));

const LoofahLink = ({children, to}) => {
  const classes = useStyles();

  return(
    <Link className={classes.link} to={to}>
      {children}
    </Link>
  );
};

export default LoofahLink;

LoofahLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};
