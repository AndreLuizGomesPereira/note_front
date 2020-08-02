/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Navbar, Container } from 'rbx';
import logo from '../../assets/images/logo.png';
import '../../styles/header.scss';


function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img src={logo} />
                    <Navbar.Burger
                        className="navbar-burger burger"
                        arial-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        Item 1
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default Header();