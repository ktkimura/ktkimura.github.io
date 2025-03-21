import React from "react";

const BeaverHubPage = () => {
  return (
    <>
      <section>
        <h2>Beaverhub Redesign</h2>
        <p>Term/Course: Fall 2024/PSY 446</p>
        <a
          href="https://www.figma.com/proto/hpbqhz40CtQvBMhNVitGah/PSY446-Lab-5?node-id=116-918&starting-point-node-id=116%3A918&t=nybA54bNK6TqvT9L-1"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Prototype Available Here
        </a>
      </section>
      <section>
        <h3>Problem Statement</h3>
        <p>
          Beaverhub is a website created by Oregon State University (OSU) that
          acts as a “one-stop hub for tools and resources that support
          [students’] OSU experience” (https://uit.oregonstate.edu/beaver-hub).
          Functionalities listed by OSU themselves are as follows:
        </p>
        <ul>
          <li>Connect with advisors and other members of Success Team</li>
          <li>Access information on class schedule and assignments</li>
          <li>
            Track tasks to complete and access other personalized content that
            supports one’s educational journey
          </li>
          <li>Quickly find offices and resources</li>
          <li>Locate resources and mark them as favorites</li>
        </ul>
        <p>
          While Beaverhub <em>does</em> succeed in offering these
          functionalities, the interface it hosts these services on are in need
          of improvement as many OSU students hold negative sentiment towards
          using the resource and/or only use it out of necessity. Thus, this
          redesign project aimed to make Beaverhub's interface more
          user-friendly and customizable, with an overall goal of creating a
          more positive experience for users.
        </p>
      </section>
      <section>
        <h3>Project Details</h3>
        <section>
          <h4 id="context">Context/Constraints</h4>
          <ul>
            <li>Group Project (4 people)</li>
            <ul>
              <li>Team Members: Daniel Thien, Ellie Herber, Sydney Stupp</li>
            </ul>
            <li>~10 week long project</li>
            <li>No access to Beaverhub source code</li>
          </ul>
        </section>
        <section>
          <h4 id="goals">Goals</h4>
          <ul>
            <li>Improve the home page's practicality</li>
            <li>Reimagine how information is displayed</li>
            <li>Reduce the number of page redirections</li>
          </ul>
        </section>
      </section>
      <section>
        <h3 id="timeline">Timeline</h3>

        <div className="timeline">
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 10, 2024</h4>
              <p>Identifying a Topic</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 17, 2024</h4>
              <p>Developing User Stories</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 24, 2024</h4>
              <p>Developing User Requirements</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 31, 2024</h4>
              <p>Performing a Heuristic Analysis</p>

              <p>Conducting an Observational Test</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>November 7, 2024</h4>
              <p>Creating Initial Prototype</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>November 14, 2024</h4>
              <p>Developing a Testing Plan</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>November 21, 2024</h4>
              <p>Aggregating Testing Results and Summarizing</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>December 4, 2024</h4>
              <p>Revising Prototype</p>

              <p>Writing Documentation</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 id="conclusion">Conclusion</h3>
        <p>
          Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla
          labore amet culpa exercitation. Adipisicing occaecat exercitation elit
          duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat
          pariatur magna proident qui in aliqua. Elit ullamco laborum esse eu
          irure sunt quis.
        </p>
      </section>
      <section>
        <h3 id="futureActions">Future Actions</h3>
        <p>
          Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla
          labore amet culpa exercitation. Adipisicing occaecat exercitation elit
          duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat
          pariatur magna proident qui in aliqua. Elit ullamco laborum esse eu
          irure sunt quis.
        </p>
      </section>
    </>
  );
};

export default BeaverHubPage;
