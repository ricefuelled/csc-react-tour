import React, { Component } from 'react'
import Tour from 'reactour'
import ReactPlayer from 'react-player'
import {connect} from 'react-redux'
import {toCloseTour} from '../actions'
import { Img } from "@instructure/ui-img"
import smilingstar from "./smiling-star.svg"


class Step extends Component {

  state = {
      isTourOpen: true
  };

  closeTour = () => {
    this.props.toCloseTour(false)
  };

  render() {
    const steps = [
      {
        selector: '.step-1',
        content: () => (
          <div>
            <h2>Hello!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit vel est nec lobortis. Fusce vestibulum placerat nisl a venenatis.</p>
            <div>
              <ol className="small-tab">
                <li><a href = "https://community.canvaslms.com/">Set Up Your Notifications</a></li>
                <li><a href = "https://community.canvaslms.com/">Get Your Content Quickly</a></li>
                <li><a href = "https://community.canvaslms.com/">Learn More about Video Conferencing</a></li>
                <div className="small-tab">
                  <ul>
                    <li><a href = "https://community.canvaslms.com/">Zoom</a></li>
                    <li><a href = "https://community.canvaslms.com/">Google Meet</a></li>
                    <li><a href = "https://community.canvaslms.com/">Microsoft Teams</a></li>
                  </ul>
                </div>                  
              </ol>
            </div>            
            <div className="img-center">
              <Img src={smilingstar} constrain="cover" width="50%"/>
            </div>
            <p>Teacher Tour</p>
          </div>
        ),
        position: 'left', 
      },
      {
        selector: '.step-2',
        content: () => (
          <div>
            <h2>Set Up Your Notifications</h2>
            <div>
              <a href = "https://community.canvaslms.com/">Don't miss notifications from your students.</a>              
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit vel est nec lobortis.</p>
            <div className = "embedded-video">
              <ReactPlayer url = "https://vimeo.com/43397960" width = "100%"/>
            </div>
            <p>1 of 3</p>
          </div>
        ),
      },
      {
        selector: '.step-3',
        content: () => (
          <div>
            <h2>Get Your Content Quickly</h2>
            <div>
              <a href = "https://community.canvaslms.com/">Set up your Canvas courses in 30 minutes or less.</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit vel est nec lobortis.</p>      
            <div className = "embedded-video">
              <ReactPlayer url = "https://vimeo.com/94486699" width = "100%"/>
            </div>
            <p>2 of 3</p>
          </div>
        ),
      },
      {
        selector: '.step-4',
        content: () => (
          <div>
            <h2>Learn More about Video Conferencing.</h2>
            <div>
              <a href = "https://community.canvaslms.com/">Learn more about Video Conferencing</a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit vel est nec lobortis.</p>     
            <div className="small-tab">
              <ul>
                <li><a href = "https://community.canvaslms.com/">Zoom</a></li>
                <li><a href = "https://community.canvaslms.com/">Google Meet</a></li>
                <li><a href = "https://community.canvaslms.com/">Microsoft Teams</a></li>
                <li><a href = "https://community.canvaslms.com/">More Video Conferencing Tools</a></li>
              </ul>
            </div>
            <p>3 of 3</p>
          </div>
        ),
      }
    ];

    return (
      <Tour
        steps = {steps}
        onRequestClose = {this.closeTour}
        isOpen = {this.props.isTourOpen}
      />
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    isTourOpen: state.isTourOpen
  }
}

export default connect(mapStatetoProps,{toCloseTour})(Step)