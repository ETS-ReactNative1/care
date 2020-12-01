import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoodsContainer from "../../../containers/MoodsContainer";
import Layout from '../../../layouts/Layout/Layout'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    maxWidth: '95vw',
    // marginLeft: '20px',
   margin: '0 auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular
  },
  accordion: {
    marginTop: "20px",
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout title="Home">
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mood</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="content-container">
            <MoodsContainer />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Affirmations</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Symptoms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="content-container">
            <MoodsContainer />
          </div>
        </AccordionDetails>
       </Accordion>
      </div>
      </Layout>
  );
}
