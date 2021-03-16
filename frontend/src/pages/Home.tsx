import React, { useState } from "react";
import MovieReviewBox from "../components/MovieReviewBox";
import MovieReviewFormBox from "../components/MovieReviewFormBox";
import MovieReviewImage from "../components/MovieReviewImage";
import MovieReviewtitle from "../components/MovieReviewtitle";

const Home: React.FC<{}> = () => {
  const [process, setProcess] = useState("write");

  function renderProcess(param: string) {
    switch (param) {
      case "write":
        return (
          <>
            <MovieReviewtitle text="MovieTitle" />
            <MovieReviewImage src="url" alt="alt" />
            <MovieReviewFormBox onSubmit={() => setProcess("waiting")} />
          </>
        );
      default:
        return "...";
    }
  }

  return (
    <div>
      <MovieReviewBox>{renderProcess(process)}</MovieReviewBox>
    </div>
  );
};

export default Home;
