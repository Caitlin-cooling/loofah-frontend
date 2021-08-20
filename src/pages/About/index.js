import React from "react";
import {makeStyles, Toolbar, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    content: {
        maxWidth: "42%",
        margin: "auto",
        padding: theme.spacing(3)
    },
    toolbar: {
        padding: "0 0 1.5em"
    },
    subHeading: {
        padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`
    },
    link: {
        display: "inline-block",
        background: `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.main} 100%,transparent 100%,transparent)`,
        backgroundSize: "100% 40%",
        backgroundPosition: "center 100%",
        backgroundRepeat: "no-repeat",
        transition: "all 500ms ease",
        "&:hover": {
            backgroundSize: "100% 100%"
        }
    },
    listItem: {
        listStyleType: "disc",
        display: "list-item",
        padding: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px 0`,
        marginLeft: theme.spacing(2)
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Toolbar className={classes.toolbar}/>

                <Typography variant="h1">
                    About Loofah
                </Typography>
                <Typography variant="body1">
                    Loofah is a tool designed to help you understand the capabilities expected of you as an engineer at
                    Deloitte Digital, as you progress through the organisation.
                </Typography>

                <List>
                    <ListItem className={[classes.listItem, "MuiTypography-body1"]}>
                        Read the <Link to={{pathname: "/pathway"}} className={classes.link}>
                            Engineering Career Pathway
                        </Link> to get a sense of the high-level expectations at each grade.
                   </ListItem>
                    <ListItem className={[classes.listItem, "MuiTypography-body1"]}>
                        Dive into the <Link to={{pathname: "/skills", state: {grade: "analystDeveloper"} }} className={classes.link}>
                            Engineering Skills
                        </Link> to get a more detailed picture of the technical and soft skills you should be developing day to
                        day, and how you might go about doing that.
                    </ListItem>
                </List>

                <Typography variant="h3" className={classes.subHeading}>
                    Understanding the Engineering Skills
                </Typography>
                <Typography variant="body1">
                    Engineering Skills are grouped into 7 categories: leadership, collaboration,
                    delivery, technical, software design and security.
                </Typography>
                <Typography variant="body1">
                    Each skill is positioned as a headline capability, with some prompting questions, designed to help you
                    assess whether you are operating at the target level. The questions are not an exhaustive list of all the things
                    you need to cover to meet a capability, nor should they be seen as a list of tick box items. Please
                    use them as a guide, rather than a to do list.
                </Typography>
                <Typography variant="body1">
                    Skills are described in quite some detail at junior grades. For early-stage engineers, we feel
                    that more thorough guidance is helpful in setting up strong engineering foundations that align to
                    Deloitte’s core values. Skills become a little broader as grades become more senior, in
                    recognition that roles at these levels are likely to be more fluid and varied.
                </Typography>
                <Typography variant="body1">
                    Where applicable, skills include recommended learning resources, to help you grow in the right
                    direction. If you’ve come across resources you think we should add, please get in touch.
                </Typography>

                <Typography variant="h3" className={classes.subHeading}>
                    Crafting your own learning journey
                </Typography>
                <Typography variant="body1">
                    Skills can be filtered by craft, so you can focus on your personal area(s) of interest. Along
                    this axis, there is also a “core” tag, which includes all the capabilities which we expect of you as
                    an engineer, irrespective of your specialism.
                </Typography>
                <Typography variant="body1" className={classes.paragraph}>
                    Skills are viewed by grade. Grades build upon each other. If you are at a more senior grade,
                    we expect you still to be demonstrating the capabilities listed for more junior grades.
                </Typography>

                <Typography variant="h3" className={classes.subHeading}>
                    No engineer is an island
                </Typography>
                <Typography variant="body1">
                    It is not our intention for this tool to be used as a tick box exercise in the run up
                    to the next promotion. The tool will be most effective when used as a basis for regular
                    conversations with your People Lead, Project Lead or Technical Mentor. They will be able to position
                    the capabilities in the context of your day to day work, provide colour, and help you work out what
                    skills you should be developing as well as how you might go about doing that most effectively.
                </Typography>
                <Typography variant="body1">
                    If you are finding it hard to assess where you&apos;re at against a given skill, it&apos;s
                    a good idea to seek external feedback from people you work with day to day. Hopefully this tool
                    gives you a good place to start during those conversations.
                </Typography>

                <Typography variant="h3" className={classes.subHeading}>
                    Learning as we go
                </Typography>
                <Typography variant="body1">
                    It’s probably impossible to write a list of all the skills needed to be an effective engineer, but
                    we hope that the capabilities listed here provide a good starting point. Given the dynamic nature of
                    our industry, they will evolve over time. This tool is permanent work in progress.
                </Typography>
                <Typography variant="body1">
                    Our intention is to keep improving Loofah to make it truly useful for the community. If you have any
                    feedback when using the tool, please don’t hesitate to get in touch with the team.
                </Typography>

            </main>
        </div>
);

};

export default About;