import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const MovieReviewtitle: React.FC<{ text: string }> = (props) => {
  const classes = useStyles();

  return <p className={classes.root}>{props.text}</p>;
};

export default MovieReviewtitle;
