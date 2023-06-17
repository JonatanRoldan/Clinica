import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useRef } from "react";
import logo from '../assets/img/logoc.png';
import icon1 from '../assets/img/icon-whatsapp.png';
import './Navbar.css';


const NavCollaps = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [servicios, setServicios] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    setServicios(true)
    window.addEventListener("scroll", () => {
     setServicios(true)
    })
  }, [])

  const scrollService = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth"
    })
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === '/' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="/login" className={activeLink === 'login' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link>
            {servicios && (
              <button onClick={scrollService} className='buttonS'>Servicios</button>
            )}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://api.whatsapp.com/send/?phone=50236289472&text=Hola%20Bienvenido!"><img src={icon1} alt="whatsapp" /></a>
            </div>
            <button className="vvd"><span>Hacer cita</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavCollaps

//<Nav.Link href="/Servicios" className={activeLink === 'Servicios' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Servicios</Nav.Link>