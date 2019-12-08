import React, {Component} from 'react';
import './Feed.scss';
import Post from "./Post/Post";
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';
import config from "../config"

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            loading:false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(config.apiURL + '/api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts,loading:false})
            })
    }

    render() {

        const override = css`
            display:block;
            margin: 0 auto;
            border-color:#5798ff;
        `;


        return (
            <div className="Feed d-flex flex-wrap">
                    {this.state.loading ?
                        <div className="loader">
                            <GridLoader
                                css={override}
                                sizeUnit={"px"}
                                size={80}
                                color={'#5798ff'}
                                loading={this.state.loading}/>
                        </div> :
                        null
                    }
                    {this.state.posts.map(post =>{
                        return <Post key={post._id}
                                created={post.created}
                                image={post.image}
                                title={post.title}
                                likes={post.likes}
                                tags={post.tags}/>
                    })}
            </div>
        );
    }
}

export default Feed;
