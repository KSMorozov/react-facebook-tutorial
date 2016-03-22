import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handlePostSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) return ;
    this.props.onCommentSubmit({ author, text });
    this.setState({ author: '', text: '' });
  }

  render() {
    return (
      <div>
        <form className="CommentForm">
          <input type="text" placeholder="Your Name" value={this.state.author}
                 onChange={this.handleAuthorChange}
          />
          <input type="text" placeholder="Say Something. . ." value={this.state.text}
                 onChange={this.handleTextChange}
          />
        <input type="submit" onClick={this.handlePostSubmit} value="Send"/>
        </form>
        <div>
          <input type="text" disabled value={this.state.author} />
          <input type="text" disabled value={this.state.text} />
        </div>
      </div>
    );
  }
}

export default CommentForm;
