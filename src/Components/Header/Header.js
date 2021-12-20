import React from "react";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png"
import './Header.css';


const Header = () => {
    return (
        <header>
            <Navbar className="">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/home">
                        <Image className="w-50" src={Logo}></Image>
                        </Link>
                        
                    </Navbar.Brand>
                    <Nav className="navlist">
                        <Link className="navLink" to="/home">Home</Link>
                        <Link className="navLink" to="/service">Service</Link>
                        <Link className="navLink" to="/about">About</Link>
                        <Link className="navLink" to="/contact">Contact</Link>
                        <Link className="navLink" to="/">
                            <Button variant="warning">Register Now</Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
