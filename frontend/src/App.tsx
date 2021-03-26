import { makeStyles } from "@material-ui/core";
import React from "react";
import Home from "./pages/Home";

const useStyles = makeStyles({
  root: {
    color: "white",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const App: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
};

export default App;
