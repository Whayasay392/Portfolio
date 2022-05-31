import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

export class Projects extends Component {
    render() {
        return (
            <div className="projectSection my-5 my-lg-0">
                <h2 className="sectionHeader : text-white">PROJECTS</h2>
                <h3 className="sectionDetails : text-white">Stuffs I've worked on</h3>

                {/* Row one */}
                <Row className="boxCover">

                    {/* first box */}
                    <div className="projectCover my-3 my-lg-0  py-2 px-4" >
                        <section className="projectIcons : py-4">
                            <Col className="projectCol d-flex justify-content-end">
                                <div className="gitIcons ">
                                    <a href="#https://github.com/Whayasay392/myXpense-WebApp" className="projectIcon text-white px-3"> 
                                    <FontAwesomeIcon className="" icon={faGithub} />
                                     </a>
                                    </div>

                                    <div>
                                   <a href="#https://whayasayxpense.netlify.app/" className="projectIcon  text-white">
                                <FontAwesomeIcon  icon={faExternalLinkAlt} />
                            </a>
                                </div>
                                 
                            </Col>
                           
                        </section>
                        <section>
                            <Col >
                                <h1 className="projectName : text-white">myXpense Tracker</h1>
                                <p className="projectLanguage : text-white">React Js </p>
                            </Col>
                            
                        </section>
                        
                    </div>
                    {/* End of first box */}

            
                    {/* second box */}
                    <div className="projectCover : my-3 my-lg-0 py-2 px-4">
                        <section className="projectIcons : py-4">
                            <Col  className="d-flex justify-content-end">
                                <div className="">
                                    <a href="#https://github.com/Whayasay392/E-millenial" className="projectIcon text-white px-3"> 
                                    <FontAwesomeIcon className="" icon={faGithub} />
                                     </a>
                                    </div>

                                    <div>
                                   <a href="#https://whayasay-emillenial.netlify.app/" className="projectIcon  text-white">
                                <FontAwesomeIcon  icon={faExternalLinkAlt} />
                            </a>
                                </div>
                                 
                            </Col>
                           
                        </section>
                        <section>
                            <Col>
                                <h1 className="projectName : text-white">E-Millenia</h1>
                                <p className="projectLanguage : text-white">HTML, CSS & JAVASCRIPT </p>
                            </Col>
                            
                        </section>
                        
                    </div>
                    {/* End of second box */}

                    
                    {/* third box */}
                    <div className="projectCover : my-3 my-lg-0 py-2 px-4">
                        <section className="projectIcons : py-4">
                            <Col  className="d-flex justify-content-end">
                                <div className="">
                                    <a href="#https://github.com/Whayasay392/FitMe" className="projectIcon text-white px-3"> 
                                    <FontAwesomeIcon className="" icon={faGithub} />
                                     </a>
                                    </div>

                                    <div>
                                   <a href="#https://fitme-page.netlify.app/" className="projectIcon  text-white">
                                <FontAwesomeIcon  icon={faExternalLinkAlt} />
                            </a>
                                </div>
                                 
                            </Col>
                           
                        </section>
                        <section>
                            <Col sm="7" lg="7">
                                <h1 className="projectName : text-white">FitMe page</h1>
                                <p className="projectLanguage : text-white">HTML, CSS & JAVASCRIPT </p>
                            </Col>
                            
                        </section>
                        
                    </div>
                    {/* End of third box */}

                </Row>

                
{/* See more Button */}
            <section className="d-flex justify-content-center py-3">
               <a href='https://github.com/Whayasay392' target='_blank'>
                   <button className="projectBtn text-white px-5 py-2">SEE MORE</button>
                   </a> 
            </section>
            </div>
        )
    }
}

export default Projects
