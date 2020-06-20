import React, { Component } from 'react';
import './VerticalNavBar.css';
import profilePic from "./images/artsy_profile.png";

class VerticalNavBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          currPage: this.props.pages[0] //default is first
        };
    }

    selectPage(pg) {
        this.setState({currPage: pg})
        this.props.selectPage(pg)
    }

    render(){    
        let count = 0;
        return (
            <div className="navbar">
                <div id="header-content">
                <img id="profile-img" src={profilePic}></img>
                <h2 id="title"><b>Laura Wilson</b></h2>
                <small className="subtitle">CS | Brown '21</small>
                </div>

                <div id="pages">
                {/*display all the names of the pages as buttons that will scroll to the content*/}
                {this.props.pages.map(pg => 
                    <h4 key={"btn-" + count++} className="page-name" className={(this.state.currPage == pg ? "selected" : "")}
                        onClick={() => this.selectPage(pg)}>
                             {(this.state.currPage == pg ? ">_" : "")}{pg.name}
                        </h4>)}
                </div>
            </div>
        );
    }
}

export default VerticalNavBar;
