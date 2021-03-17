import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  paper: {
    height: 600,
    width: 500,
  },
});

const MovieReviewBox: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.paper} variant="outlined">
        {props.children}
      </Paper>
    </Grid>
  );
};

export default MovieReviewBox;
