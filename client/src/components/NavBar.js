

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to={"/"}>Fitness Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/activity-tracker"}>Dashboard</Nav.Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Fitness Profile" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/water-intake"}>Water Intake</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/calories"}>Calorie Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/add-workout"}>Add a Workout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={"/about"}>About Fitness Tracker</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  );
}

export default NavBar;