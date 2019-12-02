import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import './CreatePost.scss'
import postModel from '../models/post.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare} from '@fortawesome/free-solid-svg-icons'
import InputTag from "./InputTag/InputTag";
import UploadBtn from "./UploadBtn/UploadBtn";
import config from "../config";

class CreatePost extends Component {
    //After we enter all the data that we caught from Formik into Values onSubmit we send it with POST to the server.
    //How to send a file...
    submit(values) {
        const data = new FormData();
        for(let key in values) {
            data.append(key, values[key]);
        }
        fetch(config.apiURL + '/api/posts', {
            method:'POST',
            body: data
        }).then(res => res.json())
            .then(post => console.log(post))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container main">
                <div className="CreatePost">
                <h2>Create Post</h2>
                <Formik initialValues={{image:'', title:'',tags:[]}}
                    validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}
                    render={({setFieldValue}) =>{
                        return <Form className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                <input type="file" name="image" id="image" onChange={(event) => {
                                    setFieldValue('image',event.currentTarget.files[0]);
                                }}/>
                                <div className="container-fluid row">
                                    <ErrorMessage className="alert alert-danger" name="image" component="div" />
                                </div>
                            </div>
                            <UploadBtn/>
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
                            <div className="row.form-group d-flex justify-content-end">
                                <Button type="submit" className={"shareBtn"}> <FontAwesomeIcon icon={faShare}/>Share</Button> {/*Button from react bootstrap*/}

                            </div>
                        </Form>

                    }}>

                </Formik>
                </div>
            </div>
        );
    }
}

export default CreatePost;