import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';
import BugDetailHeader from './bugDetailHeader';
import Sidebar from './detailSidebar';
import CommentTag from '../comments/commentTag';
import NewComment from '../comments/newComment';



class BugDetail extends Component {
  constructor(props) {
  super(props);

  this.handleNewCommentSubmit = this.handleNewCommentSubmit.bind(this);
  }

  componentWillMount() {
      this.props.fetchCurrentBug(this.props.match.params.slug, this.props.userToken);
      this.props.fetchComments(this.props.match.params.slug, this.props.userToken);
  }

  componentWillUnmount() {
      this.props.removeCurrentBug();
  }

  handleNewCommentSubmit(comment) {
    let commentData = {
        comments_users_id : this.props.user.users_id,
        comments_bugs_id : this.props.currentBug.bugs_id,
        comments_text : comment,
        comments_created_date : moment().format()
    }
    this.props.postComment(commentData, this.props.userToken);
  }


  render() {
    return(
        <div className="bug-detail">
            <DashboardHeader
                pageTitle="Bug Detail"
                className="bug-detail__header"   
                linkOne="/user-dashboard"
                linkOneName="Back To Dashboard"
                logOut={() =>this.props.logout()}
            />
            <BugDetailHeader className="bug-detail__bug-header" bugTitle={this.props.currentBug.bugs_title}/>
            <div className="bug-detail__body-wrapper">
                <Sidebar 
                    bug={this.props.currentBug}
                    token={this.props.userToken}
                    updateBug={this.props.updateBug}
                    userId ={this.props.user.users_id}
                />
                <div className="bug-detail__description-comments">
                    <div className="bug-detail__description">{this.props.currentBug.bugs_description}</div>
                    <div className="bug-detail__comments-wrapper">
                        {this.props.currentBugComments.length > 0 ? this.props.currentBugComments.map(comment => {
                            return (
                            <CommentTag 
                                key={comment.comments_id}
                                comment={comment} 
                                delete={this.props.deleteComment}
                                token={this.props.userToken}
                                userId={this.props.user.users_id}
                            />
                            )
                        }) : <div className="bug-detail__no-comments">There are no comments for this bug yet.</div>}
                    <NewComment 
                        className="bug-detail__new-comment"
                        onSubmit={this.handleNewCommentSubmit}
                    />
                    </div>


                </div>
                <div className="bug-detail__pictures">
                    {console.log(this.props.currentBug.bugs_image_one)}
                    <img src={this.props.currentBug.bugs_image_one} />
                    <img src={this.props.currentBug.bugs_image_two} />
                </div>


            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const { userToken, user } = state.userReducer;
    const { currentBug } = state.bugReducer;
    const { currentBugComments } = state.commentReducer;
    return {
        currentBug,
        currentBugComments,
        userToken,
        user
    }
}

export default connect (mapStateToProps, actions)(BugDetail);