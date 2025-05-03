import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section id="intro" className="homeProfile">
        <div className="profileImage">
          <img
            src="/images/katieKimuraHeadshot2025.jpg"
            alt="My headshot"
          ></img>
        </div>

        <div className="homeIntro">
          <h1>Hi, I'm Katie!</h1>
          <p>
            I bridge the gap between software development and design to advocate
            for better user experiences
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
        <h1 className="homeH1">Projects</h1>
        <div className="projectLinksDiv">
          <Link to="/beaverhub" className="projectTitle">
            <img
              src="/images/beaverhub/bh-new-home.png"
              alt="Beaverhub Redesign Project"
              className="projectPageImage"
            />
            <p>Beaverhub Redesign</p>
            <div className="projectTags">
              <span className="tag">Web Interface Redesign</span>
              <span className="tag">User Research</span>
              <span className="tag">Figma</span>
              <span className="tag">User Personas</span>
            </div>
          </Link>

          <Link to="financeApp" className="projectTitle">
            <img
              src="/images/financeApp/finance-thumbnail.png"
              alt="Finance Overview Mobile App"
              className="projectPageImage"
            />
            <p>Finance Overview Mobile App</p>
            <div className="projectTags">
              <span className="tag">Mobile App Design</span>
              <span className="tag">User Research</span>
              <span className="tag">Figma</span>
              <span className="tag">Wireflows</span>
            </div>
          </Link>

          <Link to="letsGetCooking" className="projectTitle">
            <img
              src="/images/letsGetCooking/cooking-home.png"
              alt="Let's Get Cooking Project"
              className="projectPageImage"
            />
            <p>Let's Get Cooking!</p>
            <div className="projectTags">
              <span className="tag">Web App</span>
              <span className="tag">Agile Development</span>
              <span className="tag">Microservices</span>
              <span className="tag">React.js</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
