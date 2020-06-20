import React, { Component } from 'react';
import './Section.css';

class Section extends Component {

    // props are :headerText :list of body
    constructor(props) {
        super(props);
      }

    render(){    
        return (
            <div id={this.props.id}>
                <h1>{this.props.headerText}</h1>
                {this.props.textBlocks?.map(txt => <p>txt</p>)}
            </div>
        );
    }
}

export default Section;