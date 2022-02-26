import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./nav.css";

const NavBar = () => {
  const [navbar, setnavabr] = useState(false);

  const changebackgrond = () => {
    if (window.scrollY >= 100) {
      setnavabr(true);
    } else {
      setnavabr(false);
    }
  };
  window.addEventListener("scroll", changebackgrond);
  return (
    <>
      <div className="container">
        <Navbar
          className={navbar ? "fixed-top" : "navbar"}
          bg="dark"
          variant="dark"
          expand="lg"
          style={{ height: "100px" }}
        >
          <Container fluid>
            <Navbar.Brand
              className="mx-5 px-5"
              href="#"
              style={{ fontFamily: "Bakbak One, cursive", fontSize: "30px" }}
            >
              Clinton
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                navbarScroll
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "150px" }}
              >
                <Link to="home" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">Home</Nav.Link>
                </Link>
                <Link to="about" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">About</Nav.Link>
                </Link>

                <Link to="service" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">Services</Nav.Link>
                </Link>
                <Link to="resume" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">Resume</Nav.Link>
                </Link>
                <Link to="blog" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">Blog</Nav.Link>
                </Link>

                <Link to="contact" smooth={true} offset={-70} duration={500}>
                  <Nav.Link className="mx-4">Contact Us</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
