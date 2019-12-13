import React, {Component} from 'react';
import {Link} from "react-router-dom";
import config from "../../config";
import './UserBox.scss'
class UserBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        fetch(config.apiURL + '/api/users/me',{
            credentials:"include"
        })
            .then(res => res.json())
            .then(user => {
                    this.setState({user})
                    console.log('Success !')
                })
            .catch(e => console.log(e));
    }
    userLogout() {
        this.setState({
            user:null
        });
        document.cookie = "user=; expires=" + new Date().toString()
        console.log('Logged out!');
    }

    render() {

        return (
            <div>
                {this.state.user
                    ? <div>
                        <span>Hello {this.state.user.username}</span>
                        <div  className='userLogout' onClick={this.userLogout.bind(this)}>Logout</div>
                    </div>
                    : <div className="d-flex">
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                }
            </div>

        );
    }
}

export default UserBox;