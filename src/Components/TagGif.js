import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import useGif from "../custom-hook/useGif";
import { Button, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    textAlign:'center',
    marginTop: '10px'
  },
  media: {
    width: "600",
    paddingTop: "56.25%", // 16:9
  },
}));

const TagGif = () => {
    const [tag, setTag] = useState("Finland");
  const classes = useStyles();
  const { gif, fetchGif } = useGif();

  const handleClick = (e) => {
    e.preventDefault();
    fetchGif(tag);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Random {tag} GIF</Typography>
     

      <CardMedia className={classes.media} image={gif} /><br></br>
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <Button onClick={handleClick} variant="contained" color="default" size="small">Click for New</Button>
      </CardContent>
    </Card>
  );
};

export default TagGif;






