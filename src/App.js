import React from 'react';
import { Navbar, Container} from 'rbx';
import './App.scss';
import logoImage from '../src/assets/images/logo.png';
import '../src/styles/header.scss';


const App = () => (
  <Navbar>
            <Container>
                <Navbar.Brand>
                  <img src={logoImage} />
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        One Item
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>

)

export default App;
