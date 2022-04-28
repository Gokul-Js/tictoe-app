import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavBar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Tic-Toe Game</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <NavDropdown title="More Game" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">PUBG MOBILE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">CALL OF DUTY</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">SUPER MARTO</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Premium Games</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar