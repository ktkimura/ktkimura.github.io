import React from "react";

const BeaverHubPage = () => {
  return (
    <>
      <section>
        <h1>Beaverhub Redesign</h1>
        <p>
          PSY 446 Term Project &nbsp;&nbsp;●&nbsp;&nbsp; October-December 2024
        </p>
      </section>
      <section>
        <div className="projectImages">
          <img
            src={require("../../images/beaverhub/bh-old-home.png")}
            alt="Current Beaverhub Home Page UI"
            className="overviewImage"
          ></img>

          <img
            src={require("../../images/beaverhub/bh-new-home.png")}
            alt="Redesigned Beaverhub Home Page UI"
            className="overviewImage"
          ></img>
        </div>
      </section>
      <section>
        <h2>Project Overview</h2>
        <div>
          <div>
            <h3>Challenge</h3>
            <p>
              Something that most Oregon State University (OSU) students can
              agree on is the unintuitive and inefficient interface of
              Beaverhub, a university-developed application meant to be a
              centralized platform for students to manage their academic,
              financial, and scheduling needs. To mitigate these issues, I
              collaborated with fellow OSU students to redesign Beaverhub’s
              interface to better facilitate a positive user experience.{" "}
            </p>
          </div>
        </div>
        <div className="threeColumnDiv">
          <div className="columnDiv">
            <h3>Team</h3>
            <ul>
              <li>Katie Kimura</li>
              <li>Daniel Thien</li>
              <li>Ellie Herber</li>
              <li>Sydney Stupp</li>
            </ul>
          </div>
          <div className="columnDiv">
            <h3>Goals</h3>
            <ul>
              <li>Improve the home page's practicality</li>
              <li>Reimagine how information is displayed</li>
              <li>Reduce the number of page redirections</li>
            </ul>
          </div>
          <div className="columnDiv">
            <h3>Impact</h3>
            <ul>
              <li>
                Improved customization of interface by{" "}
                <mark class="stat">105%</mark>
              </li>
              <li>
                Reduced time to find key student information (GPA, bills,
                schedule) by <mark class="stat">61%</mark>
              </li>
              <li>
                Reduced users' cognitive load by <mark class="stat">87.5%</mark>{" "}
                when reading schedule information
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr></hr>
      <section>
        <h2>The Process</h2>
        <div>
          <h3>Research</h3>
          <div>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQCZS7QgzTNb765gq7BOfFlxcV4BiWBrPm2C3M9QCF4-Tnl9H78HA6M7HD4TkYNg97bNide88QeCewV/embed?start=false&loop=false"
              title="Static Interactive Beaverhub"
              frameborder="0"
              width="960"
              height="569"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
          <p>
            The first step we took towards redesigning Beaverhub was evaluating
            its current interface and user experience by developing user
            personas and conducting an observational study.{" "}
          </p>
          <h4>User Personas</h4>
          <div>
            <div className="userPersona">
              <img
                src={require("../../images/beaverhub/susan.png")}
                alt="Icon of a woman"
                className="personaImage"
              ></img>
              <div>
                <p>Susan</p>
                <ul>
                  <li>35 years old</li>
                  <li>Part-time Student</li>
                  <li>Pre-med Major</li>
                  <li>Ecampus Student</li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            When evaluating Beaverhub through these users’ lenses, we were able
            to pinpoint areas we could possibly improve upon:
          </p>
          <h4>Observational Study</h4>
          <p>
            I conducted an observational study an OSU student to better
            understand how they interacted with the Beaverhub interface. Results
            of the study were in line with to our takeaways from the user
            stories evaluation, with the participant...
          </p>
          <ul>
            <li>reporting they rarely use Beaverhub </li>
            <li>
              quickly navigating away from pages with irrelevant information
              (e.g., Tasks page)
            </li>
            <li>
              expressing desire for more relevant information on the home page
            </li>
          </ul>
        </div>
        <div>
          <h3>Development</h3>
          <div>
            <h4>Scope & Focus Features</h4>
          </div>
          <div>
            <h4>Requirements</h4>
            <p>
              With a more comprehensive understanding of how to improve
              Beaverhub’s interface, we completed a requirements analysis for
              what changes we wanted to make. This process consisted of three
              steps:
            </p>
            <ol>
              <li>
                Define requirements for both functional and user experience
              </li>
              <li>
                Categorize requirements as physical, psychological (cognitive,
                perceptual, emotional, etc.), or technological
              </li>
              <li>Rank requirements in order of overall importance</li>
            </ol>
            <p>
              In the end, we had created 18 requirements. Eight of them were
              functional and the remaining 10 were for user experience. We
              ensured we were ready to start developing our prototype, by
              conducting a heuristic analysis of our 18 requirements using&nbsp;
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                target="_blank"
                rel="noreferrer"
              >
                Nielsen’s 10 Usability Heuristics
              </a>
              &nbsp;and documenting how we planned each heuristic to be
              fulfilled.
            </p>
          </div>
          <div>
            <h4>Prototype</h4>
            <iframe
              title="Figma Prototype Embed"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="100%"
              height="600em"
              src="https://embed.figma.com/proto/hpbqhz40CtQvBMhNVitGah/PSY446-Lab-5?node-id=116-918&starting-point-node-id=116%3A918&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h3>Evaluation</h3>
          <h4>Usability Studies</h4>
          <h4>Study Results & Findings</h4>
        </div>
      </section>
      <hr></hr>
      <section>
        <h3>Final Thoughts</h3>
        <p>
          If this project were to have continued, we would have aimed to present
          a more refined and functional product to OSU’s student government
          (ASOSU) to hopefully facilitate a discussion on how to improve
          students’ experience using Beaverhub. While this team has been
          disbanded, I have been considering building off this project for my
          senior project, where I will have an entire school year for
          development. 
        </p>
      </section>
    </>
  );
};

