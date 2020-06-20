import React, { Component } from 'react';
import './Section.css';
import DisplayGrid from '../components/DisplayGrid';
import PopupButton from '../components/PopupButton';
import dv_thumbnail from '../images/dataverse/thumbnail_dv.png'; 
import netflix_thumbnail from '../images/netflix/netflix_thumbnail.png'; 
import poster_thumbnail from '../images/poster/poster_thumbnail.png'; 
import jam_thumbnail from '../images/jam-stage/jam_thumbnail.png';
import dash_thumbnail from '../images/dash/dash_thumbnail.png';
import translation_thumbnail from '../images/translation/translation_thumbnail.png';

//page image imports
import dataverse_home from '../images/dataverse/dv_home_page.png';
import jam_zoomout from '../images/jam-stage/zoomed-out.png';
import jam_zoomin from '../images/jam-stage/close-up.png';
import orange_poster from '../images/poster/orange_poster.png';
import netflix_flow from '../images/netflix/netflix_actor_flow_with_tooltip.png';
import netflix_runtime from '../images/netflix/netflix_runtime_graph.png';
import dash_ideation from '../images/dash/ideation.png';
import dash_interaction_table from '../images/dash/interaction_table.png';
import dash_touch_demo from '../images/dash/touch_menu_cropped.mp4';
import translation_demo from '../images/translation/translation_demo.mp4';
import translation_diagram from '../images/translation/translation_diagram.png';
import poster_demo from '../images/poster/poster_demo.mp4'


