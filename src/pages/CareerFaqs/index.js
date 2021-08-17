import React from "react";
import { MainWrapper } from "../../components/MainWrapper";
import {
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem
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
  listHeading: {
    paddingBottom: theme.spacing(0)
  },
  listItem: {
    listStyleType: "disc",
    display: "list-item",
    padding: `${theme.spacing(1)}px 0 0 0`,
    marginLeft: theme.spacing(2)
  }
}));

const CareerFaqs = () => {
  const classes = useStyles();

  return (
    <MainWrapper>
      <Toolbar className={classes.toolbar} />
      <Typography variant="h1">Engineering Career FAQs</Typography>
      <Typography variant="h3">
        How do promotions work for engineers?
      </Typography>
      <Typography>
        People typically spend between 2 and 5 years at each stage, although
        there is more variation at the more senior grades. We believe that it is
        important that you are ready across all aspects of expectation before
        you are promoted. It is better to have momentum in your career than to
        scrape into the next grade and then fail to meet some expectations.
      </Typography>
      <Typography>
        Promotions take place annually, following a series of talent reviews and
        diligence on each individual. Senior Technical Lead, Technical Director,
        and Partner promotions have specific processes, entered by invitation,
        that run over a number of months.
      </Typography>
      <Typography>
        In general, there is more divergence in what people do as they progress
        in grade. Whilst most of our junior developers will spend most of their
        day writing code, our more senior staff will find a balance of work that
        suits their interests and skills, branching out into things like
        technical leadership, building of frameworks and tools, architecture,
        team management, sales and the nurturing of long term client
        relationships, management of our own business, and more. In fact, the
        more senior you become, the more the focus will be on doing something
        new and entrepreneurial – something that no-one else does, and that is
        genuinely additive to our business.
      </Typography>
      <Typography variant="h4">How and when should I specialise?</Typography>
      <Typography>
        Front end or back end? Web or mobile? Java or Python? The range of
        technologies we use is now so broad that we all have to make choices
        about what we learn and practice. For some, that choice is easy. Others
        are worried about closing off avenues too soon.
      </Typography>
      <Typography>
        In general, we find that the best engineers are those who have a breadth
        of expertise. Being proficient in more than one programming language,
        stack, and/or domain will make you a better engineer full stop. Only by
        broadening your perspectives do you being to appreciate the underlying
        principles that lead to high quality code and elegant solutions.
        However, being merely skin deep in dozens of technologies will limit how
        useful you can be in any one of them.
      </Typography>
      <Typography>
        In the early years of your career, it is in your interest to get
        exposure to a range of roles, domains, and technologies. This will help
        you gain an appreciation of the challenges and opportunities each
        presents, and give you a chance to understand what type of work you find
        most interesting. Most people will specialise more as they get more
        senior, but there is no hard and fast rule.
      </Typography>
      <Typography className={classes.listHeading}>
        As general guidance:
      </Typography>
      <List>
        <ListItem className={`${classes.listItem} MuiTypography-body1`}>
          Try to learn at least one scripting language (e.g. Bash), one
          interpreted language (e.g. Python, JavaScript, Ruby), and one
          general-purpose statically typed language (e.g. Java, C#).
        </ListItem>
        <ListItem className={`${classes.listItem} MuiTypography-body1`}>
          Gain experience across both the front end (web, mobile) and back end
          (server-side, integration) domains.
        </ListItem>
        <ListItem className={`${classes.listItem} MuiTypography-body1`}>
          Spend some time in ops, managing infrastructure and pipeline code.
        </ListItem>
        <ListItem className={`${classes.listItem} MuiTypography-body1`}>
          Try to learn one new technology, pattern, library, or tool every few
          months, both because they may be useful to you, and to keep your
          aptitude for learning sharp.
        </ListItem>
      </List>
      <Typography>
        As you try more things, you will find some more enjoyable than others.
        Your enjoyment is a reasonable proxy for what you are good at, and what
        you are good at is a reasonable proxy for what the firm values you for.
        In other words: do what you love, once you figure out what that is.
      </Typography>
      <Typography variant="h3">How about industry specialism?</Typography>
      <Typography>
        In the firm more widely, it is typical to become more specialised to an
        industry or sector as you become more senior. That is often true of
        engineers as well, but we often find that engineers prefer to remain
        fungible across industries for longer.
      </Typography>
      <Typography>
        Industry alignment has advantages. Account teams run along the industry
        dimension, and they are the ones who help you win the work you want to
        do. Some industries also have particularly relevant technology vendors,
        patterns, and constraints that you will be expected to be familiar with.
      </Typography>
      <Typography>
        However, fungibility has its advantages. The biggest, most interesting
        projects may not always come from the same industry. Cross-pollination
        of experience is also valuable to our clients, who often find experience
        from other industries a selling point.
      </Typography>
      <Typography>
        Ultimately, whether and when to align to a particular industry is a
        personal choice, albeit one that is sometimes made with retrospective
        coherence. You should work with your coach and other relevant leaders to
        understand what is right for you.
      </Typography>
      <Typography variant="h3">How long should I stay on a project?</Typography>
      <Typography>
        A career in consulting often carries the expectation of variety. An
        eclectic mix of short projects can be good, especially if you are not
        yet sure where your interests lie and want to try a few different
        technologies and industries.
      </Typography>
      <Typography>
        However, you shouldn’t underestimate the value of being on a large and
        long-term project. Long term roles allow you to make a bigger impact and
        build deeper relationships. Especially at the more junior grades, larger
        and longer term projects can offer more opportunities for “stretch”
        roles, because there will be more support and coaching available, and
        because you will have had more opportunity to prove you are ready.
      </Typography>
      <Typography>
        As part of this, think about how you can have a positive impact on the
        practice through your project, even if you are going to be there a
        while. If you are building a great team, mentoring others, introducing
        new processes and tools, and building lasting relationships with your
        colleagues and clients, then you are making an impact that will last
        beyond the project – probably more so than if you are on the bench and
        write a thought piece or attend a recruitment event. Making a success of
        the project and sharing that success outside the project is not just
        good for your career, it’s the main way in which we grow and improve the
        wider business.
      </Typography>
    </MainWrapper>
  );
};

export default CareerFaqs;
