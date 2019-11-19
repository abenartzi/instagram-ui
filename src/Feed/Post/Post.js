import React, {Component} from 'react';
import './Post.scss'
import TagList from "./TagList/TagList";

class Post extends Component {

    render() {


        return (
            <div className="d-flex">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-header">
                        <h5 className="card-title">userName</h5>
                        <i className="card-text">Location</i>
                    </div>
                    <img src={this.props.image} alt={this.props.imageId}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>

                        <p className="card-text">{this.props.created}</p>
                        <footer className={'cardFooter'}>
                        <TagList tags={this.props.tags}/>
                        <p className="card-text">{this.props.likes}</p>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;