import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {  useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import {faPhone, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { send } from 'emailjs-com';


 function Contact () {
    const [toSend, setTosend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const handleSubmit = (e) => {
            e.preventDefault();
            send(
                'SERVICE ID',
                'TEMPLATE ID',
                toSend,
              ''
            )
            .then((res) => {
                console.log('SUCCESS !', res.status,res.text);
            })
            .catch((error) => {
                console.log('FAILED ..', error);
            });
    }

    const handleChange = (e) => {
        setTosend({...toSend, [e.target.name]: e.target.value})
    }
        return (
            <div className="pt-1 pt-lg-5">
                <div className="mb-1 mb-lg-5">
                    <h2 className="sectionHeader : text-white">CONTACT ME</h2>
                <h3 className="sectionDetails : text-white">Let's have a chat!</h3>
                </div>
                 

                <Row className="d-flex justify-content-between">
                    <Col sm="11" lg="6">
                        <Form className="w-100">
                            {/* <input className="formGroup mb-4 w-100" type="text" placeholder="Full Name" />
                            <input className="formGroup mb-4 w-100" type="text" placeholder="Enter email" />
                            <input className="formGroup mb-4 w-100" type="textarea" placeholder="Your Message" rows={5} /> */}


                            <Form.Group onSubmit={handleSubmit} className=" my-4" >
                                <Form.Control className="formGroup" type="text" placeholder="Full Name" name='from_name' value={toSend.from_name} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className=" mb-4">
                            <Form.Control className="formGroup" type="email" placeholder="Enter email" name='reply_to' value={toSend.reply_to} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className=" mb-4">
                        <Form.Control className="formGroup" as="textarea" placeholder="Your Message" rows={5} name='message' value={toSend.message} onChange={handleChange}/>
                    </Form.Group> 
                        
                    <Button className="sendBtn w-100" type="submit">SEND</Button>
                        </Form>
                    </Col>

                    <Col sm="11" lg="5" className="mt-5 mt-lg-0">
                    <h6 className="sectionHeader text-white mb-3 mb-lg-0">REACH ME ON</h6>
                   {/* <FontAwesomeIcon className="" icon={faGithub} /> */}  

                   {/* Phone icon */}
                   <div className="d-flex my-3">
                       <FontAwesomeIcon className="contactIcon text-white " rotation={90}  icon={faPhone}  />
                   <a href="tel:+447926112885" className="contactLink text-white mx-3">+447926112885</a>
                   </div>
                   {/* Linkelidn icon */}
                   <div className="d-flex my-3">
                       <FontAwesomeIcon className="contactIcon text-white "   icon={faLinkedin}  />
                   <a href="https://linkelidn.com/in/okunola-wasiu-6b13901b3" className="contactLink mx-3">https://linkelidn.com/in/okunolawasiu</a>
                   </div>
                   {/* Twitter icon */}
                   <div className="d-flex my-3">
                       <FontAwesomeIcon className="contactIcon text-white "   icon={faTwitter}  />
                   <a href="https://twitter.com/wasol1305" className="contactLink  mx-3">https://twitter.com/wasol1305</a>
                   </div>
                   {/* Mail icon */}
                   <div className="d-flex my-3">
                       <FontAwesomeIcon className="contactIcon text-white "   icon={faEnvelopeOpen}  />
                   <a href="mailto:wasiuolalekan190@gmail.com" className="contactLink mx-3">wasiuolalekan190@gmail.com</a>
                   </div>
                   
                    </Col>

                </Row>
                {/* copyright */}
                <Row className="my-0 py-0">
                     <section className="copySec d-flex justify-content-center mt-3 mt-lg-5 pt-2 pt-lg-4 w-100">
                    <p className="copyright text-white">&copy; Copyright OlaDev 2021</p>
                </section>
                </Row>
               
            </div>
        )
    }


export default Contact
