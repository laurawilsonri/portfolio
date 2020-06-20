import React, { Component } from 'react';
import VerticalNavBar from './VerticalNavBar';
import WhoIAmPage from './sections/WhoIAmPage'
import Section from './sections/Section';
import './PortfolioSite.css';
import CodeProjects from './sections/CodeProjects';
import DesignProjects from './sections/DesignProjects';
import Resume from './sections/Resume';

class PortfolioSite extends Component {

    constructor(props) {
        super(props);

        //initialize a map of all the pages I want to include
        this.pages = [
            {name: "WHO I AM", content: <WhoIAmPage/>},
            {name: "CODE", content: <CodeProjects/>},
            {name: "DESIGN", content: <DesignProjects/>},
            {name: "STUDIO ART", content: <Section id="art"/>},
            {name: "RESUME", content: <Resume/>}
        ]

        this.state = {
            curPage: this.pages[0]
        };
      }

    updateSelectedPage = (page) => {
        this.setState({
            curPage: page
        })
    }

    render(){    
        return (
            <div className="site-wrapper">
            
              <div className="site-content">
                    {this.state.curPage.content}

                <div id="portfolio-navbar">
                     <VerticalNavBar pages={this.pages} selectPage={(pg) => this.updateSelectedPage(pg)}/>
                </div>
             </div>

                <footer>This website was made with 💙 using Reactjs. <a>See source code.</a></footer>
            </div>
        );
    }
}

export default PortfolioSite;