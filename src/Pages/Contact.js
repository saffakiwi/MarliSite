import React from "react";
import '../App.css';
import MenuHome from "../Components/menuHome";
import Footer from "../Components/Footer";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contact: {
    display: "flex",
    height: "600px",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: "90%",
    marginTop: "30px",
    marginLeft: "30px",
    width: "95%",
  },
  cform: {
    display: "flex",
    height: "90%",
    marginTop: "30px",
    marginLeft: "20px",
    width: "95%",
  },
  aboutCardHeader: {
    marginBottom: "10px",
    marginTop: "30px",
    fontFamily: "Dosis, sans-serif",
    textDecoration: "underline #a3b18a",
  },
  detailicons: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px",
    color: "#a3b18a",
  },
  detailstext: {
    display: "flex",
    justifyContent: "flex-start",
    width: "300px",
    textAlign: "left",
  },
  detailinfo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "20px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
    justifyContent: "center",
  },
  contactHeader: {
    display: "flex",
    width: "100%",
  },
  contactDetails: {
      marginTop: "20px",
      padding: "10px",
      width: "100%",
      margin: "auto",
  },
  formInput: {
    width: "90%",
    '& .MuiInput-underline:after': {
      borderColor: ' #a3b18a',
    },
   label: {
    ".Mui-focused":{
      color: "#a3b18a",
    }
   }
},
  sendButton: {
    width: "30%",
    margin: "auto",
    marginTop: "20px",
    backgroundColor: "#a3b18a",
    '&:hover': {
      backgroundColor: '#fff',
      color: '#a3b18a',
  },
  },
 
}));

export default function Contact() {
  const classes = useStyles();

  const AddressMap = () => {
    return (
      <div className="google-map-code">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7726712590606!2d176.1427823831943!3d-37.69165859892387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddba54b313f6f%3A0x5bbc6581a27dc865!2s36%20Sutherland%20Road%2C%20Judea%2C%20Tauranga%203110!5e0!3m2!1sen!2snz!4v1672275818707!5m2!1sen!2snz"
          width="100%"
          height="600px"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };

  return (
    <>
      <MenuHome />

      <Grid container spacing={2} className={classes.contact}>
        <Grid item md={6} sm={12}>
          <Card elevation={6} className={classes.details}>
            <Typography variant="h5" className={classes.aboutCardHeader}>
              My Details
            </Typography>

            <div className={classes.detailinfo}>
              <div className={classes.detailicons}>
                <LocationOnIcon />
              </div>
              <div className={classes.detailstext}>
                <Typography >Bethlehem Psychological Services, <br/>36 Sutherland Road, Brookfield, Tauranga</Typography>
                {/* <Typography>Brookfield</Typography> */}
              </div>
            </div>

            <div className={classes.detailinfo}>
              <div className={classes.detailicons}>
                <PhoneIcon />
              </div>
              <div item md={8} className={classes.detailstext}>
                <Typography>022 081 9899</Typography>
              </div>
            </div>

            <div className={classes.detailinfo}>
              <div className={classes.detailicons}>
                <EmailIcon />
              </div>
              <div className={classes.detailstext}>
                <Typography>marli.engelbrecht@gmail.com</Typography>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6} sm={12}>
          <Card elevation={6} className={classes.details}>
          <Typography variant="h5" className={classes.aboutCardHeader}>
              Contact Me
            </Typography>
            
          
            <Grid item md={12} sm={12} className={classes.contactHeader}>
            <form noValidate autoComplete="off" className={classes.form}>
            <Grid item md={12} sm={12} className={classes.contactDetails}>
            <TextField className={classes.formInput} id="standard-full-width" label="Full Name"/>
            </Grid>
            <Grid item md={12} sm={12} className={classes.contactDetails}>
            <TextField className={classes.formInput} id="standard-full-width" label="Email Address" />
            </Grid>
            <Grid item md={12} sm={12} className={classes.contactDetails}>
            <TextField className={classes.formInput} id="standard-full-width" label="Phone Number" />
            </Grid>
            <Grid item md={12} sm={12} className={classes.contactDetails}>
            <TextField
            className={classes.formInput}
            InputLabelProps={{className: classes.label}}
          id="standard-multiline-flexible"
          label="Message"
          multiline
          maxRows={2}
        />
        </Grid>

        <Button
        variant="contained"
        color="primary"
        className={classes.sendButton}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>

        </form>
            </Grid>
            
       
          </Card>
        </Grid>
      
      
      </Grid>

      <AddressMap />

      <Footer />
    </>
  );
}
