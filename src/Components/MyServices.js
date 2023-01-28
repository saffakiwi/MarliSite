import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  serviceDiv:{
    display: 'flex',
    flexDirection: 'column',
  },
  serviceGrid:{
    width: '100%',
    display: 'flex',
    // flexDirection: 'row',
  },
  serviceImage: {
    maxWidth: '100%',
  },
  servicesHeader: {
    marginBottom: "10px",
    marginTop: "30px",
    fontFamily: "Dosis, sans-serif",
    textDecoration: "underline #a3b18a",
  },
  servicesText: {
    fontFamily: "Dosis, sans-serif",
    marginTop: "50px",
  }
}));

export default function MyServices() {
  const classes = useStyles();

  return (
    <div >

    <Grid container>
    <Grid item md={6}>
    <div>
    <Typography className={classes.servicesHeader}>
        My Services
    </Typography>
    </div>

    <div >
    <Typography className={classes.servicesText}>
        . This is some random text to display for my services. <br/>
        . This is some random text to display for my services <br/>
        . This is some random text to display for my services. <br/>
    </Typography>
    </div>
    </Grid>
    
    
    <Grid item md={6} className={classes.serviceGrid}>
    <img src="/services-therapy.jpg" alt="therapy" className={classes.serviceImage}/>
    </Grid>
    
    <Grid item md={6} className={classes.serviceGrid}>
    <img src="/services-therapy.jpg" alt="therapy" className={classes.serviceImage}/>
    </Grid>

    <Grid item md={6} >
    <div>
    <Typography className={classes.servicesHeader}>
        My Services
    </Typography>
    </div>

    <div>
    <Typography className={classes.servicesText}>
        . This is some random text to display for my services. <br/>
        . This is some random text to display for my services <br/>
        . This is some random text to display for my services. <br/>
    </Typography>
    </div>
    </Grid>
    </Grid>
    </div>
  );
}
