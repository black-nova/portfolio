import React, { useEffect, useState } from 'react'
import {Component} from 'react'
import "../css/Main.css"
import Card from './Card'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aboutLines: [],
      experienceLines: [],
      certificationsLines: [],
      educationLines: [],
      codeskillsLines: [],
      normalskillsLines: [],
      contactLines: [],
      
    };
  }

  componentDidMount() {
    this.fetchData("about", "/resources/about.txt");
    this.fetchData("experience", "/resources/exp.txt");
    this.fetchData("certifications", "/resources/certifications.txt");
    this.fetchData("education", "/resources/edu.txt");
    this.fetchData("codeskills", "/resources/codeskills.txt");
    this.fetchData("normalskills", "/resources/normalskills.txt");
    this.fetchData("contact", "/resources/contact.txt");
    
  }

  fetchData(key, filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => {
        const data = text.split(";").map(item => item.trim()).filter(item => item !== "");
        this.setState({ [`${key}Lines`]: data }); // Update only one part of the state
      })
      .catch((error) => console.error(`Error reading ${key} file:`, error));
  }

render() {
  const { aboutLines, experienceLines, educationLines, codeskillsLines, normalskillsLines, contactLines, certificationsLines } = this.state;

  const experienceContent = [];
  for (let i = 0; i < experienceLines.length; i += 3) {
    experienceContent.push(
      <Card 
        key={i}
        title={experienceLines[i] || ""} 
        subtitle={experienceLines[i + 1] || ""} 
        description={experienceLines[i + 2] || ""}
      />
    );
  }

  const educationContent = [];
  for (let i = 0; i < educationLines.length; i += 3) {
    educationContent.push(
      <Card 
        key={i}
        title={educationLines[i] || ""} 
        subtitle={educationLines[i + 1] || ""} 
        description={educationLines[i + 2] || ""}
      />
    );
  }

  return (
<div className="Main">

        <div className='aboutme' id='about' style={{backgroundColor:'#04477e'}}>
        <h1>
          <span style={{ color: "white" }}>About</span>  
          <span style={{ color: "#5dc6db" }}> Me</span>
        </h1>

        <div  className='circle'>
        <img src="/resources/Photo.jpg" alt="Circular Image" />
        </div>

        <h2 style={{color:'white'}}>Software Developer</h2>

        <p style={{padding:15,textAlign:'left'}}>
        {
          <ul>
            {aboutLines.map((line, index) => (
              <li  key={index} style={{padding:10,color:'white'}}>{line}</li>
            ))}
          </ul>
        }
        </p>
        </div>
  

  <div className='journey' id='journey' style={{backgroundColor:'#092f5e'}}>

        <h1>
          <span style={{ color: "white" }}>My</span>  
          <span style={{ color: "#5dc6db" }}> Journey</span>
        </h1>
    <h2 style={{color:'white'}}>Experience</h2>
    {experienceContent}

    <h2 style={{color:'white'}}>Education</h2>
    {educationContent}

  </div>
  

<div className='skills' id='skills' style={{backgroundColor:'#04477e',width:'100%'}}>

        <h1>
          <span style={{ color: "white" }}>My</span>  
          <span style={{ color: "#5dc6db" }}> Skills</span>
        </h1>

  <div className="skills-container">
  <div className="skill-box">
    <h2 style={{color:'white'}}>Coding Skills</h2>
    <div style={{ padding: "15px", border: "2px solid black", textAlign:'left'}}>
      <ul>
        {codeskillsLines.map((line, index) => (
        <li key={index} style={{padding:10,color:'white'}}>{line}</li>
        ))}
      </ul>
    </div>
  </div>
  <div className="skill-box">
    <h2 style={{color:'white'}}>Professional Skills</h2>
    <div style={{ padding: "15px", border: "2px solid black", textAlign:'left' }}>
    <ul>
        {normalskillsLines.map((line, index) => (
        <li key={index} style={{padding:10,color:'white'}}>{line}</li>
        ))}
      </ul>
    </div>
  </div>
  </div>


</div>


<div className='certifications' id='certification' style={{textAlign:'center',backgroundColor:'#092f5e',width:'100%'}}>
  <h1 style={{ color: "#5dc6db" }}>
    Certifictions
  </h1>

  <p>
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {certificationsLines.map((line, index) => (
        <li key={index} style={{padding:10,color:'white'}}>{line}</li>
        ))}
      </ul>
  </p>
</div>


<div className='contact' id='contact' style={{textAlign:'center',backgroundColor:'#04477e',width:'100%'}}>
        <h1>
          <span style={{ color: "white" }}>Contact</span>  
          <span style={{ color: "#5dc6db" }}> Me!</span>
        </h1>

  <p>
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contactLines.map((line, index) => (
        <li key={index} style={{padding:10,color:'white'}}>{line}</li>
        ))}
      </ul>
  </p>
</div>






</div>
  );
}
}
export default Main;
