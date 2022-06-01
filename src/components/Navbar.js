import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Col, Row,  } from 'react-bootstrap'
import logo from './Images/logo.png'
import Pdf from '../files/Wasiu_Okunola_Resume_31-05-2022-21-50-21.pdf';


class Navbar extends Component {
    render() {
        return (
            <div>
               
                    <header className="myHeader : d-flex: py-3">
                        <Row>

                            <Col className="justify-content-start">
                            <img src={logo}
                            className="img-responsive"
                            alt="logo"
                             />
                        </Col>
                    
                    <Col>
                     <Nav className="justify-content-end py-auto" >
                     <Nav.Item>
                     <Nav.Link className="navLink : text-white" href="/src/components/Projects.js">PAST WORKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href={Pdf} without rel='noopener noreferrer' className="navLink : text-white" target='_blank' >RESUME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="navLink : text-white" >HIRE ME</Nav.Link>
                    </Nav.Item>
   
                    </Nav>

                        


                    </Col>
                   
                        </Row>

                    </header>

                    {/* new */}

                  
  
                    
            </div>
        )
    }
}

export default Navbar
