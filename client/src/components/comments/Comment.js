import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost} from '../../action/postActions';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';


class Comment extends Component { 

   
    componentWillReceiveProps(nextProps){

        if (nextProps.post.comments) {
            this.setState({comments:nextProps.post.comments})
          }

        if (nextProps.errors){
          this.setState({errors: nextProps.errors});
        }
      }
   
    render() {


        return (
            <>
             <CommentForm postId={this.props.postId}/>
             <CommentFeed  postId={this.props.postId}  comments={this.props.comments} />   
             </>            
        )
    }
}

Comment.propTypes = {
    addComment: PropTypes.func.isRequired,
    getPost:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    post:PropTypes.object.isRequired
  };
  

 

const mapStateToProps = state => ({
    post: state.post,

  });



export default connect(mapStateToProps, { getPost})(Comment) 
