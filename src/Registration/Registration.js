import React, {Component} from 'react';
import './Registration.scss'

class Registration extends Component {
    render() {
        return (
            <div className="container main">
                <div className="heightPlaceholder"></div>
                    <h2>Registration</h2>
                    <hr/>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Username:</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password:</label>
                        <input type="password" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Birth Date:</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div>
                        <label htmlFor="exampleCheck1">Gender: </label>
                        <input className="gender" name="gender" type="radio"  id="exampleCheck1"/>Male
                        <input className="gender" name="gender" type="radio"  id="exampleCheck1"/>Female
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>
        );
    }
}

export default Registration;