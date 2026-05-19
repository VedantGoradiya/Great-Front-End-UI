import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-3 text-uppercase"
        >
          Great UI
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;