import React from "react";
import imageTest from "../../images/download.png"

const BeaverHubPage = () => {
    return (
        <section>
            <h2>Beaverhub Redesign</h2>
            <p>Term/Course: Fall 2024/PSY 446</p>
            <h3>Problem Statement</h3>
                <p>
                    Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla 
                    labore amet culpa exercitation. Adipisicing occaecat exercitation elit 
                    duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat pariatur magna 
                    proident qui in aliqua. Elit ullamco laborum esse eu irure sunt quis.
                </p>
            <h3>Project Details</h3>
            <h4 id="context">Context</h4>
                <ul>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                </ul>
            <h4 id="goalsAndConstraints">Goals & Constraints</h4>
                <ul>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                    <li>Adipisicing excepteur magna fugiat magna eiusmod sunt est sint adipisicing.</li>
                </ul>
            <h3 id="timeline">Timeline</h3>

                <div className="timeline">
                    <div className="timelineContainer right">
                        <div className="timelineContent">
                            <h4>July 14</h4>
                            <img src={imageTest} className="timelineImage"></img>
                        </div>
                    </div>
                    <div className="timelineContainer right">
                        <div className="timelineContent">
                            <h4>July 14</h4>
                            <p>Eiusmod laborum quis nulla in sint excepteur deserunt cupidatat.</p>
                        </div>
                    </div>
                    <div className="timelineContainer right">
                        <div className="timelineContent">
                            <h4>July 14</h4>
                            <p>Eiusmod laborum quis nulla in sint excepteur deserunt cupidatat.</p>
                        </div>
                    </div>
                </div>

            <h3 id="conclusion">Conclusion</h3>
                <p>
                    Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla 
                    labore amet culpa exercitation. Adipisicing occaecat exercitation elit 
                    duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat pariatur magna 
                    proident qui in aliqua. Elit ullamco laborum esse eu irure sunt quis.
                </p>
            <h3 id="futureActions">Future Actions</h3>
                <p>
                    Sit sunt minim consectetur aliqua Lorem aliqua et occaecat nulla 
                    labore amet culpa exercitation. Adipisicing occaecat exercitation elit 
                    duis est cillum ipsum tempor ut deserunt labore. Eiusmod fugiat pariatur magna 
                    proident qui in aliqua. Elit ullamco laborum esse eu irure sunt quis.
                </p>
        </section>
    );
};

export default BeaverHubPage;