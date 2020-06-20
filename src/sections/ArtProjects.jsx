

import React, { Component } from 'react';
import './Section.css';

class ArtProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: this.getProjects()
        };
      }

    // all the code projects
    getProjects() {
        return []
    }

    render(){
        let project_count = 0;

        return (
            <div id="art-projects">
                <h2>A Glimpse into my Home Studio...</h2>

                <h4><em>Coming soon!</em></h4>
           
            </div>
        );
    }
}

export default ArtProjects;