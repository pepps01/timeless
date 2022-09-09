import React from "react";

const ImageComponent = ({ src, className }) => {
  return (
    <div className={className}>
      <img src={`/images/${src}`} alt="img"></img>
    </div>
  );
};

export default ImageComponent;