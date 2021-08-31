import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/CommentForm';
import './PostItem.css';
import Mountain from '../../photos/Mountain.jpg'

class PostItem extends Component {




    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card topcard mt-3">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                                    <Avatar />
                                </div>

                                <div className="col-lg-10 col-md-10 col-sm-10 pl-md-2 pl-lg-4">

                                    <h5 className="d-inline">Mohita Sai Karthik</h5>
                                    <div className="dropleft float-right">
                                        <button className="btn editpostbtn" style={{ border: "none" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <h2 >...</h2>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" to="#">Save Post</Link>
                                            <Link className="dropdown-item" href="#">Edit Post</Link>
                                            <Link className="dropdown-item" href="#">Delete Post</Link>
                                        </div>
                                    </div>
                                    <p pt-0 className="d-block">August 6th at 12.00 PM</p>
                                </div>
                            </div>

                            <h6 className="mt-3">Hello There</h6>

                            <div className="row">
                                <div className="col">
                                    <img
                                        src={Mountain}
                                        className="postimg"
                                        alt="Pizza"
                                    />
                                </div>
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


                            <div class="row">
                                <div class="col pb-0">
                                    <hr />
                                </div>
                            </div>

                            <CommentForm />







                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default PostItem
