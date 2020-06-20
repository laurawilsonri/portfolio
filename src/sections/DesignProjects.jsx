

import React, { Component } from 'react';
import './Section.css';
import DisplayGrid from '../components/DisplayGrid';
import PopupButton from '../components/PopupButton';
import train_thumbnail from '../images/train/train_thumbnail.jpg'; 
//page image imports
import train_phone1 from '../images/train/train_phone1.png'; 
import train_phone2 from '../images/train/train_phone2.png'; 
import train_physical from '../images/train/train_physical.jpg'; 
import train_physical_demo from '../images/train/train_physical_demo.mp4'; 
import train_app_demo from '../images/train/train_app_walkthrough_cropped.mp4'; 

//constants
const trivia_link = "https://docs.google.com/presentation/d/1BXPQT238tvSfXA1S_RnOdpTMQEdKXavHeTo8QA3m66Y/edit?usp=sharing"

class DesignProjects extends Component {


    // props are :headerText :list of body
    constructor(props) {
        super(props);

        this.state = {
            projects: this.getProjects()
        };
      }

    // all the code projects
    getProjects() {
        return [
            {title: "Trivia Train", logline: "Gamifing the Boston metro to build community between passengers", thumbnail: train_thumbnail, tools: ["Figma", "1st Place, RISD Makeathon"], launchLink: trivia_link, pageHTML: this.getTriviaTrainPage()},
        ]}

    getTriviaTrainPage = () =>
        <div className="project-expansion">
            <h3>The Problem</h3>
            <p>Everyday, millions of people across America ride the subway. They sit tightly next to people they don't know, 
                zone out to their go-to playlist, and silently pass by the lively streets of their city. Their daily commutes
                have become isolating and unfruitful. How can we use this time as an opportunity to <b>connect people to eachother and 
                their cities</b>?</p>
           
            <h3>The Solution</h3>
            <p>As part of the 2020 RISD Makeathon (an 8-hour long design challenge competition), we designed Trivia Train, a <b>game 
                integrated into the Boston metro system where commuters are collectively involved in a trivia style game.</b>  
                 Through either their phone or the button board on the train, commuters can answer questions about the local 
                community to earn points for their team (train line) while on their daily commute.
                </p>
            <p>Through this system, we hope to <b>connect passengers to local spaces and to create a community within the public 
                transit system</b></p>

            <img src={train_phone1}></img>
            <label>
                Commuters answer LIVE questions from their phones about local history and current events. Users can even see 
                the percentage of commuters on their train guessed correctly. 
            </label>

            <img src={train_phone2}></img>
            <label>
                Correct answers earn points for your team (your train line), and train lines compete to top the monthly leaderboard.
            </label>

            <img src={train_physical}></img>
            <label>Riders without phones can still play along through the physical interface integrated onto the train</label>

            <video className="autoplay-video" autoPlay muted loop>
                <source src={train_physical_demo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <label>The physical prototype we built to simulate the on-train interaction</label>

            <video className="autoplay-video" autoPlay muted loop>
                <source src={train_app_demo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>            

            <h3>What will Trivia Train acheive?</h3>
            <ul>
                <li>Build a sense of community among daily commuters, leveraging people's pride in their train lines to encourage participation and friendly competition</li>
                <li>
                    Offer an opportunity to learn about local events, news, and history
                    <ul>
                        <li>Questions can even include advertisements for upcoming farmers market and other community events</li>
                    </ul>
                </li>
                <li>Earn revenue for the subway system through sponsored questions, which can be used for rennovations</li>
            </ul>

            <h3>The Team</h3>
            <p>Our team consisted of 6 RISD and Brown undergrads - most of whom hadn't met before the day started!</p>
            <p>My teammates included:</p> 
            <ul>
               <li>Matthew Derry <em>(Industrial Design &amp; Mech. Eng., RISD &amp; Brown)</em></li>
               <li>Caffrey Fielding <em>(Industrial Design, RISD)</em></li>
                <li>Al Huang <em>(Industrial Design, RISD)</em></li>
                <li>Graham Keeley <em>(Engineering, Brown)</em></li>
                <li>Avantika Velho <em>(Industrial Design, RISD)</em></li>
                <li>Me <em>(Computer Science, Brown)</em></li>
            </ul>

            <h3>Result of the competition</h3>
            <p>We were awarded <b>1st place at the 2020 RISD Makeathon</b> for our design of Trivia Train!</p> 
           
            </div>;


    render(){
        let project_count = 0;

        return (
            <div id="design-projects">
                <h2>Spotlight Design Projects</h2>

                <DisplayGrid items={this.state.projects.map((p) => <PopupButton key={"design-project-" + project_count++} 
                    title={p.title} 
                    subtitle={p.logline} 
                    thumbnail={p.thumbnail} 
                    keywords={p.tools}
                    launchLink={p.launchLink}
                    pageHTML={p.pageHTML}/>)} />
           
            </div>
        );
    }
}

export default DesignProjects;