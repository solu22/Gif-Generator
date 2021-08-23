import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import useGif from "../custom-hook/useGif";
import { Button, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    width: "600",
    paddingTop: "56.25%", // 16:9
  },
}));

const RandomGif = () => {
  const classes = useStyles();
  const { gif, fetchGif } = useGif();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography style = {{textAlign: 'center'}}>Random  GIF </Typography>

      <CardMedia className={classes.media} image={gif} /><br></br>
      <Button onClick={fetchGif} style= {{ textAlign: 'center'}} variant="contained" color="primary" size="small">Click for New</Button>
    </CardContent>
    </Card>
  );
};

export default RandomGif;
