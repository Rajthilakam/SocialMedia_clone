import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCommentFeed } from '../../action/postActions';
import './CommentItem.css';


class CommentItem extends Component {

    onDeleteClick(postId, commentId) {
        console.log('in comment delete')
        this.props.deleteCommentFeed(postId, commentId);
      }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
          this.setState({ errors: newProps.errors });
        }

    }
  
    render() {

        const { comment,postId } = this.props;
        const {auth} = this.props;

        return (
            <div className="row">

                <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                    <Link to='#'>
                        <img
                            src={comment.avatar}
                            className="rounded-circle float-left mt-3"
                            alt="Pizza"
                            width="44"
                            height="46"
                        />
                    </Link>
                </div>

                <div className="col-lg-10 col-md-10 col-sm-10 pl-md-2 pl-lg-4 mt-3">

                    <h5 className="d-inline">{comment.name}</h5>
                    {comment.user === auth.user.id ? (
                    <div className="dropleft float-right">
                        <button className="btn editpostbtn" 
                        
                        style={{ border: "none" }} type="button" 
                        id="dropdownMenuButton" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                            <h2 >...</h2>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="#">Edit Comment</Link>
                            <Link className="dropdown-item" to="#" onClick={this.onDeleteClick.bind(this, postId, comment._id)}>Delete Comment</Link>
                        </div>
                    </div>):''}
                        
                    

                    <p>{comment.text}</p>
                </div>


            </div>



        )
    }
}


CommentItem.propTypes = {
    deleteCommentFeed:PropTypes.func.isRequired,
    postedbyuser:PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
   
    auth: state.auth,
    
  });



export default connect(mapStateToProps, {deleteCommentFeed})(CommentItem)  
