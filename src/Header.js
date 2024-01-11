import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useSelector(state => state.Cart)
    return (
        <>
            <div className='header'>
                {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand f-logo" href="#"><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex navi" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className='input-sec'>
                                    <input class="form-control me-2" type="search" placeholder="       Search for Product , Brands and More" aria-label="Search" />
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <a href='#' className='d-flex fbut' onClick={handleShow}><i class="fa-solid fa-user" ></i>Login</a>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><div className='input-area'>
                                        <label>Username</label><br />
                                        <input type='text' id='username' className='form-control login-input' /><br />
                                        <label>Password</label><br />
                                        <input type='password' id='password' className='form-control login-input' /><br />
                                    </div></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose}>
                                            login
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Link to="/viewcart" className='d-flex fbut sbut'><i class="fa-solid fa-cart-shopping"></i>Cart  <sub>{cart.length}</sub></Link>
                                <a href='#' className='d-flex fbut tbut'><i class="fa-solid fa-store"></i>Become a Seller</a>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid >
                        
                        <Navbar.Brand href="#"><a class="navbar-brand f-logo" href="#"><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' /></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <div className='f-l-t'> 
                        <Navbar.Collapse id="navbarScroll">
                        <div className='d-flex navi'>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            
                                <Nav.Link href="#action1"> <a href='#' className='d-flex fbut' onClick={handleShow}><i class="fa-solid fa-user" ></i>Login</a>
                                </Nav.Link>
                
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><div className='input-area'>
                                        <label>Username</label><br />
                                        <input type='text' id='username' className='form-control login-input' /><br />
                                        <label>Password</label><br />
                                        <input type='password' id='password' className='form-control login-input' /><br />
                                    </div></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose}>
                                            login
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Link to="/viewcart" className='d-flex fbut sbut'><i class="fa-solid fa-cart-shopping"></i>Cart  <sub>{cart.length}</sub></Link>


                                <Nav.Link href="#action2"><a href='#' className='d-flex fbut tbut'><i class="fa-solid fa-store"></i>Become a Seller</a></Nav.Link>
                            </Nav>
                            
                            </div>
                        </Navbar.Collapse>
                        </div>
                        
                    </Container>
                </Navbar>


            </div>
        </>
    )
}
