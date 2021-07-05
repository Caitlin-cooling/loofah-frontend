import React from "react";
import { Link } from "react-router-dom";
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
    paddingTop: theme.spacing(2)
  },
  listItem: {
    listStyleType: "disc",
    display: "list-item",
    padding: `${theme.spacing(1)}px 0px 0px 0px`,
    marginLeft: theme.spacing(2)
  },
  link: {
    color: "#0E5B7C",
    textDecoration: "underline"
  }
}));

const Pathway = () => {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar}/>
        <Typography variant="h1">
          Engineering Career Pathway
        </Typography>
        <Typography>
          This page outlines high-level career expectations, specifically for engineers.
          We recommend that you read this first, and then dive into the
          <span> <Link to="/skills" className={classes.link}>Detailed Capabilities</Link> </span>
          expected at each grade.
        </Typography>
        <Typography variant="h4">
          General Expectations
        </Typography>
        <Typography>
          There are few cross-cutting expectations that apply to all grades:
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Put the client’s long-term needs first:</strong> Satisfying
              our client’s needs, building solutions that are effective and efficient
              in their specific context, is the reason we are here. We listen, we
              are flexible, and we are pragmatic. Sometimes that means challenging
              the client’s assumptions and approaches. We do this with the client,
              not to them.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Act as part of a team:</strong> We believe that the unit of
              delivery is the team, not the individual. Our value proposition is
              that the whole is greater than the sum of its parts. Everyone has a
              part to play in making sure the team works on both a professional
              and an interpersonal level
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Respect others:</strong> We believe that diversity makes us
              stronger. Working well with those who are different from you, whether
              by gender, race, sexual orientation, physical ability, caring
              responsibilities, or something else, is a core skill, and one that
              deserves personal investment like any other.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Be a professional:</strong> You are the firm’s brand. Being a
              professional does not mean putting on a suit (but try to avoid sandals).
              It means acting with integrity, respect, and commitment at all times.
              We don’t cut corners just because we could get away with it. We own up
              to our mistakes. We deliver bad news with the same urgency and care
              that we deliver good news.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Stay curious:</strong> We don’t expect you to know everything,
              but we do expect you to want to keep learning, growing, and challenging
              your own assumptions, whether you are a graduate or a Partner.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Be agile at heart:</strong> Agile is something that you are,
              not something that you do. We want you to understand and embrace the
              principles and values of agile in your day-to-day work.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Take responsibility for the process:</strong> We strive to
              achieve flow in our work. Working effectively means participating
              proactively in the delivery process, and finding ways to improve it
              over time.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Take responsibility for quality:</strong> While there are
              sometimes specialised testing roles, the team as a unit is responsible
              of the solution quality. The job is not done until the solution is
              proven to work, and quality isn’t something we add at the end.
              Test-driven development is part of our DNA.
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography component="span">
              <strong>Take responsibility for operability:</strong> While there
              are specific infrastructure engineering skills, all engineers are
              responsible of creating solutions that are operable, and operating
              solutions that can continuously improved.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h4">
          Engineering grades
        </Typography>
        <Typography>
          Specific definitions of what it means to operate at each grade are outlined
          below. The codes in brackets are the internal levels used by HR to calibrate
          salaries.
        </Typography>
        <Typography variant="h5" id="analyst">
          Analyst Developer (P1, P4)
        </Typography>
        <Typography>
          At this level, your main focus is on learning your craft. This is where our
          graduates start out, but we also hire directly into this grade.
        </Typography>
        <Typography>
          You are expected to learn quickly, to keep an open mind, to ask for help
          constructively, and to contribute where you can. You are part of a formal
          traineeship programme that aims to teach you how to be an effective consultant
          and a good developer. This typically lasts two years.
        </Typography>
        <Typography>
          If you have joined via the graduate intake you will need to complete the
          requirements of the ‘Analyst Induction Programme’ (AIP) as well as meeting the
          standards of a Developer. If you were hired directly into the Analyst Developer
          grade, you will not complete all the formalities of the AIP, but you should review
          the training available on the AIP with your coach to decide which would be helpful
          for you given your background. The requirements of the AIP also highlight some of
          the breadth required from a career in consulting which may not have been the case
          in your previous experience.
        </Typography>
        <Link
          to={{pathname: "/skills", state: {grade: "analystDeveloper"} }}
          className={classes.link}
        >
          Analyst Developer Capabilities
        </Link>
        <Typography variant="h5" id="consultant">
          Developer (M1)
        </Typography>
        <Typography>
          Now you are no longer a trainee, but that doesn’t mean you’ve stopped learning.
          You have useful, core skills in one or more technologies that you can apply in
          a project context, and you are starting to move beyond the precise practices
          you were taught, gaining a better understanding of the underlying principles
          that make them work. You will take responsibility for your own productivity,
          and begin to take ownership over components within an overall solution. It’s
          also likely that you’ll also start to manage and mentor some more junior people
          on your project.
        </Typography>
        <Link
          to={{pathname: "/skills", state: {grade: "developer"} }}
          className={classes.link}
        >
          Developer Capabilities
        </Link>
        <Typography variant="h5" id="senior">
          Senior Developer (M2)
        </Typography>
        <Typography>
          You are now responsible not just for the impact you make with your own work,
          but also for your wider impact on others, for example by leading small teams,
          inspiring people, taking greater responsibility for the quality and architecture
          of the solution, and/or building productive client relationships. You’ll also
          start to play a bigger role in the practice and our internal community.
        </Typography>
        <Link
          to={{pathname: "/skills", state: {grade: "seniorDeveloper"} }}
          className={classes.link}
        >
          Senior Developer Capabilities
        </Link>
        <Typography variant="h5" id="tech-lead">
          Technical Lead (M4)
        </Typography>
        <Typography>
          You are now considered an expert at what you do. You might be the most senior
          technologist on your project, and your clients will start to see you as the
          face of our technical delivery. You’ll be responsible for the work of several
          teams, either in a managerial capacity, in a coaching and quality assurance role,
          or as a solution architect. The solution we are building has your name on it,
          so you’re going to care passionately about its quality.
        </Typography>
        <Typography>
          You’ll be inspirational to our people and our clients, and you might play a big
          part in our practice, for example by leading a technical community or taking
          ownership over things like recruitment or learning. You’ll also start to build
          a team around you, some of whom you will take with you as you move between
          projects. These people will start to see you as vital to their own career growth.
        </Typography>
        <Typography>
          At this point in your career, you may start to specialise more as either a
          delivery lead, a principal developer, or an architect. Your own focus may
          include a mixture of these skills, but at a high level, the expectations of
          each type of technical lead are:
        </Typography>
        <Typography variant="h6">
          Principal Developer
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            Ability to write clear, high-performance code that solves complex problems.
          </ListItem>
          <ListItem className={classes.listItem}>
            Designing and building frameworks, tools, and platforms that make us more
            productive and effective.
          </ListItem>
          <ListItem className={classes.listItem}>
            Demonstrated experience designing, building and maintaining large-scale,
            high-performance systems.
          </ListItem>
        </List>
        <Typography variant="h6">
          Architect
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            With a development background, understanding architecture and its value.
          </ListItem>
          <ListItem className={classes.listItem}>
            Designing evolutionary architecture.
          </ListItem>
          <ListItem className={classes.listItem}>
            Writing code alongside the development team, helping to make your
            architecture real.
          </ListItem>
          <ListItem className={classes.listItem}>
            Advising our clients on architecture related concerns.
          </ListItem>
        </List>
        <Typography variant="h6">
          Technical Delivery Lead
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            Building, supporting, and mentoring high performing delivery teams.
          </ListItem>
          <ListItem className={classes.listItem}>
            Acting as a champion for our delivery methods, and evolving good
            delivery practice.
          </ListItem>
          <ListItem className={classes.listItem}>
            Working with your team to solve problems and remove impediments.
          </ListItem>
          <ListItem className={classes.listItem}>
            Writing code alongside your development team, helping them succeed.
          </ListItem>
          <ListItem className={classes.listItem}>
            Representing (and sometimes, protecting) your team to clients and
            senior stakeholders.
          </ListItem>
          <ListItem className={classes.listItem}>
            Facilitating your team through estimating and planning, creating a
            shared vision of what is possible and reasonable.
          </ListItem>
        </List>
        <Typography variant="h5" id="senior-tech-lead">
          Senior Technical Lead (M5)
        </Typography>
        <Typography>
          You are now a junior member of our leadership team. You’ll be involved
          in bigger projects and responsible for more complex solutions – solutions
          that your clients might consider business-critical. You are also
          recognised outside the firm for your skills and expertise. You are an
          inspiring leader and you have built a team around you, who are rooting
          for you to succeed.
        </Typography>
        <Typography>
          Senior Technical Lead is the first grade for which you need to present
          a business case and participate in an evaluation process that includes
          a panel interview. The business case is an opportunity for you to
          articulate what you do, and how it is additive to the firm and our
          clients. You should expect to invest significant time and effort into
          developing and articulating your business case, working with a range
          of mentors and senior supporters along the way.
        </Typography>
        <Typography variant="h6">
          Chief Engineer
        </Typography>
        <Typography>
          Some, but far from all, of our Senior Technical Leads will be recognised
          as a Chief Engineer, a particular role that describes some of our most
          experienced and capable technologists. Our Chief Engineers are our
          guardians of quality and innovation:
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            On a project, the role of a Chief Engineer is to make us the best
            engineers we can be on that project.
          </ListItem>
          <ListItem className={classes.listItem}>
            In the practice, the role of a Chief Engineer is the make us the
            best engineers we can be, full stop.
          </ListItem>
        </List>
        <Typography className={classes.listHeading}>
          Our Chief Engineers do this by:
        </Typography>
        <List>
          <ListItem className={classes.listItem}>
            acting as architects and technical leaders on large engagements;
          </ListItem>
          <ListItem className={classes.listItem}>
            providing technical assurance over one large and/or multiple smaller
            engagements;
          </ListItem>
          <ListItem className={classes.listItem}>
            offering a pragmatic, constructive counterbalance to short term date
            - or budget-driven decisions in the interest of doing what is right
            for the long term health of the solution and the delivery team;
          </ListItem>
          <ListItem className={classes.listItem}>
            inspiring our people to take pride in their craft and adopt good
            working practices;
          </ListItem>
          <ListItem className={classes.listItem}>
            helping project teams share their experiences and innovations with
            the wider practice; and
          </ListItem>
          <ListItem className={classes.listItem}>
            chairing Solution Review Boards for projects.
          </ListItem>
        </List>
        <Typography variant="h5" id="technical-director">
          Technical Director (M6)
        </Typography>
        <Typography>
          This is a senior leadership role in our business. What you do will be
          very personal to you and your career. You will have presented a specific
          business case for your promotion, which you are now executing on.
        </Typography>
        <Typography variant="h5" id="partner">
          Partner (A, B)
        </Typography>
        <Typography>
          Our Partners are the owners and stewards of our business. Each project,
          client account and business unit will have a Partner who is ultimately
          personally accountable for its success. Being a Partner in Deloitte is
          an entrepreneurial endeavour, focused on creating new opportunities and
          capabilities that drive us forward as a business and make this a meaningful
          and exciting place for our people to build their careers.
        </Typography>
      </main>
    </div>
  );
};

export default Pathway;
