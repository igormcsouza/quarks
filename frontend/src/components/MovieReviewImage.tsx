import React from "react";

const MovieReviewImage: React.FC<{ src: string; alt: string }> = (props) => {
  return (
    <div>
      {props.src} and {props.alt}
    </div>
  );
};

export default MovieReviewImage;
