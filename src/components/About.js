import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import heroImg from './Images/hero img.png'

class About extends Component {
    render() {
        return (
            <div className="my-1 my-lg-5 : py-1 py-lg-5 : d-flex">
                <Row className="justify-content-between" >
                    <Col sm="11" lg="5" className="heroImgBox">
                             <img src={heroImg}
                            className="img-responsive"
                            alt="hero"
                             />
                    </Col>

                    <Col  sm="11" lg="5">
                    <h5 className="aboutIntro my-2 : text-white">HI THERE I'm </h5>
                     <h4 className="aboutName : text-white">OKUNOLA WASIU</h4>
                
                           <h6 className="myStack">FRONTEND DEVELOPER</h6>
                    
                  
                    <p className="aboutText : text-white">A frontend developer with a track record of writing clean and efficient code, I attribute this to my ability to self manage during independent project as well as collaborating efficiently as a team.</p>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default About
