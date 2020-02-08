import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class CommentTag extends Component {
  constructor(props) {
  super(props);

  this.state = {
    edit: false

  }
}
  render() {
    const {
      comments_text, 
      comments_created_date, 
      users_first_name, 
      users_last_name, 
      users_role, 
      comments_id,
      comments_users_id
    } = this.props.comment;

    const userId = this.props.userId;
     return(
        <div className="comment-tag">
            <div className="comment-tag__top-wrapper">
                <div className="comment-tag__user">
                    <div className="comment-tag__user-name">{`${users_first_name} ${users_last_name}`}</div>
                    <div className="comment-tag__user-role">{`${users_role}`}</div>
                </div>
                {userId === comments_users_id ?
                <div className="comment-tag__edit-icons">
                  <a onClick={() => this.props.delete(comments_id, this.props.token)}>   
                    <FontAwesomeIcon icon="trash-alt"/>
                  </a>
                </div>
                : null} 
                <div className="comment-tag__date">{comments_created_date.slice(0, 10)}</div>
            </div>
            <div className="comment-tag__text">{comments_text}</div>
        </div>
    )
}
}

export default CommentTag;