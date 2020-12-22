import React from "react";
import "./homePage.css";
import ImageButton from "./ImageButton";

function HomePage() {
  return (
    <React.Fragment>
      <div className="intro">
        <div className="intro-presentation">
          <div className="intro-presentation-item name">
            <h1>David Güere</h1>
          </div>
          <div className="intro-presentation-item line"></div>
          <ul className="intro-presentation-item positions">
            <li>Energy engineer</li>
            <li>Nuclear engineer</li>
            <li>Web developer</li>
            <li>Photographer</li>
          </ul>
        </div>
      </div>
      <div className="about-content">
        <div className="about-container">
          <div className="about-container-item text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, eligendi dignissimos? Aliquid animi voluptate
              repudiandae alias praesentium deleniti aliquam tenetur, soluta,
              quisquam illo autem doloribus tempora quasi quia reiciendis vitae.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              aliquam, eius suscipit impedit fugit veniam saepe velit quod
              nesciunt officiis voluptatem tenetur perspiciatis quasi nisi
              deleniti ut dicta voluptatum numquam.
            </p>
          </div>
          <img
            className="about-container-item picture"
            src="/images/me.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="content">
        <ImageButton
          idVidContainer="c1"
          idVid="v1"
          src="/videos/engineering.mp4"
          text="Engineering"
          videoContainer="videoContainer1"
          video="video1"
          link="/cv"
        />
        <ImageButton
          idVidContainer="c2"
          idVid="v2"
          src="/videos/photo.mp4"
          text="Photography"
          videoContainer="videoContainer2"
          video="video2"
          link="/photo"
        />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
