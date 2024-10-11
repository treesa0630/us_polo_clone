
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import image from '../images/logo.png'
import united_arab_emirates from '../images/united_arab_emirates.png'
import saudi_arabia from '../images/saudi_arabia.png'
import egypt from '../images/egypt.png'
import italy from '../images/italy.png'
import bosnia from '../images/bosnia.png'
import china from '../images/china.png'
import denmark from '../images/denmark.png'
import australia from '../images/australia.png'
import hong_kong from '../images/hong_kong.png'
import india from '../images/india.png'
import new_zealand from '../images/new_zealand.png'
import philippines from '../images/philippines.png'
import south_africa from '../images/south_africa.png'
import united_kingdom from '../images/united_kingdom.png'
import france from '../images/france.png'
import germany from '../images/germany.png'
import cyprus from '../images/cyprus.png'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
    
    const [modalShow, setModalShow] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to control navbar expansion

    // Function to close the navbar after selecting a link
    const handleNavLinkClick = () => {
        setExpanded(false);}

    return (
        <>
            <div style={{position:'fixed', width:'100%', backgroundColor:'white'}}>
                <Navbar expand="lg" className="body bg-body-transparent mt-2" expanded={expanded}>
                    <Container>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Navbar.Brand><img src={image} alt="Logo" style={{ height: '53px' }} /></Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} className='me-3' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto mt-1">
                                <Link to="/collections" style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
                                    <Nav.Link className='item mx-2 ms-md-5' style={{ fontWeight: '600' }} href='#home'>Collections</Nav.Link>
                                </Link>
                                <Link to="/heritage" style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
                                    <Nav.Link className='item mx-2' style={{ fontWeight: '600' }} href='#home'>Heritage</Nav.Link>
                                </Link>
                                <Link to="/storelocator" style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
                                    <Nav.Link className='item mx-2' style={{ fontWeight: '600' }} href='#home'>Store Locator</Nav.Link>
                                </Link>
                                <NavDropdown className='item mx-2' style={{ fontWeight: '600' }} title="Ezine" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" onClick={handleNavLinkClick} className='sub-link'>Field and Fashion Magazine</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" onClick={handleNavLinkClick} className='sub-link'>Paris Program</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='item mx-2' style={{ fontWeight: '600' }} title="News" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" onClick={handleNavLinkClick} className='sub-link'>Press Releases</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" onClick={handleNavLinkClick} className='sub-link'>Media Coverage</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='item mx-2' style={{ fontWeight: '600' }} href='#home' title="USPA Life" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" onClick={handleNavLinkClick} className='sub-link'>USPA Life</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" onClick={handleNavLinkClick} className='sub-link'>4ocean</NavDropdown.Item>
                                </NavDropdown>
                                <Link to="/shopnow" style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
                                    <Nav.Link className='item mx-2' style={{ fontWeight: '600' }} href='#home'>Shop Now</Nav.Link>
                                </Link>
                            </Nav>
                            <div>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Navbar.Brand className='d-none d-md-inline'>
                                        <img src="https://images.ctfassets.net/6igiux0rebzg/2m37baHnMucJ78bIWzBJik/30a5fed850e3d73feefde604e5428017/uspolo-seal.svg" alt="" style={{ height: '55px' }} />
                                    </Navbar.Brand>
                                </Link>
                                <Button variant="" onClick={() => setModalShow(true)}>
                                    <FontAwesomeIcon icon={faGlobe} size='xl' style={{ color: "#000000", }} /> 
                                    <FontAwesomeIcon className='ms-2' icon={faAngleDown} style={{ color: "#000000", }} />
                                </Button>
                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: 'darkblue' }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><FontAwesomeIcon icon={faGlobe} size='xl' style={{ color: "#000000", }} /> English (Global)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={egypt} /> Arabic (Egypt)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={saudi_arabia} /> Arabic (Saudi Arabia)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Arabic (United Arab Emirates)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={bosnia} /> Bosnian (Bosnia and Herzegovina)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={china} /> Chinese (Simplified)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={denmark} /> Danish (Denmark)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={australia} /> English (Australia)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={hong_kong} /> English (Hong Kong SAR China)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={india} /> English (India)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={new_zealand} /> English (New Zealand)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={philippines} /> English (Philippines)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={south_africa} /> English (South Africa)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_kingdom} /> English (United Kingdom)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={france} /> French (France)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={germany} /> German (Germany)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={cyprus} /> Greek (Cyprus)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Greek (Greece)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={italy} /> Italian (Italy)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Japanese (Japan)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Korean (South Korea)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Norwegian Bokmal (Norway)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Portuguese (Brazil)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Romanian (Romania)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Argentina)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Colombia)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (El Salvador)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Guatemala)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Honduras)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Mexico)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} />Spanish (Panama)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Spanish (Spain)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Thai (Thailand)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Ukranian (Ukraine)</button></Col>
                    </Row>
                </Container>

            </Modal.Body>
            <div className='w-100 mt-3' style={{ height: '3px', backgroundColor: 'brown' }}></div>
            <div className='w-100 bg-light' style={{ height: '6px' }}></div>
            <div style={{ height: '7px', backgroundColor: 'rgb(5, 5, 82)' }}></div>

        </Modal>
    );
}

export default Header