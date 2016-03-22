import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import fetch from 'isomorphic-fetch';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {
    return (
      this.props.comments.map(comment => {
        return (
          <Comment author={comment.author} key={comment.id}>
            { comment.text }
          </Comment>
        );
      })
    );
  }

  render() {
    return (
      <div className="commentList">
        { this.renderComments() }
    </div>
    );
  }
}

export default CommentList;