class CodeProjects extends Component {


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
            {title: "Dataverse", logline: "An online universe to teach kids about data structures", thumbnail: dv_thumbnail, languages: ["React, JS, Java, SQL"], launchLink: "https://dataverse.fun", pageHTML: this.getDataversePage()},
            {title: "Jam Stage", logline: "An audio-reactive environment made with Three.js", thumbnail: jam_thumbnail, languages: ["Three.js, WebAudio, JS"], launchLink: "https://laurawilsonri.github.io/jam-stage/", pageHTML: this.getJamStagePage()},
            {title: "COVID-19 Poster Generator", logline: "Customize your own social distancing poster", thumbnail: poster_thumbnail, languages: ["HTML, CSS, JS"], launchLink: "https://laurawilsonri.github.io/covid-poster-generator/", pageHTML: this.getPosterGenPage()},
            {title: "Visualize Netflix in D3", logline: "A dashboard of Netflix data visualizations created with D3.js", thumbnail: netflix_thumbnail, languages: ["D3, JS, HTML"], launchLink: "https://laurawilsonri.github.io/netflix-visualizer/", pageHTML: this.getNetflixPage()},
            {title: "Dash", logline: "A collaborative online platform for media management", languages: ["React, TypeScript, C#"], thumbnail: dash_thumbnail, pageHTML: this.getDashPage(), demoLink: "https://cs.brown.edu/research/ptc/#/project/dash"},
            {title: "Translation API", logline: "An automated translation workflow to multilingual sites", languages: ["Python, Django, Wagtail"], thumbnail: translation_thumbnail, pageHTML: this.getTranslationPage(), demoLink: translation_demo}
        ]}

    getDataversePage() {
       return <div className="project-expansion">
           <h3>Overview</h3>
           <p>This website aims to <b>teach middle school students about data structures</b> in a new, fun way!  
               Students fly around a rocket through dataverse, a universe where each planet offers a game that 
               is based on a specific data structure. Once they master single-player planets, they can <b>compete against 
               their friends in the multiplayer arena</b> or buy rocket skins and speed upgrades at the shop.</p>
            
            <img src={dataverse_home}></img>
            <label>The welcome screen for dataverse informs users of the basic goal of the website and how to interact with the interface in a concise popup.</label>
           
            <h3>My Role</h3>
            <p>This website was the final project for my Software Engineering class, completed with 3 other students over the course of 4 weeks.</p>
            <p>The areas of the project I worked on included:
            <ul>
                <li>The frontend for the individual games <em>(Reactjs)</em></li>
                <li>The graphics, art, and iconography <em>(Adobe Illustrator)</em></li>
                <li>The backend integration and support for multiplayer <em>(Java)</em></li>
            </ul>
            </p>
            
            <h3>Takeaways</h3>
            <p>
                <b>Make your program extensible (yes, even the frontend!).</b><br/>
                  Our site consists of many planets, including 6 minigames. This resulted in a LOT of pages and popups that were quite similar.
                  Using React, we were able to create Components that could be reused to prevent repetetive code. Our games also followed a similar pattern
                  of "do x to earn y points in z seconds", so we were able to abstract much of the game logic (backend and frontend). This made adding new games
                  extremely fast and easy (in fact, we added an entirely new minigame planet the day before our presentation)!</p>
            <p>
                <b>Websockets can be a nightmare.</b><br/>
                    We used websockets to send and receive messages between the frontend and the backend. 
                    This resulted in a long, messy list of message types, so to organize the madness, we created a 
                    MessageManager. To create a new message, we would register it through
                    the MessageManager, along with a handler for that message. 
                    Then, the MessageManager would receive messages and direct them to the proper handlers.
                    This made websockets really manageable and extensible for our project!</p>
            <p>
                <b>User testing is critical</b><br/>
                To make sure our site was both informative and fun, we tested it on almost 100 8th graders from Lincoln Middle School. 
                The feedback we received was incredibly insightful-- 
                we learned that the students thought the games were really fun, and especially enjoyed competing against eachother in the multiplayer
                area, but they felt like they didn't learn a lot about data structures. In response, we added a "Learn More" page for each game that 
                teaches about each data structure in more depth, and made the games a bit harder so that you would need to understand the data structure to
                perform well. In addition, we were able to improve the usability of the site based on specific feedback from the students!
            </p>
            </div>;
            }


    getJamStagePage() {
        return <div className="project-expansion">
            <h3>Overview</h3>
                 <p>My final project for MUSC1001: Generative Animation, Jam Stage is <b>an audio-reactive virtual environment that matches the mood of a given audio piece</b>.  
                     It was built for the web using Three.js and WebAudio. </p>
            
                <h3>How I Built It</h3>
                    <p> I used <b>Three.js</b> to generate a dynamic particle system and <b>Web Audio</b> to get the data from the user’s audio file. 
                    With the data received from Web Audio, I grouped the amplitudes of the frequencies into averages, increasing the group size 
                    as the frequency increased to account for the overrepresentation of higher frequencies. Then, I mapped this data onto the 
                    movement of the particles. Each column of particles represents one frequency group (lower on the left, higher on the right), 
                    and its height represents that frequency group's amplitude. The number of particles that move within that column is 
                    determined by the total frequency sum (so if the sum is 50% of max, 50% of the particles of each column are randomly 
                    chosen to move). </p>

                <img src={jam_zoomout}></img>
                <label>The particle system first appears as a familiar audio-visualizer, but soon factors in sinusodial movement and the z direction to 
                    become an energetic galaxy, seen below.
                </label>
                <img src={jam_zoomin}></img>

                <p>I also added sinusoidal movement for the x and z positions of the particles so that the system is also engaged in some 
                    sort of movement. The maximum z position is determined by the total amplitude of all the frequencies. </p>

                <p>Some other techniques include:</p>
                <ul>
                    <li> The colors of each particle are randomized, but weighted towards purple for consistency, and are also affected by the amplitude of their corresponding frequencies.</li>
                    <li> The size of each particle is representative of the loudness of the audio.</li>
                    <li> The camera moves with the particles, using the mean location of all the particles to offset all the particles’ y values.</li>
                </ul>
                
                <h3>Spotlight Challenge</h3>
                <p>One of my biggest challenges in this project was creating readable visual changes that matched the audio’s rhythm. 
                    When I first started mapping all the dots to the amplitude values, the result was either A) too hectic and unreadable, 
                    or B) too simple and boring.  I ended up choosing to isolate the movement of the particles to a subset of each column 
                    so that, instead of all the particles moving each frame, a small amount is randomly chosen to move based on the overall 
                    loudness of the audio. This way, <b>the movement is isolated to a smaller number of particles, which results in visual 
                    changes that are more readable and meaningful.</b></p>
                </div>;
                }

    getPosterGenPage() {
        return <div className="project-expansion">
            <h3>Overview</h3>
                <p>This Poster Generator lets users customize and download their own social distancing poster, helping people visualize and respect 6ft of distance through humor! </p>
                <p>Below is a demo of some poster combinations you can create, or try it out yourself <a href="https://laurawilsonri.github.io/covid-poster-generator/" target="_blank">on the site</a>.</p>

                <video className="autoplay-video" autoPlay muted loop style={{"width": "100%"}}>
                    <source src={poster_demo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <img src={orange_poster}></img>
                <label>An example of one of the posters you can create!</label>

            <h3>How I Built It</h3>
                <p>I used HTML, CSS, and JavaScript to make the poster generator, and the jsPDF library to download the HTML as a pdf.</p>
            </div>
        }

    getNetflixPage() {
        return <div className="project-expansion">
            <h3>Overview</h3>
                <p>This dashboard uses D3.js to visualize the data provided in <a href="https://www.kaggle.com/shivamb/netflix-shows">this Netflix 
                data set</a>. The visualizations reveal the number of titles on Netflix per genre and the average runtime of movies per release year.  
                In addition, the interactive network graph allows you to explore the connections (shared films) between actors for all films on 
                Netflix directed by a particular director.</p>
            
                <img src={netflix_runtime}></img>
                <label>I added tooltips to provide details about the data points without crowding the visualization with too much text.</label>

                <img src={netflix_flow}></img>
                <label>Hovering over a link reveals the connections (shared films) between two actors.</label>

            <h3>How I Built It</h3>
                <p>The data was cleaned and analyzed using panda and JavaScript, and visualized using D3.js.</p>
            </div>
        }

        /** TODO: FINISH THIS AND ADD TRANSLATION API PAGE */
    getDashPage() {
        return <div className="project-expansion">
            <h3>Overview</h3>
                <p>Nicknamed "the IDE for the humanities", Dash provides users with an <b>infinite workspace to manage their media</b>, 
                    show relationships between documents, and interact with information through both pen and touch. 
                    This is the longterm focal project of the Brown University Graphics Research Group, where I was an undergraduate
                    reasearch assistant during my freshman and sophomore years! </p>
            
            <h3>Spotlight Contribution: Pen and Touch </h3>
            <p>My largest task for the group was adding pen and touch support, with a focus on incorporating bimanual interactions.  
                I began by researching touch interactions for both small and large displays. I was especially inspired by <a href="https://www.youtube.com/watch?v=dK-kX_p_IVM">this video</a> from Microsoft Research. 
                I created a whiteboard to brainstorm some ideas, shown below.</p>

            <img src={dash_ideation}></img>
            <label>ideation for complex pen and touch interactions</label>

            <p>
            Then, with a fellow group member, I created the following plan for both basic and complex interactions, with the 
            bimanual interactions colored in blue.
            </p>

            <img src={dash_interaction_table}></img>
            <label>the plan we created for the system of touch interaction</label>

            <h3>Touch Context Menu: Bridging the Gap Between the Keyboard and Touch</h3>

            <p>In order to compensate for the lack of keyboard shortcuts on touch screens, we created the touch context menu.  
                When you <b>hold down a document and tap the background</b>, this menu <b>appears at your fingertips</b>, offering a variety 
                of operations relevant to the selected document, such as copy, pin to presentation, and delete.</p>

            <video className="autoplay-video" autoPlay muted loop>
                <source src={dash_touch_demo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <label>The touch context menu in action, a palette of options that appear at your fingertips when you hold
                a document and tap the background
            </label>

            <p>
                The addition of this menu greatly <b>improved the efficiency of many of the core actions</b> of the site.  In addition,
                it allowed users to perform many <b>complex actions on touch screens</b> that were previously only supported on desktop (due to 
                reliance on keyboards).
            </p>

            <p>
                Though bimanual interactions were a focus of this project, I do acknowledge that this type of interaction 
                is not suitable for every user. For that reason, we ensured that every action was also possible to acheive 
                through a single-handed interaction, resulting in two (or more) interactions that lead to the same result,
                in order to accomodate as many users as possible.
            </p>

            <h3>Takeaways from my time at the lab</h3>
            <ul>
                <li>How to work with a large and unfamiliar codebase</li>
                <li>A plethora of new languages including C#, XAML, and Reactjs.</li>
                <li>Experience working with a team on a long-term software engineering project </li>
                <li>How to compose and present a demo to sponsors, such as Adobe</li>
            </ul>

            <h3>Want to learn more?  Interested in the Brown Graphics Group?</h3>
                <p>Check out the group's research projects on our website <a href="http://ptc.cs.brown.edu/#/projects">here</a>.</p>
            </div>
        }

    getTranslationPage() {
        return <div className="project-expansion">
            <h3>Overview</h3>
                <p>
                    Governments everywhere use the web to communicate critical information to residents. 
                    Due to a number of constraints, most content is published in English and residents who 
                    need support in other languages are pointed to less accurate fallbacks like Google Translate. 
                </p>

                <p>
                    For this project, my team partnered with the Brown Policy Lab to build <b>an automated translation 
                    system</b>that integrates a <b>3rd party translation service</b> into a <b>Content Management System.</b>
                </p>
            

            <h3>A Deeper Look</h3>
            <p>The workflow we created can be explained by the following diagram:</p>

            <img src={translation_diagram}></img>
            <ol>
                <li>Website content editor <b>updates English content</b> of page through CMS and hits publish.</li>
                <li>The changed fields are identified.</li>
                <li>Make an <b>API call to Gengo</b> (3rd party translation service) for each target language.</li>
                <li>A translator receives the request via Gengo’s interface and provides the translation.</li>
                <li>BackgroundScheduler makes GET requests periodically to check for posted translations.</li>
                <li>We parse the returned translation and <b>update the database.</b></li>
                <li>The website is <b>republished with the up-to-date translations.</b></li>
            </ol>

            <video className="autoplay-video" autoPlay muted loop>
                <source src={translation_demo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <label>Mark walks through the automated translation workflow.</label>

            <h3>My Role</h3>
                <p>For this project, I was responsible for</p>
                <ul>
                    <li>building the test site using Django and Wagtail</li>
                    <li>designing and implemented a diff-tool that detects when text fields are edited, and updates the proper fields in the database with the translations</li>
                    <li>creating a dropdown that modifies the url and translates the page into the user's desired language</li>
                </ul>    
        </div>
    }

    render(){
        let project_count = 0;

        return (
            <div id="code-projects">
                <h2>What I've been Coding Up</h2>

                <DisplayGrid items={this.state.projects.map((p) => <PopupButton key={"project-count-" + project_count++} 
                    title={p.title} 
                    subtitle={p.logline} 
                    thumbnail={p.thumbnail} 
                    keywords={p.languages}
                    launchLink={p.launchLink ? p.launchLink : p.demoLink}
                    launchBtnText={p.demoLink && "DEMO"}
                    pageHTML={p.pageHTML}/>)} />
           
            </div>
        );
    }
}

export default CodeProjects;