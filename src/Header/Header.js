import React, {Component} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../Images/headerImage/instagramLogo.png"
import { Navbar, Nav} from 'react-bootstrap'

class Header extends Component {

    render() {
        return (
            <Navbar className="fixedNav" bg="light" expand="lg">
                <Link className="nav-link" to="/">
                    <img  src="https://img.icons8.com/nolan/64/000000/instagram-new.png" alt="#"/>
                    <div className="vl"></div>
                    <img className="instaLogo" src={logo} alt="instagramLogo"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Link className="nav-link" to="/post/create/">Create Post</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;

