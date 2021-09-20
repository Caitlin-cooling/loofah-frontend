import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { Link } from "react-router-dom";
import GrowthImage from "../../assets/DD-GWTH-H1-W-4x3.png";
import Energy from "../../assets/energy.png";
import Lightbulb from "../../assets/lightbulb.png";
import PathwayIcon from "../../assets/pathway-icon.png";
import exploreItems from "../../data/exploreItems";
import { MainWrapper } from "../../components/MainWrapper";

const useStyles = makeStyles((theme) => ({
  jumbo: {
    backgroundImage: `url(${GrowthImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "1000px",
    height: "600px",
    margin: "0 400px"
  },
  underline: {
    background: `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.main} 100%,transparent 100%,transparent)`,
    backgroundSize: "100% 40%",
    backgroundPosition: "center 100%",
    backgroundRepeat: "no-repeat",
    padding: 0
  },
  section: {
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center"
  },
  aboutBox: {
    maxWidth: "20%",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column"
  },
  aboutIcon: {
    paddingBottom: theme.spacing(2),
    width: theme.spacing(9),
    alignSelf: "center"
  },
  headingWrapper: {
    paddingTop: "175px",
    maxWidth: "60%"
  },
  heading: {
    fontFamily: theme.typography.h1.fontFamily
  },
  subHeading: {
    fontWeight: "bold",
    lineHeight: "1",
    fontSize: "1.2em"
  },
  exploreSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4)
  },
  exploreCards: {
    display: "grid",
    gridColumnGap: "24px",
    gridRowGap: "32px",
    gridTemplateColumns: "repeat(2,0fr)",
    gridTemplateRows: "repeat(2,350px)",
    marginTop: theme.spacing(4)
  },
  exploreImage: {
    height: "300px",
    marginBottom: theme.spacing(1)
  },
  exploreLink: {
    border: `${grey[300]} solid 1px`
  },
  exploreLinkText: {
    fontSize: theme.typography.h5.fontSize,
    paddingLeft: theme.spacing(1),
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <MainWrapper styleType="fullWidth">
      <div className={classes.jumbo}>
        <div className={classes.headingWrapper}>
          <Typography variant="h1">
            Level up your{" "}
            <span className={`${classes.heading} ${classes.underline}`}>
              engineering skills
            </span>
          </Typography>
          <Typography variant="body2">
            Loofah is a tool, built by engineers, for engineers - to help you
            grow
          </Typography>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.aboutBox}>
          <img src={Energy} alt="energy icon" className={classes.aboutIcon} />
          <Typography>
            <span
              className={`${classes.heading} ${classes.subHeading} ${classes.underline}`}
            >
              Understand what’s expected
            </span>
          </Typography>
          <Typography variant="body2">
            Get a sense of the things you should know at each stage of your
            development
          </Typography>
        </div>
        <div className={classes.aboutBox}>
          <img
            src={Lightbulb}
            alt="lightbulb icon"
            className={classes.aboutIcon}
          />
          <Typography>
            <span
              className={`${classes.heading} ${classes.subHeading} ${classes.underline}`}
            >
              Create your own personal pathway
            </span>
          </Typography>
          <Typography variant="body2">
            {
              "Filter skills for your chosen craft(s) and the grades you're interested in"
            }
          </Typography>
        </div>
        <div className={classes.aboutBox}>
          <img
            src={PathwayIcon}
            alt="pathway icon"
            className={classes.aboutIcon}
          />
          <Typography>
            <span
              className={`${classes.heading} ${classes.subHeading} ${classes.underline}`}
            >
              Make a plan for how to learn
            </span>
          </Typography>
          <Typography variant="body2">
            Browse recommended resources and ideas for honing capabilities
          </Typography>
        </div>
      </div>
      <div className={classes.exploreSection}>
        <Typography variant="h2" className={classes.heading}>
          What do you want to explore?
        </Typography>
        <div className={classes.exploreCards}>
          {exploreItems.map((item) => (
            <Link key={item.id} to={item.href} className={classes.exploreLink}>
              <img
                src={item.image}
                alt={item.alt}
                className={classes.exploreImage}
              />
              <span className={`${classes.heading} ${classes.exploreLinkText}`}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Landing;
