import React, {Component} from 'react';
import './Post.scss'
import TagList from "./TagList/TagList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : 'black',
            like: false
        }
    }

    heartSetColor = (e) => {
        if(!this.state.like){
            return this.setState({color:'red',like:true})
        }else{
            return this.setState({color:'black',like:false})
        }
    }

    ;

    render() {


        return (
            <div className="d-flex">
                <div className="card">

                    <div className="card-header">
                            <span className="cardDate">
                            <FontAwesomeIcon className={"calIcon"} icon={faCalendarAlt}/>
                            <span className="card-text">{this.props.created}</span>
                            </span>

                        <Link to={"/profile"} href={"#"} className="card-title"><FontAwesomeIcon className="userCircleIcon" icon={faUserCircle} size="2x"/></Link>
                    </div>

                    <div className="userImage">
                        <img src={this.props.image} alt={this.props.imageId}/>
                    </div>

                    <div className="card-body">

                            <div><h5 className="card-title">{this.props.title}</h5></div>

                        <footer className={'cardFooter'}>
                            <TagList tags={this.props.tags}/>
                            <div className="card-text" onClick={this.heartSetColor}><FontAwesomeIcon className="heartIcon" icon={faHeart} style={{color:this.state.color}}/>{this.props.likes}</div>
                        </footer>

                    </div>
                </div>
            </div>
        );
    }
}

export default Post;