import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
            id: 1388534400000,
            author: 'Pete Hunt',
            text: 'Hey there!',
        },
        {
            id: 1420070400000,
            author: 'Paul O’Shannessy',
            text: 'React is great!',
        },
      ],
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit({ author, text }) {
    this.setState({
      comments : [...this.state.comments, { author, text, id: Date.now() }]
    });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
