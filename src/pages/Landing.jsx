import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import landing_fun_facts from '../images/landing_pg_fast_fact.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Landing() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <div style={{ width: '100%', overflowX:'hidden'}}>
        <div className='landing-main d-flex justify-content-center align-items-center'>
          <div className='text-center text-light'>
            <h6 style={{ letterSpacing: '5px', fontWeight: '800' }}>BORN TO PLAY</h6>
            <h1>U.S. Polo Assn.</h1>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
          <div>
            <h5 className='text-center mt-5' style={{ letterSpacing: '6px', color: 'brown', fontWeight: '700' }}>USPA</h5>
            <h1 className='text-center' style={{ color: 'rgb(5, 5, 82)', fontWeight: '700', fontFamily:' Cambria, Cochin, Georgia, Times, serif' }}>WHO WE ARE</h1>

            <div style={{ padding: '0px 15%', fontSize: '17px' }}>
              <p className='mt-3 text-center'>U.S. Polo Assn. isn't just a brand—it's an experience. When you purchase U.S. Polo Assn., you own a piece of the <span style={{ color: 'brown', fontWeight: '700' }}>sport of polo</span>. We are the only brand that is officially part of the<span style={{ color: 'brown', fontWeight: '700' }}> United States Polo Association (USPA)</span>—one of the oldest sport governing bodies in the United States. This is a proud distinction that links our illustrious past to a bright future that you are an important part of. Royalties generated from U.S. Polo Assn. help fund the USPA, which grows and promotes the sport in the United States and around the world. Learn about the brand, the sport, and our place in history as you discover all that U.S. Polo Assn. has to offer.
              </p>
            </div>


            <div className='d-flex justify-content-center'>
              <Button variant="" onClick={() => setModalShow(true)}>
                <p className='inputname p-2' style={{ fontWeight: '700', backgroundColor: 'brown', color: 'white' }}>Fast Facts About Polo</p>
              </Button>
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          <div>
            <h1 className='text-center mt-5' style={{ color: 'rgb(5, 5, 82)', fontWeight: '800',fontFamily:' Cambria, Cochin, Georgia, Times, serif' }}>INSPIRATION</h1>
          </div>


          <Row className='mt-5 pt-4'>
            <Col sm={3}></Col>
            <Col sm={6}><iframe className='p-md-0 p-2' width="100%" height="500px" src="https://www.youtube.com/embed/lZOOHYCfnB8?si=KrwChZg7i6gFSpz-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
            <Col sm={3}></Col>
          </Row>

          <Row className='mt-3'>
            <Col sm={1}></Col>
            <Col sm={10}> <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
              <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div></Col>
            <Col sm={1}></Col>
          </Row>


          <Row className='mt-5 pt-3 px-3'>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Row>
                <Col sm={6}>
                  <Row>
                    <Col sm={6} className='my-2'>
                      <div className='image image1 w-100'>
                        <div className='name d-flex justify-content-center align-items-center'><h6 className='text-light'><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#ffffff",}} /></h6></div>
                      </div>
                    </Col>
                    <Col sm={6} className='my-2'>
                      <div className='image image2 w-100'>
                        <div className='name d-flex justify-content-center align-items-center'><h6 className='text-light'><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#ffffff",}} /></h6></div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6} className='my-2'>
                    <div className='image image3 w-100'>
                        <div className='name d-flex justify-content-center align-items-center'><h6 className='text-light'><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#ffffff",}} /></h6></div>
                      </div>
                    </Col>
                    <Col sm={6} className='my-2'>
                    <div className='image image4 w-100'>
                        <div className='name d-flex justify-content-center align-items-center'><h6 className='text-light'><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#ffffff",}} /></h6></div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={6} className='my-2'>
                <div className='image image5 w-100'>
                        <div className='name5 d-flex justify-content-center align-items-center'><h6 className='text-light'><FontAwesomeIcon icon={faInstagram} size='2xl' style={{color: "#ffffff",}} /></h6></div>
                      </div>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>


          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <button className='w-100 view_more my-3'>VIEW MORE ON INSTAGRAM</button>
            </Col>
            <Col sm={2}></Col>
          </Row>

        </div>

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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center'><img className='w-100' src={landing_fun_facts} alt="" /></div>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
        <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
        <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
      </Modal.Footer>
    </Modal>
  );
}

export default Landing