import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import TuneIcon from '@mui/icons-material/Tune';
import australia from '../images/australia.png'
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Storelocator() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Row >
        <Col sm={3}>
          <Row className='mt-5 pt-5 ms-3'>
            <hr />
            <h1>STORE LOCATOR</h1>
            <h6>Search by Zip, Postal Code, City or State</h6>
            <div>
              <input placeholder='Enter Location' className='w-50 px-3' type="text" name="" id="" />
              <button className='py-1 px-1 bg-transparent'><img height={24} src={australia} alt="" /></button>
              <button className='py-1 px-1 bg-transparent'><SearchIcon /></button>
              <button className='py-1 px-1 bg-transparent'><NearMeIcon /></button>
              <button className='py-1 px-1 bg-transparent' onClick={() => setModalShow(true)}><TuneIcon /></button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </Row>
          <hr className=' ms-3' />


          <h6 className=' ms-3'>50 Locations near United States</h6>


          <div className='overflow-auto' style={{ height: '670px' }}>

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

            <Row className='ms-3 mt-4'>
              <div className='d-flex'>
                <div><AddLocationIcon /></div>
                <div>
                  <h6>U.S. Polo Assn.</h6>
                  <span>12801 West Sunrise Blvd</span> <br />
                  <span>Sunrise, FL 33323</span>
                </div>
              </div>
              <Row className='d-flex justify-content-end'>
                <Button className='w-25 bg-danger rounded-0' variant="contained">Directions</Button>
              </Row>
            </Row>
            <hr />

          </div>

        </Col>
        <Col sm={9} className='mt-5 pt-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34871527.742164776!2d-137.9302138122657!3d40.76896019355573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1728454910724!5m2!1sen!2sin" className='w-100' height="850" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
      </Row>


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
          <h2 style={{ color: 'brown', fontFamily: ' Cambria, Cochin, Georgia, Times, serif', fontWeight: '700' }}>Filters</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 style={{ fontWeight: '600' }}>FILTER BY DISTANCE</h6>

        <Dropdown className='rounded-0'>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            150 miles
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">20 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-1">40 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-1">70 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-1">100 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-2">150 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-3">500 miles</Dropdown.Item>
          </Dropdown.Menu>
          
        </Dropdown>


        <div className='d-flex mt-3'>
          <input type="radio" name="km" id="km" /><label className='ms-2' htmlFor="">km</label>
          <input type="radio" className='ms-5' name="km" id="km" /><label className='ms-2' htmlFor="">mi</label>
        </div>


        <h6 className='mt-3' style={{ fontWeight: '600' }}>FILTER BY STORE TYPE</h6>

        <div >
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> <p className='ms-3 me-5'> Stores</p>
      
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> <p className='ms-3'> Outlets</p>
      </InputGroup>
        </div>

      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-ende'>
      <Button className='bg-danger' variant="secondary" onClick={props.onHide}>CLOSE</Button>{' '}
        
      </Modal.Footer>
    </Modal>
  );
}

export default Storelocator