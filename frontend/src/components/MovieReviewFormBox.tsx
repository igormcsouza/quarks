import { Grid, IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

interface IMovieReviewFormBox {
  onSubmit: () => void;
}

const MovieReviewFormBox: React.FC<IMovieReviewFormBox> = (props) => {
  const [text, setText] = useState("");
  const [textError, setTextError] = useState(false);

  useEffect(() => {
    text === "" ? setTextError(true) : setTextError(false);
  }, [text]);

  function handleSendInputText() {
    return;
  }

  return (
    <Grid
      style={{ margin: "20px 0px" }}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <TextField
        id="outlined-multiline-static"
        error={textError}
        helperText={text === "" ? "O campo não pode está vazio, tá?" : ""}
        style={{ width: "65%" }}
        label="Deixe seu Feedback"
        multiline
        rows={2}
        placeholder="O que você achou do filme?"
        variant="outlined"
        onChange={(e) => setText(e.target.value)}
      />
    </Grid>
  );
};

export default MovieReviewFormBox;
