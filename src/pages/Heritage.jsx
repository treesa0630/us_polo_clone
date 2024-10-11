import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import landing_fun_facts from '../images/landing_pg_fast_fact.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import heritage_img_1 from '../images/heritage_img_1.jpg'
import heritage_img_2 from '../images/heritage_img_2.jpg'
import heritage_img_3 from '../images/heritage_img_3.jpg'
import heritage_img_4 from '../images/heritage_img_4.jpg'
import heritage_img_5 from '../images/heritage_img_5.jpg'
import heritage_img_6 from '../images/heritage_img_6.jpg'
import heritage_img_7 from '../images/heritage_img_7.jpg'
import heritage_img_8 from '../images/heritage_img_8.jpg'
import heritage_img_9 from '../images/heritage_img_9.jpg'
import heritage_img_10 from '../images/heritage_img_10.jpg'
import heritage_img_11 from '../images/heritage_img_11.jpg'
import heritage_img_12 from '../images/heritage_img_12.jpg'
import heritage_img_14 from '../images/heritage_img_14.jpg'
import heritage_img_15 from '../images/heritage_img_15.jpg'
import heritage_img_16 from '../images/heritage_img_16.jpg'


function Heritage() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <div className='heritage-main d-flex justify-content-center align-items-center'>
          <div className='text-center text-light'>
            <h6 style={{ letterSpacing: '5px', fontWeight: '800' }}>SINCE 1890</h6>
            <h1>Heritage</h1>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
          <div>
            <h5 className='text-center mt-5' style={{ letterSpacing: '6px', color: 'brown', fontWeight: '700' }}>USPA</h5>
            <h1 className='text-center' style={{ color: 'rgb(5, 5, 82)', fontWeight: '700', fontFamily: ' Cambria, Cochin, Georgia, Times, serif' }}>WHO WE ARE</h1>

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


          <Row className='mt-5 pt-4'>
            <Col sm={3}></Col>
            <Col sm={6}><iframe className='p-md-0 p-2' width="100%" height="500px" src="https://www.youtube.com/embed/42wpdhcVbZg?si=tSRZLzCQxvSW4mdR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
            <Col sm={3}></Col>
          </Row>

          <Row className='mt-3'>
            <Col sm={1}></Col>
            <Col sm={10}> <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
              <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div></Col>
            <Col sm={1}></Col>
          </Row>





          <div>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <Row className='heritage-boxes'>
                  <Col>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '515px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '495px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_1} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>FIP Event Hosting</h4>
                          <h2 style={{ fontWeight: '700' }}>2022</h2>
                          <p>In November 2022, the Federation of International (FIP) World Polo Championship was hosted in Palm Beach County, Florida by U.S. Polo Assn. and the USPA, returning to the U.S. after a 30-year hiatus.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '540px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 px-md-3 py-md-5' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '520px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_3} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>FIP Event Hosting</h4>
                          <h2 style={{ fontWeight: '700' }}>2022</h2>
                          <p>For the first time in the history of the sport of polo, ESPN delivered a full calendar of events for television viewing. This landmark relationship offered fans the opportunity to view polo around the world on the ESPN family of brands.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '520px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_5} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>130th Anniversary</h4>
                          <h2 style={{ fontWeight: '700' }}>2020</h2>
                          <p><b>130th Anniversary of the USPA commemorated.</b> <br />

                            Our brand stays true to our heritage and takes inspiration from the classic polo player’s uniform: a polo shirt, denim, leather belt and boots. This style consistently remains the foundation for much of our best-selling apparel.</p>
                            <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '500px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '480px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_7} alt="" />
                        </div>
                        <div className='text-center px-5 mt-5'>
                          <h4 style={{ color: 'brown' }}>Gauntlet of Polo</h4>
                          <h2 style={{ fontWeight: '700' }}>2019</h2>
                          <p>The Gauntlet of Polo is survival of the fittest as the World’s preeminent teams, most skilled athletes and finest horses come together for three months to battle head to head across the C.V. Whitney Cup, the USPA Gold Cup, and the U.S. Open Polo Championship.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '530px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '510px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_9} alt="" />
                        </div>
                        <div className='text-center px-5 mt-5'>
                          <h4 style={{ color: 'brown' }}>Women's handicaps introduced</h4>
                          <h2 style={{ fontWeight: '700' }}>2014</h2>
                          <p>The USPA introduces the addition of women's handicaps to enhance the level of women's polo competition.</p>
                          <AddCircleIcon className='heritage_icon mt-5'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '550px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '530px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_11} alt="" />
                        </div>
                        <div className='text-center px-5  mt-5'>
                          <h4 style={{ color: 'brown' }}>Westchester Cup played in America</h4>
                          <h2 style={{ fontWeight: '700' }}>2008</h2>
                          <p>The USPA officially challenges the Hurlingham Polo Association of England to the Westchester Cup, making the historic duel the first time it is played in America in 70 years.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '520px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_5} alt="" />
                        </div>
                        <div className='text-center px-5 mt-5'>
                          <h4 style={{ color: 'brown' }}>USPA 100th Birthday</h4>
                          <h2 style={{ fontWeight: '700' }}>1990</h2>
                          <p>The United States Polo Association celebrates its 100th birthday.</p>
                          <AddCircleIcon className='heritage_icon mt-5'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 me-md-3 p-2' style={{ height: '550px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '530px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_15} alt="" />
                        </div>
                        <div className='text-center px-5 mt-5'>
                          <h4 style={{ color: 'brown' }}>First women assigned USPA handicaps</h4>
                          <h2 style={{ fontWeight: '700' }}>1973</h2>
                          <p>Elizabeth Daily, Sue Sally Hale, Virginia Merchant and Jorie Butler Richardson are among the first women assigned USPA handicaps.</p>
                          <AddCircleIcon className='heritage_icon mt-4'/>
                        </div>
                      </div>
                    </div>

                  </Col>
                  <Col className='mt-md-5 pt-md-5'>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '540px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 px-md-3 py-md-5' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '520px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_2} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>IPC Purchase</h4>
                          <h2 style={{ fontWeight: '700' }}>2022</h2>
                          <p>June 2022 heralded the month when the United States Polo Association secured the permanent home for polo in the United States. The USPA National Polo Center-Wellington (NPC) offers the sport of polo a lasting future in the Equestrian Capital of the World.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '510px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '490px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-50' src={heritage_img_4} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>Global Polo</h4>
                          <h2 style={{ fontWeight: '700' }}>2020</h2>
                          <p>A first of its kind, this digital destination connects fans with all things polo. Launched in January 2020, Global Polo offers polo games, lifestyle content and behind the scenes stories to grow awareness for the sport of polo.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '540px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '520px' }}>
                        <div className='d-flex justify-content-center'>
                          <img className='w-75' src={heritage_img_6} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>Collegiate Partnership Program</h4>
                          <h2 style={{ fontWeight: '700' }}>2019</h2>
                          <p>Beginning in 2019, U.S. Polo Assn. created the Collegiate Partnership Program, which has supported nearly 50 college teams in the United States helping them build their programs each year to showcase polo at the college level.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '530px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '510px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_8} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>125th Anniversary</h4>
                          <h2 style={{ fontWeight: '700' }}>2015</h2>
                          <p>The 125th anniversary of the USPA is commemorated with nationally televised and live streamed major tournaments throughout the United States, a national competition for creation of the 125th logo and USPA heritage-inspired product around the world recognizing the milestone.</p>
                          <AddCircleIcon className='heritage_icon'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '520px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_10} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>USPA Mentoring Program</h4>
                          <h2 style={{ fontWeight: '700' }}>2010</h2>
                          <p>The official Team USPA training and mentoring program kicks off with try-outs in Florida for young American men and women polo players.</p>
                          <AddCircleIcon className='heritage_icon mt-5'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '520px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_12} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>The 100th Anniversary of the United States Polo Association</h4>
                          <h2 style={{ fontWeight: '700' }}>2004</h2>
                          <p>The International Polo Club at Palm Beach opens and hosts the 100-year anniversary of the United States Polo Association.</p>
                          <AddCircleIcon className='heritage_icon mt-3'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2 ' style={{ height: '520px', marginTop: '10%', padding: '1%',backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_14} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>USPA Global Licensing</h4>
                          <h2 style={{ fontWeight: '700' }}>1981</h2>
                          <p>The licensing program for the United States Polo Association is formed to manage its trademarks and promote the sport of polo.</p>
                          <AddCircleIcon className='heritage_icon mt-5'/>
                        </div>
                      </div>
                    </div>
                    <div className='box shadow rounded-5 ms-md-3 p-2' style={{ height: '520px', marginTop: '10%', padding: '1%', backgroundColor: 'white' }}>
                      <div className='rounded-5 p-1 p-md-3' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '500px' }}>
                        <div className='d-flex justify-content-center'>
                          <img style={{ height: '156px' }} src={heritage_img_16} alt="" />
                        </div>
                        <div className='text-center px-5'>
                          <h4 style={{ color: 'brown' }}>First U.S. Open Polo Championship</h4>
                          <h2 style={{ fontWeight: '700' }}>1904</h2>
                          <p>In New York City, the USA team defeats the British team at the first U.S. Open Polo Championship.</p>
                          <AddCircleIcon className='heritage_icon mt-5'/>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </div>

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

export default Heritage