import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: "#344e41",
      display: "flex",
      margin: "auto",
  },
  menuLinks: {
    display: "flex",
    flexDirection: "row",
    margin: "auto"
  },
  menubtn1: {
      fontFamily: "Dosis, sans-serif",
      fontSize: "20px"
  },
  navlinks:{
    textDecoration: "none",
    color: "inherit",
  }
}));

export default function MenuHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" elevation={12}>
        <Toolbar className={classes.menuLinks}>

          <nav>
          <Link className={classes.navlinks} to="/"><Button className={classes.menubtn1} color="inherit">Home</Button></Link>
          <Link className={classes.navlinks} to="/about"><Button className={classes.menubtn1} color="inherit">About</Button></Link>
          <Link className={classes.navlinks} to="/services"><Button className={classes.menubtn1} color="inherit">Services</Button></Link>
          <Link className={classes.navlinks} to="/contact"><Button className={classes.menubtn1} color="inherit">Contact Me</Button></Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

