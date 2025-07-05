import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
// import NavLink from 'react-bootstrap/esm/NavLink';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarComponent() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "btn btn-light mx-1" : "btn btn-success mx-1";

  return (
    <Navbar expand="lg" className="custom-navbar" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Stiles Golf Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/home" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tee_times" className={getNavLinkClass}>
              Tee Times
            </NavLink>
            <NavLink to="/course_info" className={getNavLinkClass}>
              Course Info
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="/login" className={getNavLinkClass}>
              <img
                alt=""
                src="/images/person-icon.svg"
                width="20"
                height="20"
                className="d-inline-block align-middle"
                style={{ filter: 'invert(1)' }}
              />{' '}
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;