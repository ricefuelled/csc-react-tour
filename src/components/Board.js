import React, { Component } from 'react'
import { Img } from "@instructure/ui-img";
import rubylogo from "./ruby-logo.svg";
import rorlogo from "./ror-logo.svg";
import reactlogo from "./react-logo.svg";


class Board extends Component {
  render(){
    return(
      <div className="board-wrap">
        <div className="title-wrap">
          <h1>Dashboard</h1>
          <hr/>
        </div>
        <div className="course-list-wrap">
          <div className="course-list">
            <div className="title-wrap">
              <h1>Published</h1>
              <hr/>
            </div>
            <div className="course-box-list">
              <div className="course-box">
              <Img src={rubylogo} constrain="cover" />
                <hr/>
                <h3>CSC: Basic Ruby</h3>
              </div>
              <div className="course-box">
                <Img src={rorlogo} constrain="cover" />  
                <hr/>
                <h3>CSC: Ruby on Rails</h3>                
              </div>
              <div className="course-box">
                <Img src={reactlogo} constrain="cover" />
                <hr/>
                <h3>CSC: Basic React</h3>                
              </div>
              <div className="course-box">
                <Img src={reactlogo} constrain="cover" />
                <hr/>
                <h3>CSC: Advanced React</h3>                
              </div>
            </div>
          </div>
          {/* <div className="course-list">
            <div className="title-wrap">
              <h1>Unpublished</h1>
              <hr/>
            </div>
            <div className="course-box-list">
            </div>
          </div>     */}
        </div>    
      </div>
    )
  }
}

export default Board