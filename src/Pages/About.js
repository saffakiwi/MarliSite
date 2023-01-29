import React from "react";
import "../App.css";
import MenuHome from "../Components/menuHome";
import Paper from "@material-ui/core/Paper";
import Footer from "../Components/Footer";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AboutContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    // height: '700px',
  },
  aboutAccordion: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80vh',
    marginBottom: '20px',
  },
  aboutAccordionContentHeader:{
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    margin: 'auto'
  },
  aboutAccordionContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: '20vh'
  },
  aboutImageDiv: {
    display: 'flex',
  },
  aboutImage: {
    maxHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '20px',
    marginBottom: 50,
  },
  aboutPaper: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    height: '100%',
  }
}));

export default function About() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    
  };

  return (
    <>
      <MenuHome />

    <Grid container className={classes.AboutContainer}>
        <Grid item md={4} className={classes.aboutImageDiv}>
            <Paper className={classes.aboutPaper} elevation={10}>
            <img  className={classes.aboutImage} src="/marli.png" alt="marli"/>
            </Paper>
        </Grid>

    <Grid item md={8} className={classes.aboutAccordion}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        className={classes.aboutAccordionContentHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.aboutAccordionContent}
        >
          <Typography className={classes.heading}>Background</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.aboutAccordionContentHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.aboutAccordionContent}
        >
          <Typography className={classes.heading}>Qualifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.aboutAccordionContentHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.aboutAccordionContent}
        >
          <Typography className={classes.heading}>Hobbies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion className={classes.aboutAccordionContentHeader}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.aboutAccordionContent}
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Grid>
    </Grid>
      <Footer />
    </>
  );
}
