import React from "react";
import "./Social.scss";

const Social = ({ logo, value, link}) => {
  return (
    <div className="social">
    <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={logo} alt='title' />
      <h1>{value}</h1>
      </a>
    </div>
  );
};

export default Social;
