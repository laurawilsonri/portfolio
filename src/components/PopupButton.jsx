import React, { Component } from 'react';
import './PopupButton.css';
import { OpenInNew } from '@material-ui/icons';

class PopupButton extends Component {

    /**
     * Large square button that opens a popup on click
     * @param {title, subtitle, thumbnail, keywords: [string, ...], pageHTML} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
      }

    expand() {
       this.setState({
           expanded: true
       })
    }

    close() {
        this.setState({
            expanded: false
        })
     }

    render(){    
        return (
            <div className="popup-btn">

                <div className="popup-header" onClick={() => this.state.expanded ? this.close() : this.expand()}>
                    <img className="popup-thumbnail" src={this.props.thumbnail}></img>
                    <div className="popup-btn-text">
                        <h2 className="popup-title">{this.props.title}</h2>
                        <p className="popup-subtitle">{this.props.subtitle}</p>
                        <div className="popup-control-panel">
                            {this.props.keywords?.map((word) =>  <small>{word}</small>)}
                            {this.props.launchLink && <a className="clickable" href={this.props.launchLink} target="_blank"><small>{this.props.launchBtnText ? this.props.launchBtnText : "LAUNCH"}<OpenInNew style={{ "margin-bottom": "-3px" , "fontSize": "1rem"}}/></small></a>}
                        </div>
                    </div>
                </div>
               
                {this.state.expanded ? this.props.pageHTML : ""}
               
            </div>
        );
    }
}

export default PopupButton;