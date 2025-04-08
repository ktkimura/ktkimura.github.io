import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="projectLinksDiv">
        <Link to="/projects/beaverhub" className="projectTitle">
          <img
            src={require("../images/beaverhub/bh-new-home.png")}
            alt="Beaverhub Redesign Project"
            className="projectPageImage"
          />
          <p>Beaverhub Redesign</p>
        </Link>

        <Link to="/projects/financeApp" className="projectTitle">
          <img
            src={require("../images/financeApp/finance-thumbnail.png")}
            alt="Finance Overview Mobile App"
            className="projectPageImage"
          />
          <p>Finance Overview Mobile App</p>
        </Link>

        <Link to="/projects/letsGetCooking" className="projectTitle">
          <img
            src={require("../images/letsGetCooking/cooking-home.png")}
            alt="Let's Get Cooking Project"
            className="projectPageImage"
          />
          <p>Let's Get Cooking!</p>
        </Link>
      </div>
    </>
  );
};

export default ProjectsPage;
