// https://medium.com/@jerrylowm/build-a-tags-input-react-component-from-scratch-1524f02acb9a

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react';
import './InputTag.scss'
class InputTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        }
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
        if(e.key === 'Enter' && val){
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            e.preventDefault();
            this.setState({tags:[...this.state.tags, "#" + val]});
            this.tagInput.value = null;
        }else if(e.key === 'Backspace' && !val) {
            this.removeTag(this.state.tags.length -1);
        }
    };

    removeTag = (i) => {
        const newTags = [ ...this.state.tags ];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    };


    render() {
        return (
            <div className="input-tag">
                <ul className="input-tag_tags">

                    {this.state.tags.map((tag,i) => (
                        <li key={tag}>
                            {tag}
                            <button type="button" onClick={() => { this.removeTag(i); }}> <FontAwesomeIcon icon={faTimesCircle}/> </button>
                        </li>
                    ))}
                    <li className="input-tag_tags_input">
                        <input type="text" onKeyDown={this.inputKeyDown} ref={c => {this.tagInput = c; }} placeholder={"Press enter to add tags"} maxLength={20}/>

                    </li>

                </ul>
            </div>
        );
    }
}

export default InputTag;