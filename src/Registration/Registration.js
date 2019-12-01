import React, {Component} from 'react';

class Registration extends Component {
    render() {
        return (
            <main className="container">
                <h2>Registration</h2>
                <form action="#" className="col-xs-12 col-md-6">
                    <div className="row form-group">
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                    </div>
                    <div className="row form-group">
                        <label htmlFor="">Username</label>
                        <input type="text"/>
                    </div>




                </form>
            </main>
        );
    }
}

export default Registration;