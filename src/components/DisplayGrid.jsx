import React, { Component } from 'react';
import './DisplayGrid.css';

class DisplayGrid extends Component {

    /**
     * Grid that displays a list of things in a flex
     * @param {items: [Component, ...]} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
      }

    render(){    
        return (
            <div className="display-grid">
               {this.props.items}
            </div>
        );
    }
}

export default DisplayGrid;