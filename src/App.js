import './App.css';
import pfp from './newpfp.jpg';
import resume from './resume_upd.jpg';
import borealis from './borealis.png';
import darkpge from './pge-assets/pge-dark-mode.PNG'
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import scroll from "./scroll";

function App() {
  return (
    
  <div className="App"> 
    <br></br> 
    <br></br> 
    <br></br>   

    <img src={pfp} className="App-logo" alt="pfp" />

    <header className="App-header">
        <p>
          <h1>Zayne Pepin</h1>
          <h2>zayne.a.pepin@outlook.com</h2>
          <a
          href="https://www.linkedin.com/in/zayne-pepin-546a38220/"
          target="_blank"
          rel="noopener noreferrer"
          >
          LinkedIn
        </a>
        <a
        href="https://github.com/zayniel"
        target="_blank"
        rel="noopener noreferrer"
        >
        <br></br>
          GitHub 
        </a>
        </p>
        
    </header>

	  <div className="about-me">About Me</div>
	  <div className="about-me-text">I am an aspiring software engineer with a focus on web development.
    <br></br> <br></br>
    I have several hobbies such as playing instruments, video games, watching movies, and various crafts.
    <br></br> <br></br>
    Below you can find some of the projects I've been involved in.</div>
    
    <div className="resume-text">View Resume</div>
    
      <a href={resume} target="_blank">
        <img src={resume} className="resume" alt="resume" />
      </a>

      <div className="container">
        <div className="gallery"></div>
      </div>

      <div className="line"></div>

      <div className="project-header">Projects</div>

      <div className="pge-header">PG&E Energy Reducer</div>
      <div className="pge-desc">
        The PG&E Energy Reducer is a web application for Pacific Gas & Electric customers that allows them to visualize their heat and electric consumption through easily readable and understandable graphical representations. The app also shows trends and recurring energy spikes and gives the customer advice to help reduce their energy consumption as well as their energy costs.
        <br></br> <br></br>
        <b>Role</b> - Designer, Developer
        <br></br><br></br>
        <a
        href="https://pge-app.sachinf.com"
        target="_blank"
        rel="noopener noreferrer">
          pge-app.sachinf.com
        </a>
      </div>
      <img src={darkpge} className="pge-content" alt="pgedark" />

      <div className="scheduler-header">MTU Course Scheduler</div>
      <div className="scheduler-desc">A simplified class scheduling web application designed to match Michigan Technological Universities aesthetic. The purpose of this application is to give students a system that would assist in the selection of courses depending on their current year and degree requirements.
      <br></br><br></br>
      <b>Role</b> - Designer, Developer, SCRUM Master
      <br></br><br></br>
      </div>
      <YoutubeEmbed embedId="3d4iqolwGbY"/>

      <div className="autodrive-header">SAE AutoDrive Challenge</div>
      <div className="autodrive-desc">The AutoDrive Challenge™ II is a four-year competition coordinated by General Motors and the Society of Automotive Engineers (SAE) in which college teams create and test a Level 4 autonomous vehicle. RSE Students work to meet the requirements of each objective throughout the academic year until competition time in June. MTU’s team, Prometheus Borealis, took home a number of trophies in year one of the competition!
      <br></br><br></br>
      <b>Role</b> - Team Member (Software Req.), Team Lead (Simulation)
      <br></br><br></br>
      <a
        href="https://rse.mtu.edu"
        target="_blank"
        rel="noopener noreferrer">
          https://rse.mtu.edu
        </a>
      </div>
      <img src={borealis} className="autodrive-content" alt="borealis" />

      
  </div>
  );
}

export default App;
