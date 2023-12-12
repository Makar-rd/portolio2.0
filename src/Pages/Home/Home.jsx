import React from "react";
import "./Home.scss";
import photo from "../../assets/photo.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <div>
            <h1 className="txt">MA</h1>
            <h1 className="txt">KA</h1>
          </div>

          <h1 className="txt lg">R</h1>

          <div className="dev">
            FRONTEND <b>DEVELOPER</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Home;
