import React, {Component} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../Images/headerImage/instagramLogo.png"
import { Navbar, Nav} from 'react-bootstrap'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    render() {
        return (
            <Navbar expand="lg" className="Header">
                <Navbar.Brand>
                    <Link className="nav-link" to="/">
                        <img  src="https://img.icons8.com/nolan/64/000000/instagram-new.png" alt="#"/>
                        <div className="vl"></div>
                        <img className="instaLogo" src={logo} alt="instagramLogo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/post/create/">Create Post</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/settings">Settings</Link>

                    </Nav>
                    <div inline="true">
                        <div className="user">
                            <div className="user-avatar">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                            <div className="user-text">
                                <Link className="nav-link" to="/register">Register</Link>
                                <Link className="nav-link" to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;

