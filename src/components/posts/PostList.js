import React, { Component } from 'react'; 
import PostItem from './PostItem';

class PostList extends Component {
    render() {
        const postItems = this.props.posts.map((post) => {
            return (
                <PostItem post={post}/>
            )
        })

        return (
            <ul className="list-group">
                <br/>
                {postItems}
                <br/>
            </ul>
        )
    }
}

export default PostList;