

import React, { Component } from 'react';
import './Section.css';
import resume from '../images/RESUME.pdf';
import { OpenInNew } from '@material-ui/icons';

class Resume extends Component {

    // props are :headerText :list of body
    constructor(props) {
        super(props);
      }

    render(){    
        return (
            <div id="resume-container">
                <iframe src={resume} width="100%" height="850px"></iframe>
                <a href={resume} target="_blank"><button>Launch Full <OpenInNew style={{ "margin-bottom": "-3px" , "fontSize": "1rem"}}/></button></a>
            </div>
        );
    }
}

export default Resume;