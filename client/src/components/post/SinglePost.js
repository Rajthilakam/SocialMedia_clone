import React, { Component } from 'react';
import './SinglePost.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../../action/postActions';
//import baby from '../../photos/baby2.jpg';
//import Avatar from '../common/Avatar';


class SinglePost extends Component {

    componentDidMount() {

        this.props.getPost(this.props.match.params.id);
    }




    render() {

        const { post } = this.props.post;
        console.log('hello')
        console.log(post.postedbyuser)


        return (
            <div className="constiner-fluid">
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
                                    src=''
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
                                        <Link className="dropdown-item" to="#">Save Post</Link>
                                        <Link className="dropdown-item" to="#">Edit Post</Link>
                                        <Link className="dropdown-item" to="#">Delete Post</Link>
                                    </div>
                                </div>
                                <p pt-0 className="d-block">August 6th at 12.00 PM</p>
                            </div>


                            <p>{post.text}</p>
                        </div>

                        <div className="row text-center mt-3">
                            <div className="col-md-6 col-sm-4">
                                <h5>
                                    <i className="far fa-thumbs-up fa-lg"></i>
                                    Like
                                </h5>
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
                                    src="photos/pizza.jpg"
                                    className="rounded-circle float-left"
                                    alt="Pizza"
                                    width="44"
                                    height="46"
                                />
                            </div>
                            <div className="col-md-10">
                                <form>
                                    <div className="form-group ml-4">
                                        <input type="text" className="form-control" id="comments" placeholder="Write a Comment....." />
                                    </div>
                                </form>
                            </div>
                        </div>




                    </div>

                </div>

            </div>
        )
    }
}



SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(SinglePost)