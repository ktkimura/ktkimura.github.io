import React from "react";
import ReactPlayer from "react-player";

const LetsGetCookingPage = () => {
  return (
    <>
      <section>
        <h1>Let's Get Cooking!</h1>
        <p>
          Software Engineering I Term Project &nbsp;&nbsp;●&nbsp;&nbsp;
          October-December 2024 &nbsp;&nbsp;●&nbsp;&nbsp;{" "}
          <a href="https://github.com/ktkimura/cs361-lets-get-cooking">
            Github Repo
          </a>
        </p>
      </section>
      <hr></hr>
      <section>
        <p>
          This page is currently under construction, but I have included video
          demos of the Figma prototype and coded implementation below:
        </p>
      </section>
      <section>
        <h2>Figma Prototype Demo Video</h2>
        <p>
          <strong>Note:</strong> Silent video. Highlights UX design choices.
        </p>
        <div className="projectDivFrame">
          <ReactPlayer
            url="/videos/CS361_PrototypeDemo.mp4"
            controls={true}
            className="reactPlayer"
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
      </section>
      <section>
        <h2>Code Demo Video</h2>
        <p>
          <strong>Note:</strong> Includes voiceover and burnt-in subtitles.
        </p>
        <div className="projectDivFrame">
          <ReactPlayer
            url="/videos/letsGetCookingDEMO.mp4"
            controls={true}
            className="reactPlayer"
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
      </section>

      {/* <section>
        <h2>Project Overview</h2>
        <div>
          <div>
            <h3>Challenge</h3>
            <p></p>
          </div>
        </div>
      </section>
      <hr></hr>
      <section>
        <h2>The Process</h2>
      </section>
      <hr></hr>
      <section>
        <h2>Final Thoughts</h2>
      </section> */}
    </>
  );
};

export default LetsGetCookingPage;
