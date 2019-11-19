import React, {Component} from 'react';
import './Post.scss'
import TagList from "./TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons'
class Post extends Component {

    render() {


        return (
            <div className="d-flex">
                <div className="card" style={{width: "22rem"}}>

                    <div className="card-header">
                        <h5 className="card-title"><FontAwesomeIcon icon={faUserCircle} size="2x"/></h5>
                        <p className="card-text"><FontAwesomeIcon icon={faCalendarAlt}/>{this.props.created}</p>
                    </div>

                    <div className="userImage">
                    <img src={this.props.image} alt={this.props.imageId}/>
                    </div>

                    <div className="card-body">
                        <div><h5 className="card-title">{this.props.title}</h5></div>

                        <footer className={'cardFooter'}>
                        <TagList tags={this.props.tags}/>
                        <div className="card-text"><FontAwesomeIcon icon={faHeart}/>{this.props.likes}</div>
                        </footer>

                    </div>
                </div>
            </div>
        );
    }
}

export default Post;