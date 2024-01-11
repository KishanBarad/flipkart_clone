import React from 'react'
import './fotter.css';
import { Container } from 'react-bootstrap';

export default function Fotter() {
    return (
        <>
            <div className='fotter'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h6>ABOUT</h6>
                            <ul>
                                <li><a href='#'>Contact Us</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Careers</a></li>
                                <li><a href='#'>Flipkart Stories</a></li>
                                <li><a href='#'>Press</a></li>
                                <li><a href='#'>Flipkart Wholesale</a></li>
                                <li><a href='#'>Cleartrip</a></li>
                                <li><a href='#'>Corporate Information</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                        <h6>HELP</h6>
                            <ul>
                                <li><a href='#'>Payments</a></li>
                                <li><a href='#'>Shipping</a></li>
                                <li><a href='#'>Cancellation & Returns</a></li>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Report Infringement</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                        <h6>CONSUMER POLICY</h6>
                        <ul>
                            <li><a href='#'>Cancellation & Returns</a></li>
                            <li><a href='#'>Terms Of Use</a></li>
                            <li><a href='#'>Security</a></li>
                            <li><a href='#'>Sitemap</a></li>
                            <li><a href='#'>Grievance Redressal</a></li>
                            <li><a href='#'>EPR Compliance</a></li>
                        </ul>
                        </div>
                        <div className='col-lg-3'>
                        <h6>SOCIAL</h6>
                        <ul>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Twitter</a></li>
                            <li><a href='#'>YouTube</a></li>
                        </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
