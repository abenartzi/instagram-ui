import React, {Component} from 'react';
import './Feed.scss';
import Post from "./Post/Post";
import TagList from "./Post/TagList/TagList";


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({posts})
                console.log(posts)
            })
    }

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

            <div className='container'>
                {this.state.posts.map(post =>{
                    return <Post
                        key={post.id}
                        created={timeConverter(post.created)}
                        image={post.image}
                        title={post.title}
                        likes={post.likes}
                        tags={post.tags}
                    >


                    </Post>
                })}
            </div>
        );
    }
}

export default Feed;