export default BeaverHubPage;

// eslint-disable-next-line
{
  /* <div className="timeline">
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 10, 2024</h4>
              <p>Identifying a Topic</p>
              <p>
                Given that the main idea of the term project was to redesign an
                interface we were somewhat familiar with and had some potential
                areas of improvement, my group immediately thought of Beaverhub
                as we have all had to use it at one point or another and each
                had our gripes with its interface. We found the following major
                pain points:
              </p>
              <ul>
                <li>Access information on class schedule and assignments</li>
                <li>
                  Track tasks to complete and access other personalized content
                  that supports one’s educational journey
                </li>
                <li>
                  Quickly find offices and resources Locate resources and mark
                  them as favorites
                </li>
              </ul>
              <p>
                However, due to the relatively short period of time we had to
                work on getting a fully-functional and user-tested prototype
                done, we chose to focus on improving Beaverhub’s home/landing
                page as it is the first thing that users see and thus should
                have the most important information displayed in a way that can
                be effectively interpreted.
              </p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <h4>October 17, 2024</h4>
              <p>Developing User Stories</p>
              <p>
                To combat the fact that the group was composed of members of a
                similar demographic, we developed two user stories to better
                evaluate Beaverhub’s usability. Our first user, Bobby, was
                denoted as the “average” user of Beaverhub as an 18 year-old
                full-time business student attending OSU in-person. Our other
                user, Susan, was denoted as a more “fringe” user of BeaverHub as
                she is a 35-year-old part-time asynchronous Ecampus student
                completing her pre-med path at OSU. When evaluating Beaverhub
                through these users’ lenses, we were able to pinpoint areas of
                improvement that we had either overlooked or hadn’t considered.
                Ultimately, it was apparent to us that even if we try to account
                for as many users as possible, we ultimately are limited by our
                own experiences and perceptions, making it imperative to
                constantly scrutinize our design choices for possible usability
                issues or areas of improvement to accommodate as many users as
                possible.
              </p>
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
        <h2 id="conclusion">Conclusion</h2>
        <p>
          Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla
          labore amet culpa exercitation. Adipisicing occaecat exercitation elit
          duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat
          pariatur magna proident qui in aliqua. Elit ullamco laborum esse eu
          irure sunt quis.
        </p> */
}
