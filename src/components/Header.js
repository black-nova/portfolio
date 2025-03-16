import React from 'react'
import {Component} from 'react'
import "../css/Header.css"
import {FaLinkedin, FaGithub } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          animate: false,
        };
    }
        componentDidMount() {
            this.setState({ animate: true });
        
            setTimeout(() => {
              this.setState({ animate: false });
            }, 3000);
          }

render() {
  return (
<div className="Header">

    <div className="basic">
            <h1 className='name'>Shashwat.</h1>
            <div class="links">
                <a href="#abt" style={{color:'white'}}>Home</a>
                <a href="#about" style={{color:'white'}}>About</a>
                <a href="#journey" style={{color:'white'}}> Experience and Education</a>
                <a href="#skills" style={{color:'white'}}>Skills</a>
                <a href="#contact" style={{color:'white'}}>Contact</a>
            </div>   
    </div>
    <br/>

    <div className='about' id='abt'>
        <h1 style={{color:'white'}}>
            Hi, I'm Shashwat Chaturvedi
        </h1>
        <h2 style={{color:'#5dc6db'}}>
            Software Developer
        </h2>
        <p style={{color:'white'}}>
        I am a dedicated and results-driven Software Developer with a strong foundation in designing, <br/><br/>
        developing, and optimizing software solutions. With expertise in programming languages such as Java, <br/><br/>
        Python, and JavaScript, I have experience building scalable applications, developing RESTful APIs, <br/><br/>
        and working with modern frameworks. <br/><br/>
        My ability to analyze complex problems and implement efficient solutions enables me to contribute <br/><br/>
        effectively to high-performance software systems. <br/><br/>
        I am passionate about writing clean, maintainable code and following best practices in software development. <br/><br/>
        Whether working independently or within a collaborative team environment, I strive to deliver high-quality <br/><br/>
        solutions that align with business goals. I stay updated with emerging technologies to continuously enhance <br/><br/>
        my technical expertise and contribute to innovative projects.I am eager to apply my skills in a <br/><br/>
        dynamic development team, where I can help create robust, user-friendly, and scalable software applications. <br/><br/>
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
        <a href="https://leetcode.com/u/shashwat9997/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size={25} color="#1877F2" />
        </a>
        <a href="https://www.linkedin.com/in/shashwat-chaturvedi-ab92871aa/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} color="#0077B5" />
        </a>
        <a href="https://github.com/black-nova" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} color="#0077B5" />
        </a>
      </div>

    </div>
    <br/>

</div>
  );
}
}
export default Header;
