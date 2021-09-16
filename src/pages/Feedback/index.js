import React from "react";
import {
  makeStyles,
  Toolbar
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
      maxWidth: "42%",
      margin: "auto",
      padding: theme.spacing(3)
  },
  toolbar: {
      padding: "0 0 1.5em"
  },
  form: {
    paddingTop: theme.spacing(9)
  }
}));

const Feedback = () => {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar}/>
        <iframe
          className={classes.form}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdq1uNeEHVDTTJtwuByDzo-sRSsg9cVykNhYBfO4sajiFXuAw/viewform?embedded=true"
          width="640"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </main>
    </div>
  );
};

export default Feedback;