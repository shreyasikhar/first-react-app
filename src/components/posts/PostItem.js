import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
        <li className="list-group-item"><h4>{this.props.post.title}</h4><br/>{this.props.post.body}</li>
        )
    }
}

export default PostItem;