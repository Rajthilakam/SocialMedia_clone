import React, { Component } from 'react';
import './SinglePost.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost,likePost,unLikePost } from '../../action/postActions';


class SinglePost extends Component {

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
        this.props.likePost(id)
    }

    onUnLike(id) {
        console.log('unlike clicked')
        this.props.unLikePost(id)
    }


    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }





    render() {

        const { post} = this.props.post
        const {auth} = this.props
        //const { comments } = this.props.post.post

        console.log(post._id)

        let isLiked = false
        if ( post.likes && post.likes.filter(like => like.user === auth.user.id).length > 0) {
            isLiked = true
        }

        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-9 postpage">
                        <div className="postimagecontainer">
                            <img src={post.image} alt="" className="postimage" />
                        </div>
                    </div>

                    <div className="col-md-3 user">
                        <div className="row mt-4">
                            <div className="col-md-2 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                                <img
                                    src={post.postedbyuser && post.postedbyuser.avatar}
                                    className="rounded-circle float-left"
                                    alt="Pizza"
                                    width="54"
                                    height="56"
                                />
                            </div>

                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 pl-md-2 pl-lg-4">

                                <h5 className="d-inline">{post.postedbyuser && post.postedbyuser.name}</h5>
                                <div className="dropleft float-right">
                                    <button className="btn editpostbtn" style={{ border: "none" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <h2 >...</h2>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="#" onClick={this.onSave.bind(this, post._id)}>Save Post</Link>
                                        <Link className="dropdown-item" to="#" onClick={this.onEdit.bind(this, post._id)}>Edit Post</Link>
                                        <Link className="dropdown-item" to="#" onClick={this.onDelete.bind(this, post._id)} >Delete Post</Link>
                                    </div>
                                </div>
                                <p pt-0 className="d-block">August 6th at 12.00 PM</p>
                            </div>
                            <p>{post.text}</p>
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
                                <p>{post.likes && post.likes.length} likes</p>                                   
                                </div>
                                

                            <div className="col-md-6 col-sm-4">
                                <h5>
                                    <i className="far fa-comment fa-lg "></i>
                                    Comment
                                </h5>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col pb-0">
                                <hr />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                                <img
                                    src={post.postedbyuser && post.postedbyuser.avatar}
                                    className="rounded-circle float-left mt-2"
                                    alt="Avatar"
                                    width="44"
                                    height="46"
                                />
                            </div>
                            <div className="col-md-10">
                                <form>
                                    <div className="form-group ml-4">
                                        <input type="text"
                                            name="text"

                                            className="form-control"
                                            id="comments"
                                            onChange={this.onChange}
                                            placeholder="Write a Comment....." />
                                    </div>
                                </form>

                            </div>
                        </div>

                        {post.comments && post.comments.map((comment) => (
                           
                        <div className="row">
                            <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                                <img
                                    src={comment.avatar}
                                    className="rounded-circle float-left"
                                    alt="Avatar"
                                    width="44"
                                    height="46"
                                />
                            </div>
                            <div className="col-md-10 col-sm-10 col-lg-10">
                                <div>
                                    <p className="pl-3 pt-2">{comment.text}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>

            </div>
        )
    }
}



SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    likePost: PropTypes.func.isRequired,
    unLikePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post,
    auth:state.auth
});

export default connect(mapStateToProps, { getPost,likePost,unLikePost })(SinglePost)