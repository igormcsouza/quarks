import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import MovieReviewBox from "../components/MovieReviewBox";
import MovieReviewFeedback from "../components/MovieReviewFeedback";
import MovieReviewFormBox from "../components/MovieReviewFormBox";
import MovieReviewImage from "../components/MovieReviewImage";
import MovieReviewtitle from "../components/MovieReviewtitle";
import { Context } from "../store/Context";

const Home: React.FC<{}> = () => {
  const { state } = useContext(Context);
  const [process, setProcess] = useState("write");

  useEffect(() => {
    if (state.result !== "") {
      setProcess("feedback");
    }
  }, [state.result]);

  function renderProcess(param: string) {
    switch (param) {
      case "write":
        return (
          <>
            <MovieReviewtitle text="MovieTitle" />
            <MovieReviewImage
              src="https://via.placeholder.com/300x444"
              alt="placeholder"
            />
            <MovieReviewFormBox onSubmit={() => setProcess("wait")} />
          </>
        );
      case "wait":
        return (
          <>
            <CircularProgress />
          </>
        );
      case "feedback":
        return (
          <>
            <MovieReviewFeedback />
          </>
        );
      default:
        return "...";
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <MovieReviewBox>{renderProcess(process)}</MovieReviewBox>
    </div>
  );
};

export default Home;
