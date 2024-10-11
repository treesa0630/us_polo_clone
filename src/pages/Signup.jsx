import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import SmsIcon from '@mui/icons-material/Sms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Signup() {
    return (
        <>
            <div className='account-main' style={{ height: '100vh', width: '100%' }}>
                <div style={{ height: '25vh' }} className='d-flex justify-content-center align-items-end'><h1 className='account-heading'>MY ACCOUNT</h1></div>
                <Row>
                    <Col sm={3}></Col>
                    <Col className='px-4 '>
                        <Row className='d-flex mt-5'>
                            <Col className='text-center' ><Link to='/login' className='acnt-name'><h4 >LOGIN</h4></Link>
                                <hr className='login-hr' /></Col>
                            <Col className='text-center'><h4><Link to='/signup' className='acnt-name text-dark'>SIGNUP</Link></h4>
                                <hr className='signup-hr' /></Col>
                        </Row>

                        <div className='input-box d-flex justify-content-between mt-5'>
                            <p ><b>* Sign up using Mobile Number</b></p>
                            <p ><a className='text-dark' href="">Sign up using email</a></p>
                        </div>
                        <input type="text" className='form-control px-3 rounded-4 shadow' style={{ height: '50px' }} placeholder='Mobile Number' name="" id="" />

                        <p className='input-box mt-2'><b>* Enter OTP</b></p>
                        <div className='d-flex'>
                            <input checked type="radio" name="sms" id="sms" value='sms' />
                            <label className='ms-3' for="option1"><SmsIcon /> SMS</label>

                            <input className='ms-5' type="radio" name="whatsapp" id="whatsapp" value='whatsapp' />
                            <label className='ms-3' for="option1"><WhatsAppIcon style={{ color: 'green' }} /> WhatsApp</label>

                        </div>
                        <div className='d-flex'>
                            <input type="text" className='form-control px-3 mt-2 rounded-4 shadow' style={{ height: '50px' }} placeholder='Enter OTP' name="" id="" />
                            <button style={{ height: '50px',width:'100px' }} variant="" className=' border rounded-4 ms-3 mt-2 bg-transparent shadow'>Get OPT</button>
                        </div>

                        <input checked className='mt-4' type="checkbox" name="" id="" /><label className='input-box ms-3'>Agree to receive communications related to order and promotional offers.</label>

                        <p className='text-center mt-5 complete-profile'>Complete my profile <ArrowDropDownIcon /> </p>

                        {/* <Button style={{ height: '45px' }} variant="" className='bg-dark text-light w-100 rounded-3'>SIGNUP</Button> */}
                        <button style={{ height: '45px' }} variant="" className='bg-dark text-light w-100 rounded-3 shadow'>SIGNUP</button>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                
            </div>
        </>
    )
}

export default Signup