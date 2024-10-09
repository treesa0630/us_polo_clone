import React from 'react'
import image from '../images/footer_img_icon_2.png'
import { Col, Row } from 'react-bootstrap'
import img from '../images/collection_img_1.jpg'

function Collections() {
  return (
    <>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <div className='collection-main d-flex justify-content-center align-items-center'>
          <div className='text-center text-light'>
            <h6 style={{ letterSpacing: '5px', fontWeight: '800' }}>EXPLORE THE COLLECTIONS</h6>
            <h1>U.S. Polo Assn.</h1>
            <div className='d-flex mt-5 pt-5'>
              <input className='form-control me-md-4 rounded-0' placeholder='Zip, Postal Code or City' type="text" name="" id="" />
              <button className='text-light' style={{ width: '200px', backgroundColor: 'brown', border: 'none' }}>FIND LOCATION</button>
            </div>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
        </div>

        <div className='collection-part '>
          <div className='collection-part1'>
            <div className='d-flex justify-content-center pt-4'>
              <img style={{ height: '130px' }} src={image} alt="" />
            </div>
            <div className='text-center pb-5' >
              <h1 style={{ color: 'rgb(5, 5, 82)', fontWeight: '700', fontFamily: ' Cambria, Cochin, Georgia, Times, serif' }}>The official apparel brand of the United States Polo Association</h1>
              <p className='mt-4' style={{ fontSize: '17px' }}>Steeped in classic American style, the apparel draws inspiration from the rich heritage of the game and its spirited athletes. <br />
                When you buy U.S. Polo Assn., you take home a piece of the sport of polo.
              </p>
            </div>
          </div>
        </div>


        <h4 className='text-center mt-5' style={{ color: 'rgb(5, 5, 82)', fontWeight: '700', fontFamily: ' Cambria, Cochin, Georgia, Times, serif' }}>SEASONAL LOOKS</h4>


        <Row className='px-md-5 px-2' style={{ overflowY: 'hidden' }}>
          {/* <Col sm={2}></Col> */}
          <Col sm={6}>
            <Row>
              <Col className='my-2'>
                <div className='look look1  w-100 mb-4'>
                  <div className='look-name d-flex justify-content-center align-items-end'><h4 className='text-light'>ICONIC LAYERS</h4></div>
                  <div className='bottom-color'>
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
                  </div>
                </div>
              </Col>
              <Col className='my-2'>
              <div className='look look2  w-100 mb-4'>
                <div className='look-name d-flex justify-content-center align-items-end'><h4 className='text-light'>ICONIC DENIM</h4></div>
                <div className='bottom-color'>
                  <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
                  <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
                </div>
              </div>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <Row>
              <Col className='my-2'>
              <div className='look look3  w-100 mb-4'>
                <div className='look-name d-flex justify-content-center align-items-end'><h4 className='text-light'>ICONIC SWEATERS</h4></div>
                <div className='bottom-color'>
                  <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
                  <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
                </div>
              </div></Col>
              <Col className='my-2'>
              <div className='look look4  w-100 mb-4'>
                <div className='look-name d-flex justify-content-center align-items-end'><h4 className='text-light'>ICONIC POLO SHIRTS</h4></div>
                <div className='bottom-color'>
                  <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
                  <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
                </div>
              </div></Col>
            </Row>
          </Col>
        </Row>
        <Row className='px-md-5 px-2' style={{ overflowY: 'hidden' }}>
          <Col sm={6}>
            <Row>
              <Col className='my-2' sm={6}>
                <div className='look look5  w-100 mb-4'>
                  <div className='look-name d-flex justify-content-center align-items-end'><h4 className='text-light'>POLO PLAYERS INSPIRED</h4></div>
                  <div className='bottom-color'>
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
                  </div>
                </div>
              </Col>
              <Col sm={6}></Col>
            </Row>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </div>
    </>
  )
}

export default Collections