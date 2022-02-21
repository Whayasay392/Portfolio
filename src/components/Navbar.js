import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row, NavDropdown } from 'react-bootstrap'
import logo from './Images/logo.png'


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
                     <Nav.Link className="navLink : text-white" href="/home">PAST WORKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="navLink : text-white" >RESUME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="navLink : text-white" >HIRE ME</Nav.Link>
                    </Nav.Item>
   
                    </Nav>

                        
{/* 
                          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Item>
                     <Nav.Link className="navLink : text-white" href="/home">PAST WORKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="navLink : text-white" >RESUME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="navLink : text-white" >HIRE ME</Nav.Link>
                    </Nav.Item>
    </Nav> 
     
  </Navbar.Collapse>
  </Container>
</Navbar> */}


                    </Col>
                   
                        </Row>

                    </header>

                    {/* new */}

                  
  
                    
            </div>
        )
    }
}

export default Navbar
