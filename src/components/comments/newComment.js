import React, { Component } from 'react';


class NewComment extends Component {
  constructor(props) {
  super(props);

  this.state = {
      commentText: ""
  }

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);

}


  onSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.commentText);
  }
  
  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
        });
  }

  render() {
    return(
        <form className={`new-comment__form ${this.props.className}`} onSubmit={this.onSubmit}>
            <textarea 
                className="new-comment__text"
                name="commentText"
                onChange={this.onChange}
                value={this.state.commentText}
                placeholder="New Comment..."
            />
            <button className="new-comment__button" type="submit">Add Comment</button>
        </form>
    )
}
}

export default NewComment;