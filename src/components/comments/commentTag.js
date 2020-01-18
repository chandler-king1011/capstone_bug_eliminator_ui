import React, { Component } from 'react';


class CommentTag extends Component {
  constructor(props) {
  super(props);
}
  render() {
    const {comments_text, comments_created_date, users_first_name, users_last_name, users_role} = this.props.comment;
     return(
        <div className="comment-tag">
            <div className="comment-tag__top-wrapper">
                <div className="comment-tag__user">
                    <div className="comment-tag__user-name">{`${users_first_name} ${users_last_name}`}</div>
                    <div className="comment-tag__user-role">{`${users_role}`}</div>
                </div>
                <div className="comment-tag__date">{comments_created_date.slice(0, 10)}</div>
            </div>
            <div className="comment-tag__text">{comments_text}</div>
        </div>
    )
}
}

export default CommentTag;