import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux'
import CommentItem from './CommentItem';

class CommentFeed extends Component {


   


    render() {
        const { comments, postId,postedbyuser } = this.props;
        console.log(postedbyuser)
        return comments.map(comment => (
            <CommentItem key={comment._id} comment={comment}
                                             postId={postId} 
                                             postedbyuser={postedbyuser}
                                             />
          ));       
    }
}



CommentFeed.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
    postedbyuser:PropTypes.object.isRequired
  };


 

export default CommentFeed