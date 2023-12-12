import React from "react";
import "./Tag.scss";

const Tag = ({ value }) => {
  return (
    <div className="tag">
      <h2 className="value">{value}</h2>
    </div>
  );
};

export default Tag;
