import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function SpanishNavbar() {
  return (
    <Navbar bg = "dark" variant = "dark" sticky = "top" expand = "sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Wordle en Espanol
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio (Home)</Nav.Link>
            <Nav.Link as={Link} to="/game">Jugar (Begin)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}