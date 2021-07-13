import React from "react";
import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import { MainWrapper } from "../../components/MainWrapper";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: "0 0 1.5em"
  },
  subHeading: {
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <MainWrapper>
      <Toolbar className={classes.toolbar} />

      <Typography variant="h1">About Loofah</Typography>
      <Typography variant="body1">
        Loofah is a tool designed to help you understand the capabilities
        expected of you as an engineer at Deloitte Digital, as you progress
        through the organisation.
      </Typography>

      <Typography variant="h5" className={classes.subHeading}>
        Understanding the capabilities
      </Typography>
      <Typography variant="body1">
        Capabilities are grouped into 7 categories: leadership, collaboration,
        delivery, technical, software design and security.
      </Typography>
      <Typography variant="body1">
        Each capability is positioned as a headline skill, with some example
        behaviours or topics. The detail is there to illustrate the headline
        capability, so you can assess whether you are operating at the target
        level. It is not an exhaustive list of all the things you need to cover
        to meet a capability, nor should it be seen as a list of tick box items.
        Please use the detail as a guide, rather than a to do list.
      </Typography>
      <Typography variant="body1">
        Capabilities are described in quite some detail at junior grades. For
        early-stage engineers, we feel that more thorough guidance is helpful in
        setting up strong engineering foundations that align to Deloitte’s core
        values. Capabilities become a little broader as grades become more
        senior, in recognition that roles at these levels are likely to be more
        fluid and varied.
      </Typography>
      <Typography variant="body1">
        Where applicable, capabilities include recommended learning resources,
        to help you grow in the right direction. If you’ve come across resources
        you think we should add, please get in touch.
      </Typography>

      <Typography variant="h5" className={classes.subHeading}>
        Crafting your own pathway
      </Typography>
      <Typography variant="body1">
        Capabilities can be filtered by craft, so you can focus on your personal
        area(s) of interest. Along this axis, there is also a “core” tag, which
        includes all the capabilities which we expect of you as an engineer,
        irrespective of your specialism.
      </Typography>

      <Typography variant="body1" className={classes.paragraph}>
        Capabilities are viewed by grade. Grades build upon each other. If you
        are at a more senior grade, we expect you still to be demonstrating the
        capabilities listed for more junior grades.
      </Typography>

      <Typography variant="h5" className={classes.subHeading}>
        No engineer is an island
      </Typography>
      <Typography variant="body1">
        It is not our intention for this tool to be used as a tick box exercise
        in the run up to the next promotion. The tool will be most effective
        when used as a basis for regular conversations with your People Lead,
        Project Lead or Technical Mentor. They will be able to position the
        capabilities in the context of your day to day work, provide colour, and
        help you work out what skills you should be developing as well as how
        you might go about doing that most effectively.
      </Typography>
      <Typography variant="body1">
        If you are finding it hard to assess where you&apos;re at against a
        given capability, it&apos;s a good idea to seek external feedback from
        people you work with day to day. Hopefully this tool gives you a good
        place to start during those conversations.
      </Typography>

      <Typography variant="h5" className={classes.subHeading}>
        Learning as we go
      </Typography>
      <Typography variant="body1">
        It’s probably impossible to write a list of all the skills needed to be
        an effective engineer, but we hope that the capabilities listed here
        provide a good starting point. Given the dynamic nature of our industry,
        they will evolve over time. This tool is permanent work in progress.
      </Typography>
      <Typography variant="body1">
        Our intention is to keep improving Loofah to make it truly useful for
        the community. If you have any feedback when using the tool, please
        don’t hesitate to get in touch with the team.
      </Typography>
    </MainWrapper>
  );
};

export default About;
