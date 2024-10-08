import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footer_img_icon_1 from '../images/footer_img_icon_1.png'
import footer_img_icon_2 from '../images/footer_img_icon_2.png'

function Footer() {
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
                                <li><h6 className='my-3'>Collections</h6></li>
                                <li className='my-3'>Iconic Layers</li>
                                <li className='my-3'>Iconic Denim</li>
                                <li className='my-3'>Iconic Sweaters</li>
                                <li className='my-3'>Iconic Polo Shirts
                                </li>
                                <li className='my-3'>Polo Player Inspired</li>
                            </ul>

                            <ul>
                                <ul>
                                    <li><h6 className='my-3'>Heritage</h6></li>
                                    <li className='my-3'>Press Releases</li>
                                    <li className='my-3'>Media Coverages</li>
                                    <li className='my-3'>Shop Now</li>
                                    <li className='my-3'>United States Polo Association</li>
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
                            <li className='ms-4  mt-2' style={{ fontSize: '15px' }}>Disclaimer</li>
                            <li className='ms-4 ms-md-5 mt-2 ' style={{ fontSize: '15px' }}>Privacy Policy </li>
                            <li className='ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Cookies Policy </li>
                            <li className='ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Terms and Conditions</li>
                            <li className='ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Accessibility Statement</li>
                            <li className='ms-4 ms-md-5 mt-2' style={{ fontSize: '15px' }}>Our Commitment to Protect Forests</li>
                        </ul>
                    </Row>

                    <Button className='inputbutton shadow rounded-0 ms-3 ms-md-0 ' variant="danger"><p className='inputname'>Customize Settings</p></Button>{' '}

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

export default Footer