
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
import greece from '../images/greece.png'
import japan from '../images/japan.png'
import south_korea from '../images/south_korea.png'
import norway from '../images/norway.png'
import brazil from '../images/brazil.png'
import romania from '../images/romania.png'
import argentina from '../images/argentina.png'
import colombia from '../images/colombia.png'
import el_salvador from '../images/el_salvador.png'
import guatemala from '../images/guatemala.png'
import honduras from '../images/honduras.png'
import mexico from '../images/mexico.png'
import panama from '../images/panama.png'
import spain from '../images/spain.png'
import thailand from '../images/thailand.png'
import ukraine from '../images/ukraine.png'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PersonIcon from '@mui/icons-material/Person';


function Header() {

    const [modalShow, setModalShow] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to control navbar expansion

    // Function to close the navbar after selecting a link
    const handleNavLinkClick = () => {
        setExpanded(false);
    }

    return (
        <>
            <div style={{ position: 'fixed', width: '100%', backgroundColor: 'white' }}>
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
                               <Link to="/login" style={{ textDecoration: 'none', color:'black' }}  onClick={handleNavLinkClick}> <PersonIcon className='fs-1'/></Link>
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
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><FontAwesomeIcon icon={faGlobe} size='lg' style={{ color: "#000000", }} /> English (Global)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={egypt} /> Arabic (Egypt)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={saudi_arabia} /> Arabic (Saudi Arabia)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_arab_emirates} /> Arabic (United Arab Emirates)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={bosnia} /> Bosnian (Bosnia and Herzegovina)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={china} /> Chinese (Simplified)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={denmark} /> Danish (Denmark)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={australia} /> English (Australia)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={hong_kong} /> English (Hong Kong SAR China)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={india} /> English (India)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={new_zealand} /> English (New Zealand)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={philippines} /> English (Philippines)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={south_africa} /> English (South Africa)</button></Col>
                        <Col className='py-1' sm><button className='w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={united_kingdom} /> English (United Kingdom)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={france} /> French (France)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={germany} /> German (Germany)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={cyprus} /> Greek (Cyprus)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={greece} /> Greek (Greece)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={italy} /> Italian (Italy)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={japan} /> Japanese (Japan)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={south_korea} /> Korean (South Korea)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={norway} /> Norwegian Bokmal (Norway)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={brazil} /> Portuguese (Brazil)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={romania} /> Romanian (Romania)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '13px' }} src={argentina} /> Spanish (Argentina)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={colombia} /> Spanish (Colombia)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '14px' }} src={el_salvador} /> Spanish (El Salvador)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '17px' }} src={guatemala} /> Spanish (Guatemala)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={honduras} /> Spanish (Honduras)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={mexico} /> Spanish (Mexico)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={panama} />Spanish (Panama)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '14px' }} src={spain} /> Spanish (Spain)</button></Col>
                    </Row>
                    <Row>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={thailand} /> Thai (Thailand)</button></Col>
                        <Col className='py-1' sm><button className='bttn w-100 border border-light bg-transparent'><img style={{ height: '20px' }} src={ukraine} /> Ukranian (Ukraine)</button></Col>
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