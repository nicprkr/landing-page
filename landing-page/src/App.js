import React, { Component } from 'react';
import './App.css';
import evelyn from "./assets/evelyn.png";
import nicola from "./assets/nicola.png";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nicCard: false,
            evCard: false
        }
    }
    
  render() {
      var nicCard = null;
      var evCard = null;
      if (this.state.nicCard === false){
          nicCard = (
            <div className="card">
              <div className="card-header">bcit d3</div>
              <hr className="hr-pretty"/>
            <div class="card-name">nicola parker</div>
            <img src={nicola} style={photo} />
            <div className="card-desc">Full Stack Development
              <div class="italics"> & frisbees</div></div>
            <button
              className="btn"
              onClick={()=>this.setState({ nicCard: true })}>ABOUT ME</button>
        </div>
          )
      } else if (this.state.nicCard === true){
          nicCard = (
          <div className="card">
              <div className="card-header">nicola parker</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <div class="placeholder"></div>
                    <div class="placeholder"></div>
                </div>
<button className="btn">PORTFOLIO</button>
<div class="info">
<div class="info-header">TOP SKILLS</div>
<div>javascript, wordpress, logo design</div>
<div class="info-header">DREAM JOB</div>
<div>developer at amazon</div>
<div class="info-header">IDEAL WEEKEND</div>
<div>hiking, frisbee, reading</div>
<div class="info-header">2018 GOAL</div>
<div>learn node.js</div>
</div>
          <div
              className="placeholder"
              onClick={()=>this.setState({ nicCard: false })}>FLIP</div>
            </div>
          )
      }
      if (this.state.evCard === false){
          evCard = (
            <div className="card">
              <div className="card-header">bcit d3</div>
              <hr className="hr-pretty"/>
            <div class="card-name">evelyn cranston</div>
            <img src={evelyn} style={photo} />
            <div className="card-desc">Front End Design 
              <div class="italics"> & bikes</div></div>
            <button
              className="btn"
              onClick={()=>this.setState({ evCard: true })}>ABOUT ME</button>
        </div>
          )
      } else if (this.state.evCard === true){
          evCard = (
          <div className="card">
            <div className="card-header">evelyn cranston</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <div class="placeholder"></div>
                    <div class="placeholder"></div>
                </div>
<button className="btn">PORTFOLIO</button>
<div class="info">
<div class="info-header">TOP SKILLS</div>
<div>javascript, design, react</div>
<div class="info-header">DREAM JOB</div>
<div>overlord of slack</div>
<div class="info-header">IDEAL WEEKEND</div>
<div>getting coffee, adventures, reading</div>
<div class="info-header">2018 GOAL</div>
<div>learn node.js</div>
</div>
          <div
              className="placeholder"
              onClick={()=>this.setState({ evCard: false })}>FLIP</div>
            </div>
          )
      }
    return (
      <div style={container}>
        <div className="pageContainer">
        <div className="pageHeader">Nicola & Evelyn</div>
        <div className="content">
        {nicCard}
        {evCard}
        
        </div>
        </div>
        </div>
    );
  }
}

export default App;

const container = {
    width: "100%",
    height: "100%",
    color: "#1D41A8"
}
const photo = {
    width: "135px",
    height: "182px"
}