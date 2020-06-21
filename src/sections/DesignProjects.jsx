

import React, { Component } from 'react';
import './Section.css';
import DisplayGrid from '../components/DisplayGrid';
import PopupButton from '../components/PopupButton';
import train_thumbnail from '../images/train/train_thumbnail.jpg'; 
import robot_thumbnail from '../images/happy-robot/robot_thumbnail.jpeg'; 
import covid_thumbnail from '../images/covid-kit/kit_thumbnail.png'; 
import ring_thumbnail from '../images/ring/ring_thumbnail.png'; 
import hotel_thumbnail from '../images/hotel/hotel_thumbnail.png';
// page image imports //
// train
import train_phone1 from '../images/train/train_phone1.png'; 
import train_phone2 from '../images/train/train_phone2.png'; 
import train_physical from '../images/train/train_physical.jpg'; 
import train_physical_demo from '../images/train/train_physical_demo.mp4'; 
import train_app_demo from '../images/train/train_app_walkthrough_cropped.mp4'; 
// happy the robot
import happy_3d_model from '../images/happy-robot/3d_model.png';
import happy_robot_video from '../images/happy-robot/happy_robot_video.mp4';
import happy_gif from '../images/happy-robot/happy_the_robot.gif';
import happy_ideation from '../images/happy-robot/ideation.png';
import happy_iteration1 from '../images/happy-robot/iteration1.jpeg';
import happy_tech_working from '../images/happy-robot/tech_working.gif';
import happy_iterations from '../images/happy-robot/robot_iterations.png';
// covid kit 
import poster_demo from '../images/poster/poster_demo.mp4';
import kit_form from '../images/covid-kit/form.png';
import kit_ideation from '../images/covid-kit/ideation_collage.png';
import kit_video from '../images/covid-kit/kitvideo.mp4';
import kit_mask from '../images/covid-kit/mask_prototype.png';
import kit_prototype from '../images/covid-kit/prototype.png';
import kit_final from '../images/covid-kit/final.png';
import kit_includes from '../images/covid-kit/kit_includes.png';
// access ring
import ring_final from '../images/ring/ring_final.jpg';
import ring_ideation from '../images/ring/ideation.png';
import ring_3d from '../images/ring/ring_3d.jpg';
import ring_metal from '../images/ring/metal.jpg';
import ring_gif from '../images/ring/open_door.gif';
import ring_poster from '../images/ring/ring_poster.png';
// hotel
import hotel_eyetracking_booking from '../images/hotel/hotel_eyetracking_cal.png';
import hotel_eyetracking_home from '../images/hotel/hotel_eyetracking_home.png';
import hotel_sketches from '../images/hotel/sketches.png';
import hotel_guest from '../images/hotel/hotel_guest.png';



//constants
const trivia_link = "https://docs.google.com/presentation/d/1BXPQT238tvSfXA1S_RnOdpTMQEdKXavHeTo8QA3m66Y/edit?usp=sharing"
const happy_link = "https://medium.com/@delora_li/happy-the-robot-1cae1d976a03"
const covid_kit_link = "https://socialdistancekit.wixsite.com/home";
const access_link = "https://www.youtube.com/watch?v=SMBriUywBc8";
const hotel_link = "https://www.figma.com/proto/f4bIRsOei5Z3gbAo67J8wK2D/Iterative?node-id=2%3A51&scaling=scale-down";

class DesignProjects extends Component {


    // props are :headerText :list of body
    constructor(props) {
        super(props);

        this.state = {
            projects: this.getProjects()
        };
      }

