import {
  Collapse,
  createStyles,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";
import { Send, Close } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import React, { useContext, useEffect, useState } from "react";
import { classify_review } from "../services/api";
import { Context } from "../store/Context";
import { actionsTypes } from "../store/reducer";

interface IMovieReviewFormBox {
  onSubmit: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: "2px 4px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

const CloseAlert: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={props.onClick}
    >
      <Close fontSize="inherit" />
    </IconButton>
  );
};

const MovieReviewFormBox: React.FC<IMovieReviewFormBox> = (props) => {
  const { dispatch } = useContext(Context);
  const [text, setText] = useState("");
  const [alertCase, setAlertCase] = useState("");
  const [textError, setTextError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    text.length >= 141 ? setTextError(true) : setTextError(false);
  }, [text]);

  useEffect(() => {
    if (alertCase !== "") setTimeout(() => setAlertCase(""), 5000);
  }, [alertCase]);

  function handleSendInputText() {
    if (text.length >= 141 || text.length === 0) {
      setTextError(true);
      setAlertCase("UserError");
    } else {
      setTextError(false);

      dispatch({
        type: actionsTypes.REGISTER_REVIEW,
        payload: { review: text },
      });

      props.onSubmit();

      classify_review(text).then((result) => {
        console.log(result);
        dispatch({
          type: actionsTypes.REGISTER_RESULT,
          payload: { result },
        });
        setAlertCase("TextSent");
      });
    }
  }

  function alertMessage(alert: string): JSX.Element {
    switch (alert) {
      case "TextSent":
        return (
          <Alert severity="success">Your review was sent sucessfully! :)</Alert>
        );
      case "UserError":
        return (
          <Alert
            severity="warning"
            action={
              <CloseAlert
                onClick={() => {
                  setAlertCase("");
                }}
              />
            }
          >
            Text has to be grater than 0 and smaller than 140 characters.
          </Alert>
        );
      default:
        return <></>;
    }
  }

  return (
    <Grid
      style={{ margin: "20px 0px" }}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Paper
        component="form"
        style={{ width: "80%" }}
        elevation={0}
        className={classes.paper}
      >
        <TextField
          className={classes.input}
          error={textError}
          helperText={textError ? text.length + "/140" : text.length + "/140"}
          label="Deixe seu Feedback"
          multiline
          rows={2}
          placeholder="O que você achou do filme?"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  className={classes.iconButton}
                  onClick={handleSendInputText}
                >
                  <Send></Send>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <Collapse style={{ margin: "5px 5px" }} in={!!alertCase.length}>
        {alertMessage(alertCase)}
      </Collapse>
    </Grid>
  );
};

export default MovieReviewFormBox;
