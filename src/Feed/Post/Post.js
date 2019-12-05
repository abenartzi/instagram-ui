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
            liked: false
        }
    }
    doLike = () => {
      console.log('clicked');
        this.setState({liked:!this.state.liked})
    };



    render() {
        function timeConverter(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();

            let time = `${date} ${month} ${year}`;
            return time;

        }

        return (
            <div className="col-sm-12 col-md-4">
                    <article className="Post">
                        <header>
                            <div className="Post-date">
                                <FontAwesomeIcon className={"calIcon"} icon={faCalendarAlt}/>
                                {timeConverter(this.props.created)}
                            </div>
                            <Link to={"/profile"} href={"#"}><FontAwesomeIcon icon={faUserCircle} size="2x"/></Link>

                        </header>
                        <div className="Post-image">
                            <img src={this.props.image} alt={this.props.imageId}/>
                        </div>
                        <div className="Post-content" >
                            <h1 className="Post-title">{this.props.title}</h1>
                            <TagList tags={this.props.tags}/>
                        </div>
                        <div className="Post-actions">
                            <FontAwesomeIcon className="heartIcon" icon={faHeart} style={{color:this.state.liked ? "red" : "black"}} onClick={this.doLike.bind(this)}/>{this.props.likes}
                        </div>
                    </article>

            </div>


        );
    }
}

export default Post;