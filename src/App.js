import './App.css';
import pfp from './pfp.jpg';
import resume from './zayne_resume.jpg';
import borealis from './rse.jpg';
import yams from './yams.jpg'
import karma from './karma.jpg'
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
	  <div className="about-me-text">I am a passionate Front End Software Engineer with an eye for accessible and aesthetically pleasing web interfaces.
    <br></br> <br></br>
    I have several hobbies outside programming such as creating art, playing instruments, video games, and various crafts.
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
      <a
        href='https://pge-app.sachinf.com'
        target='_blank'
        rel='noopener noreferrer'>
      <img src={darkpge} className="pge-content" alt="pgedark" />
      </a>

      <div className="scheduler-header">MTU Course Scheduler</div>
      <div className="scheduler-desc">A simplified class scheduling web application designed to match Michigan Technological Universities aesthetic. The purpose of this application is to give students a system that would assist in the selection of courses depending on their current year and degree requirements.
      <br></br><br></br>
      <b>Role</b> - Designer, Developer, SCRUM Master
      <br></br><br></br>
      </div>
      <YoutubeEmbed embedId="3d4iqolwGbY"/>

      <div className="autodrive-header">Robotic Systems Enterprise</div>
      <div className="autodrive-desc">Informational website for the Robotic Systems Enterprise organization at Michigan Technological University.
      <br></br><br></br>
      <b>Role</b> - Designer, Developer
      <br></br><br></br>
      <a
        href="https://rse-mtu.vercel.app"
        target="_blank"
        rel="noopener noreferrer">
          rse-mtu.vercel.app
        </a>
      </div>
      <a
        href='https://rse-mtu.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
      >
      <img src={borealis} className="autodrive-content" alt="borealis" />
      </a>

      <div className="yams-header">YAMS (Team Website)</div>
      <div className="yams-desc">YAMS is the name used for team creation by my friends and I in multiplayer video games. This website is intended as a way to log and show off our statistics as well as highlights of our favorite / most played characters in each game.
      <br></br><br></br>
      <b>Role</b> - Creator, Developer
      <br></br><br></br>
      <a
        href="https://yams-six.vercel.app"
        target="_blank"
        rel="noopener noreferrer">
          yams-six.vercel.app
        </a>
      </div>
      <a 
        href='https://yams-six.vercel.app'
        target='_blank'
        rel='noopener noreferrer'>
      <img src={yams} className="yams-content" alt="yams" />
      </a>

      <div className="karma-header">Karma Plushies</div>
      <div className="karma-desc">Website intented to promote and sell custom handmade plushies.
      <br></br><br></br>
      <b>Role</b> - Creator, Developer
      <br></br><br></br>
      <a
        href="https://karma-plushies.vercel.app"
        target="_blank"
        rel="noopener noreferrer">
          karma-plushies.vercel.app
        </a>
      </div>
      <a 
        href='https://karma-plushies.vercel.app'
        target='_blank'
        rel='noopener noreferrer'>
      <img src={karma} className="karma-content" alt="karmaplushies" />
      </a>
      
  </div>
  );
}

export default App;
