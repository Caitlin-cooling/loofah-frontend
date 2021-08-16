import React from "react";
import PropTypes from "prop-types";
import { gradeDescriptions } from "../../data";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import kebabCase from "lodash/kebabCase";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    paddingBottom: theme.spacing(2)
  },
  seeMore: {
    display: "inline-block",
    marginBottom: theme.spacing(2),
    textDecoration: "underline"
  }
}));

const GradeDescriptions = ({selectedGrade}) => {
  const classes = useStyles();

  const descriptionParagraphs = gradeDescriptions[selectedGrade];

  function getSeeMoreLink(gradeTitle) {
    const gradesWithMore = ["technicalLead", "seniorTechnicalLead", "technicalDirector", "partner"];
    return gradesWithMore.includes(gradeTitle) ? `/pathway#${kebabCase(gradeTitle)}` : null;
  }

  return (
    <div>
      {
        descriptionParagraphs.map((paragraph, index) => {
          return <div key={index}>
            <Typography variant="body1" className={classes.paragraph}>
              {paragraph}
              {getSeeMoreLink(selectedGrade) && index === descriptionParagraphs.length -1
                ? (<span>... <Link to={getSeeMoreLink(selectedGrade)} className={classes.seeMore}>
                    Read more
                  </Link></span>)
                : null
              }
            </Typography>
          </div>;
        })
      }
    </div>
  );
};

GradeDescriptions.propTypes = {
  selectedGrade: PropTypes.string.isRequired
};

export default GradeDescriptions;
