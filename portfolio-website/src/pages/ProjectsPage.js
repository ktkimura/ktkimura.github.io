import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <h2>Projects</h2>
      <Link to="/projects/beaverhub">BeaverHub Redesign</Link>
      <Link to="/projects/letsGetCooking">Let's Get Cooking</Link>
      <Link to="/projects/myMail">My Mail</Link>
    </>
  );
};

export default ProjectsPage;
