import React, {Component} from 'react';
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';

import './Feed.scss';
import Post from "./Post/Post";

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
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
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
            <div>
                <div className="heightPlaceholder"></div>
                <div className="loading">
                    {this.state.loading ?
                        <div>
                            <GridLoader
                                css={override}
                                sizeUnit={"px"}
                                size={80}
                                color={'#5798ff'}
                                loading={this.state.loading}/>
                        </div> : null
                    }
                </div>
                <div className='container'>
                    {this.state.posts.map(post =>{
                        return <Post

                            key={post.id}
                            created={post.created}
                            image={post.image}
                            title={post.title}
                            likes={post.likes}
                            tags={post.tags}
                        />

                    })}
                </div>
            </div>
        );
    }
}

export default Feed;