import React, {Component} from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import logo from "../Images/headerImage/instagramLogo.png"

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixedNav">
                <div>
                    <Link to={"/"} className="navbar navbar-expand-lg navbar-light">
                    <img  src="https://img.icons8.com/nolan/64/000000/instagram-new.png" alt="#"/>
                    <div className="vl"></div>
                    <img className="instaLogo" src={logo} alt="instagramLogo"/>
                </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

