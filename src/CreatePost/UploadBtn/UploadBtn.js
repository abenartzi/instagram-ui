import React, {Component} from 'react';
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

class UploadBtn extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/*https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/*/}
                <Field className="inputfile" id="image" type="file" name="image"/>
                <label htmlFor="file"> <FontAwesomeIcon icon={faCloudUploadAlt}  /> <strong>Upload an image</strong></label>
            </div>

        );
    }
}

export default UploadBtn;
