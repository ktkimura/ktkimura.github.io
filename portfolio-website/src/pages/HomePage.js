import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section id="intro" className="homeProfile">
        <div className="profileImage">
          <img
            src={require("../images/katieKimuraHeadshot2025.jpg")}
            alt="My headshot"
          ></img>
        </div>

        <div className="homeIntro">
          <h1>Hi, I'm Katie!</h1>
          <p>
            I bridge the gap between software development and design to advocate for better user
            experiences
          </p>
          <div className="socials">
            <a
              href="https://github.com/ktkimura"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/katiekimura/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              LinkedIn
            </a>
            <a href="mailto:katiekimura2022@gmail.com" className="button">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <div className="projectLinksDiv">
          <Link to="/beaverhub" className="projectTitle">
            <img
              src={require("../images/beaverhub/bh-new-home.png")}
              alt="Beaverhub Redesign Project"
              className="projectPageImage"
            />
            <p>Beaverhub Redesign</p>
          </Link>

          <Link to="financeApp" className="projectTitle">
            <img
              src={require("../images/financeApp/finance-thumbnail.png")}
              alt="Finance Overview Mobile App"
              className="projectPageImage"
            />
            <p>Finance Overview Mobile App</p>
          </Link>

          <Link to="" className="projectTitle">
            <img
              src={require("../images/letsGetCooking/cooking-home.png")}
              alt="Let's Get Cooking Project"
              className="projectPageImage"
            />
            <p>Let's Get Cooking! [UNDER CONSTRUCTION]</p>
          </Link>
        </div>
      </section>
      {/* <section id="research">
        <h1>Research</h1>
      </section> */}
    </>
  );
};

export default HomePage;
