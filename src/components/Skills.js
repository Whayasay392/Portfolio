import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import IconBootstrap from 'react-devicon/bootstrap/plain'
// import IconCss3 from 'react-devicon/css3/original-wordmark'
// import IconJavascript from 'react-devicon/javascript/original'
// import IconHtml5 from 'react-devicon/html5/original'
// import IconGit from 'react-devicon/git/original'
// import IconReact from 'react-devicon/react/original'
import { faReact, faHtml5, faCss3, faGit, faBootstrap, faJs } from '@fortawesome/free-brands-svg-icons'
 class Skills extends Component {
    render() {
        return (
            <div className="py-5">
                 <h2 className="sectionHeader : text-white">SKILLS</h2>
                <h3 className="sectionDetails : text-white">What i can use</h3>

                <section className="skillCover d-flex justify-content-between my-3 ">
                   
                    {/* first skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0 ">
                    <div className="d-flex justify-content-center py-3">
                     <FontAwesomeIcon className="skillIcon text-white text-center " icon={faHtml5} />
                        </div>
                    <p className="skillName text-white text-center">HTML5</p>
                    </div>
                    {/* second skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0">
                    <div className="d-flex justify-content-center py-3">
                    <FontAwesomeIcon className="skillIcon text-white text-center " icon={faCss3} />
                            {/* <FontAwesomeIcon className="skillIcon text-white text-center " icon={faGithub} /> */}
                        </div>
                    <p className="skillName text-white text-center">CSS3</p>
                    </div>
                    {/* third skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0">
                    <div className="d-flex justify-content-center py-3">
                    <FontAwesomeIcon className="skillIcon text-white text-center " icon={faJs} />
                        </div>
                    <p className="skillName text-white text-center">Javascript</p>
                    </div>
                    {/* fourth skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0">
                    <div className="d-flex justify-content-center py-3">
                    <FontAwesomeIcon className="skillIcon text-white text-center " icon={faReact} />
                        </div>
                    <p className="skillName text-white text-center">React Js</p>
                    </div>
                    {/* fifth skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0">
                        <div className="d-flex justify-content-center py-3">
                        <FontAwesomeIcon className="skillIcon text-white text-center " icon={faBootstrap} />
                        </div>
                    
                    <p className="skillName text-white text-center">Bootstrap</p>
                    </div>
                    {/* sixth skill box */}
                    <div className="skillBox py-3 my-2 my-lg-0">
                    <div className="d-flex justify-content-center py-3">
                    <FontAwesomeIcon className="skillIcon text-white text-center " icon={faGit} />
                        </div>
                    <p className="skillName text-white text-center">Git</p>
                    </div>

                </section>
            </div>
        )
    }
}

export default Skills
