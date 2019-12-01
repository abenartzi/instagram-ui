import React, {Component} from 'react';
import './Registration.scss'

class Registration extends Component {
    render() {
        return (
            <div className="container main">
                <div className="heightPlaceholder"></div>
                    <h2>Registration</h2>
                    <hr/>
                <form action="#" className="col-xs-12 col-md-6">
                    <div className="row form-group">
                        <label htmlFor="" >Name:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="" >Username:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="" >Password:</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="" >Birth Date:</label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="row form-group ">
                        <label htmlFor="" >Gender:</label>
                        <input type="radio" name="gender"/>Male
                        <input type="radio" name="gender"/>Female
                    </div>





                </form>



            </div>
        );
    }
}

export default Registration;