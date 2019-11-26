import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import './CreatePost.scss'
import postModel from '../models/post.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt, faShare, faShareAlt, faShareSquare} from '@fortawesome/free-solid-svg-icons'
import InputTag from "./InputTag/InputTag";
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
                        {/*https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/*/}
                        <Field className="inputfile" id="file" type="file" name="image"/>
                        <label htmlFor="file"> <FontAwesomeIcon icon={faCloudUploadAlt}/> <strong>Choose a file...</strong></label>

                        <div className="container-fluid row">
                        <ErrorMessage className="alert alert-danger" name="image" component="div" />
                        </div>
                    </div>
                    <div className="row.form-group">
                        <label>Title:</label>
                        <Field as={"textarea"} name="title" className="form-control" placeholder="Enter Title..." spellCheck="false" maxLength={256}/>
                        <div className="container-fluid row">
                        <ErrorMessage className="alert alert-danger mt-2 my-2" name="title" component="div" />
                        </div>
                    </div>
                    <div className="row.form-group">
                        <label>Tags:</label>
                        {/*<Field name="tags" className="form-control" placeholder="Enter Tags..."/>*/}
                        <InputTag/>
                    </div>
                    <div className="row form-group d-flex justify-content-end">
                        <Button type="submit" className={"shareBtn"}> <FontAwesomeIcon icon={faShare}/>Share</Button> {/*Button from react bootstrap*/}

                    </div>
                </Form>
                </Formik>
                </div>
            </div>
        );
    }
}

export default CreatePost;