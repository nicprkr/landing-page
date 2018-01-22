import React, { Component } from 'react';
import sky from "./assets/sky.svg";
import clouds from "./assets/clouds.svg";
import sun from "./assets/sun.svg";
import mountains from "./assets/mountains.svg";
import foothills from "./assets/foothills.svg";
import river from "./assets/river.svg";
import trees from "./assets/trees.svg";
import foothills1 from "./assets/foothills_1.svg";

class App extends Component {
  render() {
    return (
      <div>
        <div className="column">
            <img src={sky} style={skyStyle}/>
            <img src={sun} style={sunStyle} />
            <img src={clouds} style={cloudStyle} />
            <img src={mountains} style={mtnStyle} />
        <div style={foregroundStyle}>
            <img src={trees} style={treesStyle} />
            <img src={foothills} style={fthStyle} />
            <img src={river} style={riverStyle} />
            <img src={foothills1} style={fth1Style} />
        </div>
        </div>
        </div>
    );
  }
}

export default App;

const skyStyle = {
    width: '100%',
    zIndex: '-100',
    position: 'absolute',
    top: 0,
    left: 0
};
const cloudStyle = {
    width: '120%',
    position: 'absolute',
    top: '20vh',
    right: '-2vw'
};
const sunStyle = {
    width: '10%',
    position: 'absolute',
    right: '20vw',
    top: '10vh'
};
const mtnStyle = {
    width: '100%',
    position: 'absolute',
    top: '30vh'
};
const fthStyle = {
    width: '100%',
    position: 'absolute',
}
const riverStyle = {
    width: '100%',
    position: 'absolute',
    top: '6vh'
}
const treesStyle = {
    width: '100%',
    position: 'absolute',
    bottom: '-10vh'
}
const fth1Style = {
    width:'100%',
    position: 'absolute',
    top: '4vh'
}
const foregroundStyle = {
    width: '100%',
    position: 'absolute',
    top: '36vh',
}