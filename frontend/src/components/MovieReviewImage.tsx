import { Grid } from "@material-ui/core";
import React from "react";

const MovieReviewImage: React.FC<{ src: string; alt: string }> = (props) => {
  return (
    <Grid container direction="row" justify="center">
      <img
        style={{ height: 300, width: 200 }}
        src={props.src}
        alt={props.alt}
      />
    </Grid>
  );
};

export default MovieReviewImage;
