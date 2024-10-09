import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footer_img_icon_1 from '../images/footer_img_icon_1.png'
import footer_img_icon_2 from '../images/footer_img_icon_2.png'
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';

function Footer() {

    const [modalShow, setModalShow] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    return (
        <>
            <div className='main'>
                <div className='sub-main'>
                    <div style={{ paddingTop: '23%' }}>
                        <h5 className='mt-2'>Sign up for the latest in U.S. Polo Assn.</h5></div>

                    <Row>
                        <Col sm={5}><div className='d-flex'><input className='border px-3 shadow rounded-0 w-75' placeholder='sample@gmail.com' type="text" name="" id="" /><Button className='inputbutton shadow rounded-0' variant="danger"><p className='inputname'>Join us</p></Button>{' '}</div></Col>
                        <Col sm={7}></Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col sm={6} className='d-flex'>
                            <ul>
                                <li><h6 className='link-item my-3'>Collections</h6></li>
                                <li className='link-item my-3'>Iconic Layers</li>
                                <li className='link-item my-3'>Iconic Denim</li>
                                <li className='link-item my-3'>Iconic Sweaters</li>
                                <li className='link-item my-3'>Iconic Polo Shirts</li>
                                <li className='link-item my-3'>Polo Player Inspired</li>
                            </ul>

                            <ul>
                                <ul>
                                    <li><h6 className='link-item my-3'>Heritage</h6></li>
                                    <li className='link-item my-3'>Press Releases</li>
                                    <li className='link-item my-3'>Media Coverages</li>
                                    <li className='link-item my-3'>Shop Now</li>
                                    <li className='link-item my-3'>United States Polo Association</li>
                                </ul>

                            </ul>
                        </Col>
                        <Col sm={6} className='d-flex justify-content-md-end ms-3 ms-md-0'>
                            <FontAwesomeIcon className='icons mx-2' size='2xl' icon={faInstagram} style={{ color: "#000000", }} />
                            <FontAwesomeIcon className='icons mx-2' size='2xl' icon={faFacebook} style={{ color: "#000000", }} />
                            <FontAwesomeIcon className='icons mx-2' size='2xl' icon={faTwitter} style={{ color: "#000000", }} />
                            <FontAwesomeIcon className='icons mx-2' size='2xl' icon={faYoutube} style={{ color: "#000000", }} />
                        </Col>
                    </Row>



                    <Row>
                        <ul className='d-md-flex mt-4 mt-md-1'>
                            <li className='link-item ms-4  mt-2' style={{ fontSize: '15px' }}>Disclaimer</li>
                            <li className='link-item ms-4 ms-md-5 mt-2 ' style={{ fontSize: '15px' }}>Privacy Policy </li>
                            <li className='link-item ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Cookies Policy </li>
                            <li className='link-item ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Terms and Conditions</li>
                            <li className='link-item ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Accessibility Statement</li>
                            <li className='link-item ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Our Commitment to Protect Forests</li>
                        </ul>
                    </Row>


                    <Button className='inputbutton shadow rounded-0 ms-3 ms-md-0 ' variant="danger" onClick={() => setModalShow(true)}>
                        <p className='inputname'>Customize Settings</p>
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    {/* <Button className='inputbutton shadow rounded-0 ms-3 ms-md-0 ' variant="danger"><p className='inputname'>Customize Settings</p></Button>{' '} */}

                    <Row>
                        <Col sm={10}></Col>
                        <Col sm={2}>
                            <div className='d-flex'>
                                <img style={{ height: '76px' }} src={footer_img_icon_1} alt="" />
                                <img style={{ height: '70px' }} src={footer_img_icon_2} alt="" />
                            </div>
                        </Col>
                    </Row>

                </div>
                {/* <footer className='mt-3 mt-md-0'>
                    <div style={{height:'3px',width:'100%',backgroundColor:'brown'}}></div>
                    <div style={{height:'6px',width:'100%',backgroundColor:'white'}}></div>
                    <div style={{height:'10px',width:'100%',backgroundColor:'rgb(5, 5, 82)'}}></div>
                </footer> */}

            </div>
            <div className='mt-5 mt-md-0'>
                <div style={{ height: '3px', width: '100%', backgroundColor: 'brown' }}></div>
                <div style={{ height: '6px', width: '100%', backgroundColor: 'white' }}></div>
                <div style={{ height: '10px', width: '100%', backgroundColor: 'rgb(5, 5, 82)' }}></div>
            </div>
        </>
    )
}


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        style={{fontSize:'13px'}}
            {...props}
            animation={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='px-5' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className='text-success'>onetrust</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-5'>
                <h4 className='text-secondary fs-5'> Privacy Preference Center</h4>
                <p>
                    When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer. <br /> <a className='text-danger' href="">More information</a>
                </p>


                <h4 className='text-secondary fs-5 mt-4'>Manage Consent Preference</h4>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="no-arrow">
                            <div className='d-flex justify-content-between w-100'>
                                <div> <h6><AddIcon/> Strictly Necessary Cookies</h6></div>
                                <div><p className='text-primary'>Always Active</p></div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="no-arrow">
                        <div className='d-flex justify-content-between w-100'>
                                <div><h6><AddIcon/> Performance Cookies</h6></div>
                                <div><p><FormControlLabel control={<Switch defaultChecked />} /></p></div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="no-arrow">
                        <div className='d-flex justify-content-between w-100'>
                                <div><h6><AddIcon/> Functional Cookies</h6></div>
                                <div><p><FormControlLabel control={<Switch defaultChecked />} /></p></div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="no-arrow">
                        <div className='d-flex justify-content-between w-100'>
                                <div><h6><AddIcon/> Targeting Cookies</h6></div>
                                <div><p><FormControlLabel control={<Switch defaultChecked />} /></p></div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header className="no-arrow">
                        <div className='d-flex justify-content-between w-100'>
                                <div><h6><AddIcon/> Social Media Cookies</h6></div>
                                <div><p><FormControlLabel control={<Switch defaultChecked />} /></p></div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}><Button className='w-100 border border-danger rounded-0  mt-3' style={{backgroundColor:'brown'}} onClick={props.onHide}>Confirm My Choices</Button></Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <p><span style={{ fontSize: '12px' }}> Powered by</span> <span className='text-success fs-3'>onetrust</span></p>
            </Modal.Footer>
        </Modal>
    );
}

export default Footer