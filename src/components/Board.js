import React, { Component } from 'react'


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
                <hr/>
                <h3>CSC: Basic Ruby</h3>
              </div>
              <div className="course-box">
                <hr/>
                <h3>
                  CSC: Ruby on Rails
                </h3>                
              </div>
            </div>
          </div>
          <div className="course-list">
            <div className="title-wrap">
              <h1>Unpublished</h1>
              <hr/>
            </div>
            <div className="course-box-list">
              <div className="course-box">
                <hr/>
                <h3>
                  CSC: React
                </h3>                
              </div>
            </div>
          </div>    
        </div>    
      </div>
    )
  }
}

export default Board