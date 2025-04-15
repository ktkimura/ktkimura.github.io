import React from "react";

const BeaverHubPage = () => {
  return (
    <>
      <section>
        <h1>Beaverhub Redesign</h1>
        <p>
          Psychology of HCI (PSY 446) Term Project &nbsp;&nbsp;●&nbsp;&nbsp;
          October-December 2024
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
        <div className="multiColumnDiv">
          <div>
            <h3>Team</h3>
            <ul>
              <li>Katie Kimura</li>
              <li>Daniel Thien</li>
              <li>Ellie Herber</li>
              <li>Sydney Stupp</li>
            </ul>
          </div>
          <div>
            <h3>Goals</h3>
            <ul>
              <li>Improve the home page's practicality</li>
              <li>Reimagine how information is displayed</li>
              <li>Reduce the number of page redirections</li>
            </ul>
          </div>
          <div>
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
          <p>
            To get a better understanding of Beaverhub’s pain points, we first
            developed user personas to evaluate its interface and user
            experience through different user lenses. Then, we conducted an
            observational study of an OSU student interacting with Beaverhub to
            see if there was anything we missed in our evaluation.
          </p>
          <p>
            Given that Beaverhub requires you to be an OSU student to access it,
            I collected screenshots of its various pages (with sensitive
            information redacted) to create a semi-interactive replica (see
            <strong> Figure 1</strong> below). Elements surrounded by a red box
            will redirect you to different views if clicked on.
          </p>
          <div className="projectDivFrame">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQCZS7QgzTNb765gq7BOfFlxcV4BiWBrPm2C3M9QCF4-Tnl9H78HA6M7HD4TkYNg97bNide88QeCewV/embed?start=false&loop=false"
              title="Static Interactive Beaverhub"
              frameborder="0"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
          <p>
            <strong>Figure 1.</strong> Static version of Beaverhub.
          </p>
          <h4>User Personas</h4>
          <div className="personasDiv">
            <div className="userPersona">
              <img
                src={require("../../images/beaverhub/susan.png")}
                alt="Icon of a woman"
                className="personaImage"
              ></img>
              <div className="personaDesc">
                <p>
                  <strong>Susan</strong> ("Fringe" User)
                </p>
                <ul>
                  <li>35 years old</li>
                  <li>Part-time Student</li>
                  <li>Pre-med Major</li>
                  <li>Ecampus Student</li>
                </ul>
              </div>
            </div>
            <div className="userPersona">
              <img
                src={require("../../images/beaverhub/bobby.png")}
                alt="Icon of a man"
                className="personaImage"
              ></img>
              <div className="personaDesc">
                <p>
                  <strong>Bobby</strong> ("Average" User)
                </p>
                <ul>
                  <li>18 years old</li>
                  <li>Full-time Student</li>
                  <li>Business Major</li>
                  <li>In-person Student</li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            When evaluating Beaverhub through these users’ lenses, we were able
            to determine Beaverhub’s three major pain points which we eventually
            turned into our redesign’s goals:
          </p>
          <div>
            <ol>
              <li>
                The home page has set modules of information that are assumed to
                be the most relevant to users when in reality, users have
                different needs and wants, making the inclusion of certain home
                page modules useless and sometimes detrimental to the user
                experience as it just takes up screen space
              </li>
              <ul>
                <li>
                  <strong>Example:</strong> As an Ecampus student, Susan rarely
                  has synchronous classes that she needs to track in the
                  schedule module (asynchronous online classes do not display in
                  the module) and thus is rarely using it despite the amount of
                  screen space it takes up the her home page.
                </li>
              </ul>
              <div className="projectDivImg">
                <img
                  src={require("../../images/beaverhub/bh-schedule-highlight.png")}
                  alt="Screenshot of current Beaverhub interface with schedule module highlighted in a yellow overlay."
                ></img>
              </div>
              <p>
                <strong>Figure 2.</strong> Schedule module on Beaverhub home
                page.
              </p>
              <div className="goalDiv">
                <p>
                  <strong>Goal 1:</strong> Improve the home page's practicality
                </p>
              </div>
              <li>
                Similar to the previous point, we found that information is
                scattered across several pages, forcing users to switch between
                pages to get what they need. Given that there is not much
                information on each page anyways, condensing and/or relocating
                certain modules of information onto one page would not be
                detrimental to the user experience.
              </li>
              <ul>
                <li>
                  <strong>Example:</strong> Susan mainly uses Beaverhub to
                  quickly check up on her academic and financial information,
                  which are located on two separate pages that she has to
                  navigate to from the home page.
                </li>
              </ul>
              <div className="projectDivImg">
                <img
                  src={require("../../images/beaverhub/bh-academic-finance-switch.gif")}
                  alt="GIF of user navigating between the Academics and Finances pages."
                ></img>
              </div>
              <p>
                <strong>Figure 3.</strong> Switching between the Academics and
                Finances page.
              </p>
              <div className="goalDiv">
                {" "}
                <p>
                  <strong>Goal 2:</strong> Reduce the number of page
                  redirections
                </p>
              </div>
              <li>
                The schedule module on the home page is not presented in an
                intuitive or familiar manner. Students can only see one day’s
                worth of classes at a time and are limited to viewing five days
                at any given time.
              </li>
              <ul>
                <li>
                  <strong>Example:</strong> Bobby dislikes the format of the
                  schedule module as he is used to a time-block schedule format
                  since he always uses it when creating his schedule every term.
                </li>
              </ul>
              <div>
                <img
                  src={require("../../images/beaverhub/timeblock-schedule.png")}
                  alt="Screenshot of a timeblock schedule."
                ></img>
              </div>
              <p>
                <strong>Figure 4.</strong> Example of an OSU student's timeblock
                schedule layout when signing up for courses.
              </p>
              <div className="goalDiv">
                {" "}
                <p>
                  <strong>Goal 3:</strong> Reimagine how information is
                  displayed
                </p>
              </div>
            </ol>
          </div>
          <h4>Observational Study</h4>
          <p>
            We had one observational study with an OSU student, which I
            conducted, to better understand how they interacted with the
            Beaverhub interface. Results of the study were in line with our
            takeaways from our evaluation using user personas.
          </p>
        </div>
        <div>
          <h3>Development</h3>
          <div>
            <h4>Requirements</h4>
            <p>
              With a more comprehensive understanding of how to improve
              Beaverhub’s interface, we developed a list of requirements to
              organize the changes we wanted to make, ending up with 10
              functional requirements and 8 user experience requirements,
              totaling to 18 requirements. We then ranked each requirement to
              help guide our development process and ensure we prioritized the
              most crucial ones. Finally, we conducted a heuristic analysis of
              our requirements using&nbsp;
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                target="_blank"
                rel="noreferrer"
              >
                Nielsen’s 10 Usability Heuristics
              </a>
              &nbsp;to check if we weren’t adequately fulfilling any heuristic.
              This led to us adding on four more requirements, resulting in a
              total of 22 requirements.
            </p>
          </div>
          <div>
            <h4>Prototype</h4>
            <p>
              With an ample amount of information to drive the development of a
              functional prototype, we began the prototyping process by
              individually sketching out possible designs for the home page.
            </p>
            <div className="projectDivImg">
              <img
                src={require("../../images/beaverhub/sketch-1.jpg")}
                alt="A rough sketch of ideas including an Edit Mode feature, collapsible tool bar, and movable modules."
              ></img>
            </div>
            <p>
              <strong>Figure 5.</strong> My initial sketch of possible ideas to
              implement.
            </p>
            <p>
              I was particularly inspired in creating an “Edit Mode” feature for
              the home page, which would allow users to directly edit both the
              visual layout of their home page but also toggle which information
              modules they wanted to display.
            </p>
            <p>
              When deciding on the visuals and interactions that Edit Mode would
              have, I drew inspiration from iPhone’s app rearrangement feature (
              <strong>Figure 6</strong>) and Canvas’ dashboard card moving
              feature (<strong>Figure 7</strong>). While these are commonly used
              features among the target audience, they are also just two
              examples of the typical industry design of editing modes.
            </p>
            <div className="multiColumnDiv">
              <img
                src={require("../../images/beaverhub/iphone-home-edit.gif")}
                alt="GIF of iPhone homescreen app rearrangement feature."
              ></img>
              <img
                src={require("../../images/beaverhub/canvas-move-card.gif")}
                alt="GIF of Canvas dashboard course card rearrangement feature."
              ></img>
            </div>
            <p>
              <strong>Figure 6 (left).</strong> Iphone's home screen app
              rearrangement feature. GIF courtesy of &nbsp;
              <a
                href="https://ios.gadgethacks.com/how-to/theres-much-faster-way-rearrange-your-iphones-home-screen-0210181/"
                target="_blank"
                rel="noreferrer"
              >
                Gadget Hacks
              </a>
            </p>
            <p>
              <strong>Figure 7 (right).</strong> Canvas' dashboard course card
              rearrangement feature. GIF courtesy of &nbsp;
              <a
                href="https://support.eclass.ualberta.ca/Knowledgebase/Article/View/542/55/features-of-the-canvas-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                Univeristy of Alberta eClass Support
              </a>
            </p>
            <p>
              After sharing our individual sketches with one another, we agreed
              upon what features we liked best. I then drew a finalized mockup
              of what our Figma prototype would look like:
            </p>
            <div className="projectDivImg">
              <img
                src={require("../../images/beaverhub/final-sketch-1.jpg")}
                alt=""
              ></img>
            </div>
            <p>
              <strong>Figure 8.</strong> Finalized sketch with Edit Mode toolbar
              collapsed.
            </p>
            <div className="projectDivImg">
              <img
                src={require("../../images/beaverhub/final-sketch-2.jpg")}
                alt=""
              ></img>
            </div>
            <p>
              <strong>Figure 9.</strong> Finalized sketch with Edit Mode toolbar
              expanded.
            </p>
            <p>Going from top to bottom of the mockups we have...</p>
            <ul>
              <li>
                {" "}
                The same navigation bar since we didn’t find any issues with it
              </li>
              <li>A banner that indicates the user is in Edit Mode, with…</li>
              <ul>
                <li>
                  buttons spread far apart as the leftmost one will exit Edit
                  Mode without saving and the rightmost one will save all
                  changes made in Edit Mode
                </li>
                <li>
                  a question mark symbol that can be hovered over to display a
                  modal containing information on how to use Edit Mode’s
                  features
                </li>
              </ul>
              <li>
                A collapsible and movable toolbar that allows users to toggle
                which information modules they want displayed
              </li>
              <li>Modules of information that can be…</li>
              <ul>
                <li>moved around by clicking and grabbing on the 6-dot icon</li>
                <li>
                  removed from the home page by clicking on the red minus icon
                </li>
              </ul>
            </ul>
            <p>
              Ready to move to Figma, we defined and delegated tasks amongst the
              four of us, taking into account the varying skill levels in the
              group. For instance, I mainly worked with components and
              prototyping interactions given that I was a bit more familiar with
              Figma than others.
            </p>
            <div className="projectDivFrame">
              <iframe
                title="Figma Prototype Embed"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                src="https://embed.figma.com/proto/hpbqhz40CtQvBMhNVitGah/PSY446-Lab-5?node-id=116-918&starting-point-node-id=116%3A918&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              <strong>Figure 10.</strong> Our Figma Prototype.
            </p>
            <p>
              Additional changes not discussed in the mockup breakdown include:
            </p>
            <ul>
              <li>
                Relocation of Academics, Finances, and Appointments pages’
                information
              </li>
              <ul>
                <li>
                  We also experimented with a tabbed module that takes up the
                  same space as one module but allows users to switch between
                  three different modules of their choosing
                </li>
              </ul>
              <li>Redesign of the schedule module with…</li>
              <ul>
                <li>
                  A time block format inspired by OSU’s class scheduler format,
                  but with course locations and times
                </li>
                <li>
                  Color-coded time blocks for reduced cognitive load and
                  increased aesthetic appeal
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div>
          <h3>Evaluation</h3>
          <div>
            <h4>Usability Studies</h4>
            <p>
              To properly compare our redesign of Beaverhub’s interface to its
              current one, we conducted a series of usability studies in which
              eight participants first interacted with a static mockup of
              Beaverhub (to ensure information/layout was the same) and then
              interacted with our prototype. Each study was composed of
              “time-to-find” tasks as well as a mix of Yes/No, likert-scale, and
              open-ended questions. Our main points of evaluation were the
              addition of Edit Mode, the relocation of information from the
              Academics and Finances pages, and the redesign of the schedule
              module.
            </p>
          </div>
          <div>
            <h4>Study Results & Findings</h4>
            <p>
              After data collection was completed, we statistically analyzed our
              results using methods such as paired samples t-tests, chi-square,
              and grounded coding. Additionally, we used a p-value of 0.05 to
              see if our findings were statistically significant. Key findings
              and data visualizations are presented below:
            </p>
            <ul>
              <li>
                Improved customization of interface by{" "}
                <mark class="stat">105%</mark>
              </li>
              <li>
                Reduced time to find GPA by <mark class="stat">61%</mark>
              </li>
              <li>
                Reduced time to find current balance by{" "}
                <mark class="stat">62%</mark>
              </li>
              <li>
                Reduced time to find names and times of classes for one day by
                <mark class="stat">60%</mark>
              </li>
              <li>
                Reduced users’ cognitive load by <mark class="stat">87.5%</mark>{" "}
                when reading schedule information
              </li>
            </ul>
            <p>
              In additional to numerical information, we received positive
              feedback from many participants when they were asked what features
              they liked about our redesign:
            </p>
            <div className="quotesDiv">
              <p>
                <em>
                  "As long as you have enough options -- even if this original
                  setup isn't ideal, you can find one that's better than
                  BeaverHub for you."
                </em>{" "}
                - Participant 1
              </p>
              <p>
                <em>
                  “At a glance it is easy to see what classes are when, making
                  it fast and easy to understand”
                </em>{" "}
                - Participant 4
              </p>
              <p>
                <em>
                  "I like that you can hide things. I feel like there's a lot of
                  stuff on BeaverHub that I never look at, so it'd be nice to
                  hide it. Also moving things around, making things the same
                  size, and all that stuff."
                </em>{" "}
                - Participant 2
              </p>
            </div>
          </div>
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
