import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
    Footer: {
        display: 'flex',
        width: '100%',
        height: '200px',
        backgroundColor: "#344e41",
        position: 'relative',
left:0,
bottom:0,
right:0,
    },
    copyright: {
        display: 'flex',
        margin: "120px 20px",
        color: "#dad7cd",
    },
    social: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    socialgrid: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginLeft: "-70px"
    }
  }));

  export default function Footer() {

    const classes = useStyles();

    return(
<>
    <Paper className={classes.Footer}>

        <Grid container spacing={2} style={{height: "140px", width: "95%"}}>

            <Grid item md={6} style={{height: "140px"}}>
                <Typography variant="text" className={classes.copyright}>© Rdk Web Design</Typography>
            </Grid>

            
            <Grid direction="row" item md={6} className={classes.socialgrid} style={{height: "140px"}}>
                <div className={classes.social}>
                    <FacebookIcon fontSize="large" style={{marginRight: "10px", color: "#dad7cd"}}/>
                    <LinkedInIcon fontSize="large" style={{color: "#dad7cd"}} />
                </div>
            </Grid>

        </Grid>
    
    </Paper>        
</>
    );
  }
