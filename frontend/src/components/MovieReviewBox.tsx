import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const MovieReviewBox: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" style={{ height: "100%", width: "100%" }}>
      <Grid item className={classes.root} xs={10} md={6}>
        <Paper className={classes.root} variant="outlined">
          {props.children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MovieReviewBox;
