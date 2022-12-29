import react from "react";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuHome from "../Components/menuHome";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: "#dad7cd",
    display: "flex",
    height: "620px",
    width: "100%",
  },
  menuLinks: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  heroimg: {
    borderRadius: "50%",
    margin: "auto",
    marginTop: "10px"
    // marginTop: "-50px",
  },
  heroDiv: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  headingText: {
    color: "#3a5a40",
    fontFamily: "Dancing Script, regular",
    marginBottom: "10px",
  },
  infoDiv: {
    height: "500px",
    backgroundColor: "#FFF",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "98%",
    marginTop: "-40px",
    margin: "auto",
    backgroundColor: "#FFF",
    opacity: "80%",
    borderRadius: "16px",
  },
  infoCardHeader: {
    marginBottom: "10px",
    marginTop:"10px",
    fontFamily: "Dosis, sans-serif"
  },
  cardMap: {
    padding: "10px",
    height: "820px",
    backgroundColor: "#dad7cd",
    alignContent: "center",
    margin: "auto",
  },
  location: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "20px",
    width: "50%",
    height: "80%",
  },
 
}));

export default function Home() {
  const classes = useStyles();

  const AddressMap = () => {
    return (
      <div className="google-map-code">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7726712590606!2d176.1427823831943!3d-37.69165859892387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddba54b313f6f%3A0x5bbc6581a27dc865!2s36%20Sutherland%20Road%2C%20Judea%2C%20Tauranga%203110!5e0!3m2!1sen!2snz!4v1672275818707!5m2!1sen!2snz" width="100%" height="600px" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    )
  }

  return (
    <>
      <MenuHome />

      <div className={classes.heroDiv}>
        <Paper className={classes.hero} elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className={classes.heroimg}
                elevation={3}
                src="/marli.png"
                alt="marli"
              />
            </Grid>

            <Grid item xs={12} style={{marginBottom: "70px"}}>
              <Typography variant="h3" className={classes.headingText}>
                Marli de Klerk
              </Typography>
              <Typography variant="h4" className={classes.headingText}>
                Child & Adolescent Psychotherapist
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <Paper className={classes.infoDiv} 
          sx = {{
            boxShadow: '8px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
          }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Card className={classes.infoCard} elevation={6}>
              <Typography variant="h5" className={classes.infoCardHeader}>
                About Me
              </Typography>
              <Typography variant="body2" style={{width: "80%", margin: "auto"}} className={classes.infoCardHeader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <Card className={classes.infoCard} elevation={6}>
              <Typography variant="h5" className={classes.infoCardHeader}>
                Services
              </Typography>
              <Typography variant="body2" style={{width: "80%", margin: "auto"}} className={classes.infoCardHeader}>
                . Lorem ipsum dolor sit amet, consectetuer <br />
                . Aliquam tinciduntmauris eu risus. <br />
                . Vestibulum auctor dapibus neque. <br />
                . Nuncdignissim risus id metus. <br />. Vestibulum auctor
                dapibus neque.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      <div>
        <Paper className={classes.cardMap}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ height: "200px", margin: "auto" }}>
              <Card className={classes.location} elevation={4}>
                <Typography className={classes.infoCardHeader} style={{textDecoration: "underline #a3b18a"}}>Location</Typography>
                <Typography className={classes.infoCardHeader}>
                  Bethlehem Psycological Services <br />
                  36 Sutherland Road <br />
                  Brookfield <br />
                  Tauranga
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} className={classes.map}>
            <AddressMap/>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

