import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className="about" id="about">
            <br />
            <h1 >About Me</h1>
            <hr style={{width: 200, marginTop: "-25px",height: 3, backgroundColor: "#18d26e", border: "none"}}/>
            <div className="aboutMain">
                <div className="aboutLeft">
                    <img src="animation1.gif" alt="" />
                </div>
                <div className="aboutRight">
                    {/* { <h1>I'm SUJIT KUMAR, a <span style={{ color: "#18d26e"}}>FULL STACK WEB DEVELOPER</span></h1> } */}
                    <p>A Full Stack Developer, with strong administrative and communication skills, good attention to detail and with the ability to write efficient code using MERN Stack.</p>

                    <p>I have been developing Web Apps for over 7 months now. Well versed in coding using Javascript and its frameworks.</p>

                    <p>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
                </div>
            </div>
        </div>
    )
}

export default About
