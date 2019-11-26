import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import './CreatePost.scss'
import postModel from '../models/post.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
class CreatePost extends Component {

    submit(values) {
        console.log(values)
    }

    render() {
        return (
            <div className="container main">
                <div className="CreatePost">
                <h2>Create Post</h2>
                <Formik initialValues={{image:'', title:'',tags:''}}
                    validationSchema={postModel} onSubmit={this.submit.bind(this)}>
                <Form className="col-xs-12 col-sm-6">
                    <div className="form-group">

                        <Field className="inputfile" id="file" type="file" name="image"/>
                        <label htmlFor="file"> <FontAwesomeIcon icon={faCloudUploadAlt}/> <strong>Choose a file...</strong></label>

                        <div className="container-fluid row">
                        <ErrorMessage className="alert alert-danger" name="image" component="div" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <Field as={"textarea"} name="title" className="form-control" placeholder="Enter Title..." spellCheck="false" maxLength={256}/>
                        <div className="container-fluid row">
                        <ErrorMessage className="alert alert-danger mt-2 my-2" name="title" component="div" />
                        </div>
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
            </div>
        );
    }
}

export default CreatePost;