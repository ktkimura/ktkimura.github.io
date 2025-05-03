import React from "react";

const FinanceAppPage = () => {
  return (
    <>
      <section>
        <h1>Finance Overview Mobile App</h1>
        <p>
          Usability Engineering Term Project &nbsp;&nbsp;●&nbsp;&nbsp;
          January-March 2024
        </p>
      </section>
      <section>
        <div className="projectImages">
          <img
            src="/images/financeApp/finance-overview-addEntry.png"
            alt="Current Beaverhub Home Page UI"
          ></img>

          <img
            src="/images/financeApp/finance-wireflow-1.jpg"
            alt="Redesigned Beaverhub Home Page UI"
            className="verticalImage"
          ></img>
        </div>
      </section>
      <section>
        <h2>Project Overview</h2>
        <div>
          <div>
            <h3>Challenge</h3>
            <p>
              Keeping track of one's finances is a good habit to have, but not
              as easily maintainable given the various apps for different banks,
              credit unions, and other payment apps (e.g. Venmo) that scatter
              information. To keep track of everything in one place, people have
              to navigate to various applications and then write down all that
              information in a spreadsheet that they have to design. Getting
              insight into one's finances adds another level of difficulty that
              requires extra time that most of us just don't have.
            </p>
          </div>
        </div>
        <div className="multiColumnDiv">
          <div>
            <h3>Team</h3>
            <ul>
              <li>Katie Kimura</li>
              <li>Zach Benedetti</li>
              <li>Dylan Liu</li>
              <li>Carlana So</li>
              <li>Amanda Yuda</li>
            </ul>
          </div>
          <div>
            <h3>Goals</h3>
            <ul>
              <li>Streamline personal finance management</li>
              <li>Enhance user efficiency in financial planning</li>
            </ul>
          </div>
          <div>
            <h3>Impact</h3>
            <ul>
              <li>
                Interface earned a SUS score of <mark class="stat">95</mark>
              </li>
              <li>Users can see ALL expenses regardless of payment method</li>
            </ul>
          </div>
        </div>
      </section>
      <hr></hr>
      <section>
        <h2>The Process</h2>
        <h3>User Research</h3>
        <p>
          The target audience for this app is very broad, as users of any age
          may be interested in tracking their finances, whether they are just
          starting out or are unsatisfied with their current tracking methods.
          Thus, we sought to get a better understanding of what apps users are
          currently using and how they use these apps to manage their finances.
        </p>
        <p>
          I conducted two semi-structured interviews with two individuals, P1 and
          P2.
        </p>
        <h4>Interview 1 w/ P1</h4>
        <ul>
          <li>Uses Notion and Bank of America (BofA) mobile app</li>
          <li>Periodically checks bank account and credit card purchases</li>
          <li>Interested in tracking finances better</li>
          <li>
            “Having overall how much I've spent that month would be nice.”
          </li>
          <li>
            Automatic categorization of purchases in BofA app doesn't always
            work as intended
          </li>
          <li>Expressed interest in a pie chart visualization</li>
        </ul>
        <h4>Interview 2 w/ P2</h4>
        <ul>
          <li>Uses HawaiiUSA FCU mobile app</li>
          <li>
            Periodically goes through history of expenses to get idea of
            financial standing
          </li>
          <li>Sets mental limits for budgeting</li>
          <li>
            Friction of having to transfer money between savings and spendings
            account forces him to be more conscious of purchases
          </li>
          <li>
            Agreed that a central app to manage information from different
            sources would be useful
          </li>
        </ul>
        <p>
          After compiling findings from user interviews with the rest of my
          team, we confirmed that users would be more likely to start tracking
          their finances if all their financial data were to be consolidated in
          one place that is easily accessible. Thus, we moved on to the design
          phase.
        </p>
        <h3>Wireflows</h3>
        <p>
          To create my wireflows, I used my iPad to draw various views with
          notes in red text and interactions depicted with blue arrows and text.
        </p>
        <div className="projectDivImg">
          <img
            src="/images/financeApp/finance-wireflow-1.jpg"
            alt="A rough sketch of ideas including an Edit Mode feature, collapsible tool bar, and movable modules."
          ></img>
        </div>
        <p>
          <strong>Figure 1.</strong> My first wireflow with a focus on the "+"
          icon button being used to add income/expenses.
        </p>
        <div className="projectDivImg">
          <img
            src="/images/financeApp/finance-wireflow-2.jpg"
            alt="A rough sketch of ideas including an Edit Mode feature, collapsible tool bar, and movable modules."
          ></img>
        </div>
        <p>
          <strong>Figure 2.</strong> My second wireflow with a focus on
          combining the add income/expense in the same view to make switching
          between them easier.
        </p>
        <h3>Initial Prototype</h3>
        <p>
          I ended up combining aspects from both wireflow concpets in my initial
          Figma prototype, namely the navigation of concept 1 but the user flow
          of adding an income/expense from concept 2.
        </p>
        <div className="projectDivFrame">
          {" "}
          <iframe
            title="Finance App Initial Figma Prototype"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              height: "50rem",
            }}
            src="https://embed.figma.com/proto/fExOS4Mbjzq4IliHTpoV01/Prototype---Katie?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=share"
            allowfullscreen
          ></iframe>
          <p>
            <strong>Figure 3.</strong> Initial Figma prototype based off my
            wireflows.
          </p>
        </div>
        <h3>Evaluation of Initial Prototype</h3>
        <p>
          To evaluate my prototype, I reached out to P1 again to have them
          participate in a think-aloud usability study. The main findings are as
          follows:
        </p>
        <ul>
          <li>
            The prototype’s aesthetics and overall visual appeal are on the
            right track ("it looks like Notion")
          </li>
          <li>
            The “Recent Activity” section needs to have convincing data in the
            final prototype and perhaps some filtering and sorting functions as
            well
          </li>
        </ul>
        <p>
          I also had P1 fill out the system usability scale, resulting in a score
          of 95. This score is above 70, indicating that the system's usability
          can be deemed "acceptable" as per Albert and Tullis (126-127)
          <sup>
            <a href="#ref1">1</a>
          </sup>
          .
        </p>
        <p id="ref1">
          <sup>1</sup> Bill Albert & Tom Tullis, "Measuring the User
          Experience," 2022.{" "}
        </p>
        <h3>Finalized Prototype</h3>
        <p>
          After evaluating everyone's individual prototypes, the team decided to
          use mine as a base as I had maintained the best organizational
          structure. To maintain design consistency, I also designed and
          prototyped a template component for a help icon and modal that each
          team member used for their assigned work.
        </p>
        <p>
          I chose to work on updating the "Add Income/Expense" feature as I was
          most familiar with the layout and it was one of the more complex
          features to design. My two goals were to make the feature more
          interactive through input fields and implement the bulk addition
          sub-feature. My finished work can be seen in the Figma prototype embed
          below after clicking on the "+" icon to go to the "Add Entry" page.
        </p>
        <div className="projectDivFrame">
          <iframe
            title="Finance App Final Figma Prototype"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              height: "50rem",
            }}
            src="https://embed.figma.com/proto/jCmXLl0KPtAPOnIz07wyk1/Final-Prototype?node-id=2030-85&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2030%3A85&embed-host=share"
            allowfullscreen
          ></iframe>
          <p>
            <strong>Figure 4.</strong> Final Figma prototype that I contributed
            to alongside my team members.
          </p>
        </div>
      </section>
      <hr></hr>
      <section>
        <h2>Final Thoughts</h2>
        <p>
          One of the biggest discoveries I made about myself during this project
          was how much I genuinely enjoy doing any kind of Figma-related work.
          I’ve gained experience with Figma from prior courses but it was in
          this course that my passion for it was really cemented – so maybe this
          isn’t a totally new discovery, but more of a confirmation of
          something. I’ve been slowly coming to the realization that I don’t
          enjoy coding as much as I used to, but I’ve found a new activity that
          sparks the same level of excitement within me.
        </p>
      </section>
    </>
  );
};

export default FinanceAppPage;
