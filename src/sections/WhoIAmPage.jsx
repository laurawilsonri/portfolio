import React, { Component } from 'react';
import './Section.css';
import TextLoop from "react-text-loop";

class WhoIAmPage extends Component {

    // props are :headerText :list of body
    constructor(props) {
        super(props);
      }

    render(){    
        return (
            <div id="who-i-am-div">
                <h1 className="large-title">Hi there, I'm Laura.</h1>
                <h4 className="large-subtitle">thanks for checking out my portfolio today.</h4>
                <br/><br/><br/>
                {/* subtitle that alternates text */}
                <h2 id="dynamic-text">I'm a{" "}
                    <TextLoop interval={2000} className="changeable">
                        <span> senior at Brown University</span>
                        <span> Computer Science major</span>
                        <span> designer and visual artist</span>
                    </TextLoop>.
            </h2>

            <p>I'm a <b>senior at Brown University</b>, graduating in Spring 2021.  As a computer science major, 
                I'm passionate about frontend web development and UI/UX, where I can merge my <b>interests 
                in software engineering and design.</b> I've been a TA for three CS courses and am currently a Head-TA for the UI/UX course. 
                In addition, I'm a mentor for new CS students and the coordinator of the CS yearbook! </p>
                <p>When I'm not debugging CSS or painting my cats, I'm usually baking, hiking, playing co-op board games, 
                    solving logic puzzles, or scouting out the best donut shop! </p>

            </div>
        );
    }
}

export default WhoIAmPage;