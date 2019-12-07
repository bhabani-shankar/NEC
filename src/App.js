import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


function App() {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Happy Faces</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href="#home">About</Nav.Link>
    <Nav.Link href="#home">Sign up</Nav.Link>
    </Navbar.Collapse>
    
  </Navbar>
  <Image src="" fluid />
  
  );
}

export default App;
