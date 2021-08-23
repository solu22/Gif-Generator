import React from "react";

import RandomGif from "./RandomGif";
import TagGif from "./TagGif";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "10px",
    marginLeft: "375px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid Container className={classes.gridContainer} spacing={4}>
      <Grid item xs>
        <RandomGif />
      </Grid>
      <Grid item xs>
        <TagGif />
      </Grid>
    </Grid>
  );
};

export default Home;
