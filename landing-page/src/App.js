import React, { Component } from 'react';
import './App.css';
import evelyn from "./assets/evelyn.png";
import nicola from "./assets/nicola.png";
import headerImg from "./assets/header-img.png";
import github from "./assets/social-media-04.png";
import linkedin from "./assets/social-media-05.png";
import backFlip from "./assets/back-06.png";

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
            <div className="card-name">nicola parker</div>
            <img className="mx-auto d-block" src={nicola} style={photo} />
              <hr className="hr-pretty-yellow"/>
            <div className="card-desc">Full Stack Development
              <div className="italics"> & frisbees</div>
              <button
              className="btn"
              onClick={()=>this.setState({ nicCard: true })}>ABOUT ME
            </button>
              </div>
            
        </div>
          )
      } else if (this.state.nicCard === true){
          nicCard = (
          <div className="card">
              <div className="card-header">nicola parker</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <img className="iconImg" src={github}/>
                    <img className="iconImg" src={linkedin}/>
                </div>
                <div className="text-center">
                    <button className="btn text-center">PORTFOLIO</button>
                </div>        
                <div className="info">
                <div className="info-header">TOP SKILLS</div>
                <div className="info-body">javascript, wordpress, logo design</div>
                <div className="info-header">DREAM JOB</div>
                <div className="info-body">developer at amazon</div>
                <div className="info-header">IDEAL WEEKEND</div>
                <div className="info-body">hiking, frisbee, reading</div>
                <div className="info-header">2018 GOAL</div>
                <div className="info-body">learn node.js</div>
                </div>    
                <div className="text-center">
                    <img className="iconImg" src={backFlip} onClick={()=>this.setState({ nicCard: false })}/>
                </div>
                </div>
          )
      }
      if (this.state.evCard === false){
          evCard = (
              
        <div className="card">
            <div className="card-header">bcit d3</div>
            <hr className="hr-pretty"/>
            <div className="card-name">evelyn cranston</div>
            <img className="mx-auto d-block" src={evelyn} style={photo} />
            <hr className="hr-pretty-yellow"/>
              
            <div className="card-desc">Front End Design 
              <div className="italics"> & bikes
              </div>
                  <button
                      className="btn text-center"
                      onClick={()=>this.setState({ evCard: true })}>ABOUT ME
                </button>
            </div>
            
        </div>
          )
      } else if (this.state.evCard === true){
          evCard = (
            <div className="card">
              <div className="card-header">evelyn cranston</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <img className="iconImg" src={github}/>
                    <img className="iconImg" src={linkedin}/>
                </div>
                <div className="text-center">
                    <button className="btn text-center">PORTFOLIO</button>
                </div>        
                <div className="info">
                <div className="info-header">TOP SKILLS</div>
                <div className="info-body">javascript, wordpress, logo design</div>
                <div className="info-header">DREAM JOB</div>
                <div className="info-body">developer at amazon</div>
                <div className="info-header">IDEAL WEEKEND</div>
                <div className="info-body">hiking, frisbee, reading</div>
                <div className="info-header">2018 GOAL</div>
                <div className="info-body">learn node.js</div>
                </div>    
                <div className="text-center">
                    <img className="iconImg" src={backFlip} onClick={()=>this.setState({ evCard: false })}/>
                </div>
                </div>
          )
      }
    return (
    <div className="container" style={container}>
        <div className="pageContainer">
            <div className="row">
                <div className="col-xs-12 col-md-2">
                    <div className="headerImg">
                        <img style={imgHeaderStyle} src={headerImg}/>
                    </div>
                </div>
                    <div className="col-xs-12 col-md-5">
                            {nicCard}
                    </div>
                    <div className="col-xs-12 col-md-5">
                            {evCard}
                    </div>
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
    height: "135px"
}

const imgHeaderStyle={
    width: "150px",
    height: "150px"
}