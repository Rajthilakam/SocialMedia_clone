import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Comment from '../comments/Comment';
import CommentForm from '../comments/CommentForm';
import { deletePost,likePostFeed,unLikePostFeed } from '../../action/postActions';
import './PostItem.css';
import CommentFeed from '../comments/CommentFeed';
//import CommentItem from '../comments/CommentItem.js';

class PostItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            autoFocus: false,
            key: true
        }
        this.onDelete = this.onDelete.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onUnLike = this.onUnLike.bind(this)
        this.onLike = this.onLike.bind(this)

    }




    onDelete(id) {
        console.log('clicked Delete button')
        this.props.deletePost(id)
    }

    onEdit() {
        console.log('clicked Edit button')
    }

    onSave() {
        console.log('clicked save button')
    }

    onUnSave(id) {
        this.props.unSave(id)
    }

    onLike(id) {
        console.log('like clicked')
        this.props.likePostFeed(id)
    }

    onUnLike(id) {
        console.log('unlike clicked')
        this.props.unLikePostFeed(id)
    }


    render() {

        const { post, auth } = this.props;

        

        let isLiked = false
        if (post.likes.filter(like => like.user === auth.user.id).length > 0) {
            isLiked = true
        }


        return (

            

            <div className="row">
                <div className="col">
                    <div className="card topcard mt-3">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                                    <Link to= {`/profile/${post.postedbyuser._id}`}>
                                        <Avatar src={post.postedbyuser.avatar} />
                                    </Link>

                                </div>

                                <div className="col-lg-10 col-md-10 col-sm-10 pl-md-2 pl-lg-4">

                                    <h5 className="d-inline">{post.postedbyuser.name}</h5>

                                    {post.postedbyuser._id === auth.user.id ? (
                                        <div className="dropleft float-right">
                                            <button className="btn editpostbtn" style={{ border: "none" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <h2 >...</h2>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="#" onClick={this.onSave.bind(this, post._id)}>Save Post</Link>
                                                <Link className="dropdown-item" to="#" onClick={this.onEdit}>Edit Post</Link>
                                                <Link className="dropdown-item" to="#" onClick={this.onDelete.bind(this, post._id)}>Delete Post</Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="dropleft float-right">
                                            <button className="btn editpostbtn" style={{ border: "none" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <h2 >...</h2>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="#" onClick={this.onSave.bind(this, post._id)}>Save Post</Link>
                                            </div>
                                        </div>
                                    )
                                    }
                                    <p pt-0 className="d-block">August 6th at 12.00 PM</p>
                                </div>
                            </div>

                            <h6 className="mt-3">{post.text}</h6>

                            <div className="row">
                                <div className="col">
                                    <Link to={`/post/${post._id}`}>
                                        <img
                                            src={post.image ? post.image : ''}
                                            className="postimg"
                                            alt="Pizza"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="row text-center mt-3">
                                <div className="col-md-6 col-sm-4"> 
                                {isLiked === true ? (
                                    <button className="btn likebtn" onClick={this.onUnLike.bind(this, post._id)}>
                                    <h5>
                                        <i className="fa fa-thumbs-up fa-lg fa-fw" aria-hidden="true" style={{color:"black"}}></i>
                                        Like
                                    </h5>
                            </button> 
                                ):(
                                    <button className="btn likebtn" onClick={this.onLike.bind(this, post._id)}>
                                        <h5>
                                            <i className="far fa-thumbs-up fa-lg fa-fw"></i>
                                            Like
                                        </h5>
                                </button> 
                                )}
                                <span>{post.likes.length} likes</span>                                   
                                </div>
                                
                                <div className="col-md-6 col-sm-4">
                                    <button className="btn likebtn">
                                        <h5>
                                            <i className="far fa-comment fa-lg fa-fw"></i>
                                            Comment
                                        </h5>
                                    </button>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col pb-0">
                                    <hr />
                                </div>
                            </div>
                           
                            <CommentForm postId={post._id} />
                            <CommentFeed postId={post._id}
                                comments={post.comments}
                                postedbyuser={post.postedbyuser}

                            />

                        </div>
                    </div>
                </div >
            </div >
        )

    }
}

PostItem.propTypes = {

    deletePost: PropTypes.func.isRequired,
    likePostFeed:PropTypes.func.isRequired,
    unLikePostFeed:PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    //post:state.post

});

export default connect(mapStateToProps, { deletePost,likePostFeed,unLikePostFeed })(PostItem)
