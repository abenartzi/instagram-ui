import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { Formik, Field, Form ,ErrorMessage} from 'formik';
import postModel from '../models/post.model'
import './CreatePost.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import config from "../config";
import TagsInput from 'react-tagsinput'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }

    //After we enter all the data that we caught from Formik into Values onSubmit we send it with POST to the server.
    //How to send a file...

    handleTagsChange(tags) {
        this.setState({
            tags: tags
        });
    }

    convertToFormData(values) {
        const data = new FormData();
        for (let key in values) {
            Array.isArray(values[key])
                ? values[key].forEach(value => data.append(key + '[]', value))
                : data.append(key, values[key]) ;
        }
        return data;
    }

    submit(values) {
        const formData = this.convertToFormData(values);
        fetch(config.apiURL + '/api/posts', {
            method:'POST',
            body: formData
        }).then(res => res.json())
            .then(post => console.log(post))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="CreatePost">
                <h2>Create Post</h2>
                <Formik initialValues={{image:'', title:'',tags:[]}}
                    validationSchema={postModel}
                        onSubmit={this.submit.bind(this)}
                    render={({setFieldValue}) =>{
                        return <Form className="col-xs-12 col-sm-6">
                            <div className="row form-group">
                                <input type="file" name="image" id="image" onChange={(event) => {
                                    setFieldValue('image',event.currentTarget.files[0]);
                                }}/>
                                <label htmlFor="image" className="upload-button">
                                    <span>
                                            <FontAwesomeIcon icon={faCloudUploadAlt}/>
                                            Select an image
                                    </span>
                                </label>
                                <div className="container-fluid row">
                                    <ErrorMessage className="alert alert-danger mt-2" name="image" component="div" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <label>Title:</label>
                                <Field as={"textarea"} name="title" className="form-control" placeholder="Enter Title..." spellCheck="false" maxLength={256}/>
                                <div className="container-fluid row">
                                    <ErrorMessage className="alert alert-danger mt-2 my-2" name="title" component="div" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <label>Tags:</label>
                                    <TagsInput value={this.state.tags}
                                               onChange={(tags) => {
                                                   this.handleTagsChange(tags);
                                                   setFieldValue('tags', tags);
                                               }}
                                               className="tags-wrapper"/>
                                <ErrorMessage className="alert alert-danger mt-2" name="tags" component="div" />
                                <div><sub>Press Enter after inserting a tag</sub></div>
                                {/*<Field name="tags" className="form-control" placeholder="Enter Tags..."/>*/}
                                {/*<InputTag/>*/}

                            </div>
                            <div className="row form-group d-flex justify-content-end">
                                <Button type="submit">
                                    <FontAwesomeIcon icon={faShare}/>&nbsp;
                                    Share
                                </Button> {/*Button from react bootstrap*/}

                            </div>
                        </Form>;

                    }}>

                </Formik>
            </div>
        );
    }
}

export default CreatePost;