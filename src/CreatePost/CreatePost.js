import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import './CreatePost.scss'
import postModel from '../models/post.model'

class CreatePost extends Component {

    submit(values) {
        console.log(values)
    }

    render() {
        return (
            <div className="CreatePost">
                <h2>Create Post</h2>
                <Formik initialValues={{image:'', title:'',tags:''}}
                    validationSchema={postModel} onSubmit={this.submit.bind(this)}>
                <Form className="col-xs-12 col-sm-6">
                    <div className="form-group">
                        <label>Image:</label>
                        <Field type="file" name="image"/>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <Field name="title" className="form-control" placeholder="Enter Title..."/>
                        <ErrorMessage className="alert alert-danger" name="title" component="div" />
                    </div>
                    <div className="form-group">
                        <label>Tags:</label>
                        <Field name="tags" className="form-control" placeholder="Enter Tags..."/>
                    </div>
                    <div className="form-group">
                        <Button type="submit">Share</Button> {/*Button from react bootstrap*/}
                    </div>
                </Form>
                </Formik>
            </div>
        );
    }
}

export default CreatePost;