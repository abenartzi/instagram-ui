import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field } from 'formik';
import './CreatePost.scss'

class CreatePost extends Component {

    validate(values){
        console.log(values)
    }

    render() {
        return (
            <div className="CreatePost">
                <h2>Create Post</h2>
                <Formik initialValues={{image:'', title:'',tags:''}}
                    validate={this.validate.bind(this)}>
                <form className="col-xs-12 col-sm-6">
                    <div className="form-group">
                        <label>Image:</label>
                        <Field type="file" name="image"/>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <Field name="title" className="form-control" placeholder="Enter Title..."/>
                    </div>
                    <div className="form-group">
                        <label>Tags:</label>
                        <Field name="tags" className="form-control" placeholder="Enter Tags..."/>
                    </div>
                    <div className="form-group">
                        <Button>Share</Button> {/*Button from react bootstrap*/}
                    </div>
                </form>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;