    // all the design projects
    getProjects() {
        return [
            {title: "Trivia Train", logline: "Gamifing the Boston metro to build community between passengers", thumbnail: train_thumbnail, tools: ["Figma"], launchLink: trivia_link, launchBtnText: "DECK", pageHTML: this.getTriviaTrainPage()},
            {title: "Happy the Robot", logline: "Your new 3D-printed welcome pal", thumbnail: robot_thumbnail, tools: ["Arduino, 3D Printer"], launchLink: happy_link, launchBtnText: "VIDEO", pageHTML: this.getHappyRobotPage()},
            {title: "COVID Kit", logline: "A social distancing care package, delivered to your door", thumbnail: covid_thumbnail, tools: ["HTML/CSS, Premiere"], launchLink: covid_kit_link, launchBtnText: "SITE", pageHTML: this.getCovidKitPage()},
            {title: "The Access Ring", logline: "A design fiction project that reimagines access", thumbnail: ring_thumbnail, tools: ["Design Fiction"], launchLink: access_link, launchBtnText: "VIDEO", pageHTML: this.getAccessPage()},
            {title: "Canary & Eye Tracking", logline: "A better hotel management system, analyzed with eye tracking", thumbnail: hotel_thumbnail, tools: ["Figma, Eye Tracking"], launchLink: hotel_link, pageHTML: this.getHotelPage()},
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

    getHappyRobotPage = () =>
    <div className="project-expansion">
        <h3>The Problem</h3>
        <p>Walking into an empty room can often feel lifeless and depressing.  How can we leverage technology, 
            a traditionally cold and emotionless tool, to create something that will contribute a positive energy 
            to an empty room, lifting someone's spirits and even making them smile?</p>
         <p>In essense, <b>how can a set of mechanical parts create something that makes a human smile?</b></p>

         <h3>The Solution, in brief</h3>
        <p>A 3D printed robot that smiles and blushes when you near it to welcome you into a space.</p>
        
        <h3>The Process</h3>
        <h5>Ideation</h5>
        <p> 
            Our ideation phase focused around what forms would best connect with people and what makes something cute or likeable.
            These would be key qualities in our robot as we crafted our vision for its character and personality.
        </p>
        <img src={happy_ideation}></img>

        <h5>Clay Prototyping</h5>
        <p> 
            To test out our idea in a quick and malleable platform, we decided to use clay to build some early protoypes, seen below.
            The key questions in this phase were: <em>How we use an Arduino kit to make a dynamic face?  Does an LCD screen work well to convey emotion?</em>
        </p>
        <img src={happy_iteration1}></img>
        <label>We used a breadboard to test the technology and get a feel for whether this idea would work before moving on to sodering and battery power.</label>
        <img src={happy_tech_working}></img>
        <label>We coded custom characters to get the LCD screen to display a face!</label>

        <h5>3D Printing Iterations</h5>
        <p> 
            To test out our idea in a quick and malleable platform, we decided to use clay to build some early protoypes, seen below.
            The key questions in this phase were: <em>How can we fit all the wires and tech inside this small form?  What form works best for our goals?</em>
        </p>
        <img src={happy_iterations}></img>
        <label>Our three main iterations.</label>
        <p>After receiving feedback that the face was too small when just using the LCD screen, we decided to use the proximity sensor as eyes, LED lights as cheeks, and the LCD screen as the mouth to make the face the larger and more integrated into the form. Because these pieces leant more to a mechanical aesthetic, we opted for the robot-form over the egg-shaped form.</p>
        <img src={happy_3d_model}></img>
        <label>The 3D model rendered in Rhino</label>

        <h5>The Final Solution</h5>
        <img src={happy_gif}></img>
        <p> 
           In our final iteration, we explored how best to communicate the story behind this product.
           To do so, we created the following video.
        </p>
        <video controls>
                <source src={happy_robot_video} type="video/mp4" />
                Your browser does not support the video tag.
         </video>   

         <h3>The Team</h3>
         <p>I completed this project in partnership with fellow student Delora Li.</p>
        </div>;

    getCovidKitPage = () =>
    <div className="project-expansion">
        <h3>The Problem</h3>
        <p>During the tense and hectic time of the COVID-19 pandemic, many people are left uncomfortable and 
            without the proper tools to social distance properly. There is a lack of both inexepensive, accessible supplies,
            and a reliable, unified source of information.</p>
        <p><b>How can we encourage and provide support for social distancing?</b></p>
    
        <h3>The Solution, in brief</h3>
        <p>We created a two-part solution to tackle the problem:</p>
        <ol>
            <li>A Social Distancing Kit that contains all the tools you need to social distance, delivered to your door.</li>
            <li>A <a href={covid_kit_link} target="_blank">website</a> that provides a collection of resources, a platform for ordering the kit, and a humorous 
            poster-generator to spread the word about social distancing</li>
        </ol>

        <video controls>
            <source src={kit_video} type="video/mp4" />
            Your browser does not support the video tag.
         </video> 
         <label>
            The promo video for the Social Distance Kit, made with Premiere Pro. 
        </label>  

        <h3>The Process</h3>
        <h5>Ideation</h5>
        <img src={kit_ideation}></img>
        <label> We brainstormed a wide range of ideas, including physical interventions to public spaces,  
            rewards programs for social distancing, and mask designs that display high-risk symbols.</label>

        <h5>Development</h5>
        <p>Ultimately, we felt that lack of supplies and information were the two biggest needs, which 
            could be best tackled through a care package and website. The key questions we sought to answer 
            included, <em>What tools do people need to social distance? How can we get those tools to them safely?
                What symbols best indicate "high risk"?</em></p>
        
        <img src={kit_mask}></img>
        <label>
           We experimented with stickers, magnets, and clips to find a way to express messages such as "high-risk" and "recently traveled", 
          right on your mask. Stickers didn't last long and magnets were expensive, but bookmark clips were effective!
        </label>

        <img src={kit_form}></img>
        <label>
            After creating several icons that may indicate "high risk", we created a survey to gain insights 
            on which one was most effective.
        </label>

        <img src={kit_prototype}></img>
        <label>An early prototype of the kit</label>

        <video className="autoplay-video" autoPlay muted loop style={{"width": "100%"}}>
                    <source src={poster_demo} type="video/mp4" />
                    Your browser does not support the video tag.
        </video>
        <label>
            I created a poster generator that lets you customize a humorous poster, including choosing
            which object you want to represent 6 feet! 
            <a href="https://laurawilsonri.github.io/covid-poster-generator/" target="_blank">Try it out!</a>
        </label>

        <h3>The Final Product</h3>
        <img src={kit_final}></img>
        <label>
            Our website's landing page, featuring an image of the final kit. 
        </label>

        <img src={kit_includes}></img>
        <label>
            The kit includes a variety of items that will support the recipeient as they social distance.
        </label>

        <p>Check out the <a href={covid_kit_link} target="_blank">website</a> to see our full work!</p>
        <p>Read our <a href="https://medium.com/@designstudiograham/the-social-distance-kit-3cc535bd97c6" target="_blank">Medium article</a> for additional documentation about our process.</p>
        <p>Watch our promo video displayed at the top of the top of this page!</p>

        <h3>The Team</h3>
        <p>I worked with four other students to create the Social Distance Kit as our final 
            project for DesignStudio (a Brown engineering course). My contribution consisted of 
            creating the poster generator, the promo video, the bulk of the website, and some graphics. 
        </p>
        </div>;

    getAccessPage = () =>
    <div className="project-expansion">
        <h3>The Problem</h3>
        <p>Traditional doors require a tedious and bimanual process of taking out one's keys, manually 
            fitting in the correct key (often trying each one until you find the one that works), and then, 
            opening the door. <b>How can access become seamless by using futuristic technology and things that 
            you are already wearing?</b></p>
        
        <h3>The Solution, in brief</h3>
        <p>A ring that unlocks doors when an authorized wearer opens the door.</p>

        <h3>The Process</h3>
        <h5>Ideation</h5>
        <p>Our main questions in the ideation phase were: <em>How can we integrate access control into something we wear everyday?  How can it be secure?</em></p>
       <img src={ring_ideation}></img>
       <p>We chose a ring to leverage the facts that</p>
       <ol>
            <li>it's always worn on the hand</li>
            <li>it would touch the door handle (enabling RIFD tech)</li>
            <li>it could be made discrete and secure (utilizing fingerprint authentication)</li>
        </ol>

        <h5>Metal Prototyping</h5>
        <p>In this phase, we began prototyping with metal and found material, and created a video to demonstrate what 
            the use of the ring would look like. Our main questions were: <em>What form best suits a ring for access? What would the use of the product look like?</em></p>
        <img src={ring_metal}></img>

        <h5>3D Printing Prototyping</h5>
        <p>Once we had a more finalized design in mind, we began 3D modeling and printing, as well as incorporating electronics to light the ring's LED.  Our main questions were <em>How can we make the ring as discrete as possible? How can we incorporate signals? </em></p>
       <img src={ring_3d}></img>
       <img src={ring_final}></img>
        <label>
        To mimic the functionality of the light turning on when the person touches a door handle, we created a sliding system so that when the ring was turned sideways, the battery slid in place and turned on the LED.
        </label>

        <h3>The Final Step</h3>
        <h5>Video Prototyping</h5>
        <p>
            With our final product in hand, our main focus shifted to finding the right narrative for the product so we could 
            best communicate our idea. Furthermore, the video served as a way to check whether the interaction made sense and felt natural.
        </p>
        <img src={ring_gif}></img>
        <img src={ring_poster}></img>
        <label>The poster I created to communicate our branding as a tool for discrete and secure access.</label><br></br>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/SMBriUywBc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       <label>Our final design fiction video, created to imagine the use of such a product in the near-future.</label>

       <h3>The Team</h3>
       <p>This was a project completed for DesignStudio in Spring 2020 along with groupmates Caroline David and Al Rempe.</p>
        </div>;

    getHotelPage = () =>
    <div className="project-expansion">
        <h3>Overview</h3>
        <p>This project serves as an experiment in <b>iterative design</b> and <b>eye tracking analysis</b>.  
            As part of a four member group, we created a prototype of a <b>desktop application for hotel
            management</b>, beginning with various sketches and building up to a high-fidelity, interactive 
            prototype. We then tested this prototype on a user, tracking and analyzing their eye movements as they
            navigated through the app.</p>

        <h3>Step 1: Sketches of Possible Navigation Flows</h3>
        <img style={{"width": "100%"}} src={hotel_sketches}></img>
        <p> We began by <b>sketching a multitude of different high-level app structures.</b> Despite their differences, 
            we felt that each sketch had valuable features we could include in our final prototype. As a result,
             we came up with a prototype that incorporated many of the different sketches together: 
             the navigation came from sketch 1, the calendars came from sketch 4, the filter/search layouts 
             came from sketch 3, and the information grid layout came from sketch 2.</p>

        <h3>Step 2: High-Fidelity Prototyping</h3>
        <p>We then created an <b>interactive prototype</b> using Figma. <a href={hotel_link}>Try it out yourself</a> on Figma.</p>
        <img src={hotel_guest}></img>
        <label>The guest page of the hi-fi prototype. Click through the app <a href={hotel_link}></a></label>

        <h3>Step 3: Eye-Tracking Analysis</h3>
        <p>We gave the user a task to complete, and used an eye tracker to record the position of their eyes as they 
            navigated the site. Then we analyzed the data and turned it into "heat maps." Below are two of the resulting "heat maps." 
            The closer to red the shade is, the greater amount of time the user spent looking at that area.</p>
        <img src={hotel_eyetracking_home}></img>
        <img src={hotel_eyetracking_booking}></img>
        <label>A sample of our eye tracking "heat maps" that reveal the user's focus as they navigate the site.</label>

        <h3>Step 4: Interpretation</h3>
        <p>On the homepage, the user's focus largely remained on the four central icons, as the heat map displays
             the deepest red near the center of the icons.  This is what we desired from our design -- to 
             <b> improve efficiency with very clear, direct paths of use.</b></p>

        <p>Generally, <b>the user was able to navigate to the pages and interact with components in the order 
            we expected</b> and the heat maps reflect that the user was able to find the relevant information 
            for each subtask successfully. However, there was some confusion in finding the contract for 
            a customer. In a future iteration of the design, we would ease this struggle by including 
            the contract verification in the general information panel, where the user examined the 
            most frequently in her search to find the contract. </p>

        <h3>The Team</h3>
        <p>This project was one of several completed for UIUX during Fall 2018, completed in partnership 
            with three other students.
        </p>

        <h3>Want to learn more? See more eye tracking data?</h3>
        <p>Check out the <a href="https://f4dd3982-bfa5-478e-be58-00d2e9592079.filesusr.com/ugd/54c8e3_f9b785bc199f4c89b5d9880d0ad134cf.pdf">full PDF report</a> of this project.</p>
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
                    launchBtnText={p.launchBtnText}
                    pageHTML={p.pageHTML}/>)} />
           
            </div>
        );
    }
}

export default DesignProjects;