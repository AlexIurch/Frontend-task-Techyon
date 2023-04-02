import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div className='nav-block '>
    <p className="aviable" color='white
    '>We work for the progress and prosperity of society</p>
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=" ml-3">
        <Navbar.Brand as = {Link} to="/" className='px-3 order-1 order-sm-1' >Strøm.no</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav button  ml-5 " />
        <Navbar.Collapse id="navbar-nav"  className="order-1 order-lg-1 ">    
          <Nav className="me-auto">
          </Nav>
          <Nav className='px-3'>
            <Nav.Link as = {Link} to="/">Home</Nav.Link>
            <NavDropdown title="Personal page" id="basic-nav-dropdown">
              <NavDropdown.Item as = {Link} to="/meter1">Meter1</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to="/meter2">Meter2</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to="/usage">Usage</NavDropdown.Item>        
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
  
    </Navbar>
    </div>
  );
}

export default Navigation;