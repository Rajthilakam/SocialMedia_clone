import React, { Component } from 'react';
import Avatar from '../common/Avatar';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/CommentForm';
import './PostItem.css';
import Mountain from '../../photos/Mountain.jpg'
import CommentFeed from '../comments/CommentItem.js';

class PostItem extends Component {
       
    constructor(props){
        super(props)
        this.state = {
            autoFocus:false
        }

        //this.onClick = this.onClick.bind(this)
        this.toggleautofocus = this.toggleautofocus.bind(this);
    }

    toggleautofocus () {
        //console.log(e)
        //this.setState(state => ({
            //autoFocus:!state.autoFocus    
        //}));
        this.setState ({autoFocus:true})
        console.log(this.state.autoFocus)

        //this.setState(({ autoFocus }) => ({ autoFocus: !autoFocus }));
    }
    



    render() {

        //const { post, auth, showActions } = this.props;

        //const {user} = this.props.auth

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

                                    <h5 className="d-inline">Mohita</h5>
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

                            <h6 className="mt-3">text</h6>

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
                                    <button className="btn likebtn">
                                        <h5>
                                            <i className="far fa-thumbs-up fa-lg fa-fw"></i>
                                            Like
                                        </h5>
                                    </button>
                                    
                                </div>
                                <div className="col-md-6 col-sm-4">
                                    <button className="btn likebtn" onClick={this.toggleautofocus}>
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
                            <CommentForm autoFocus={this.state.autoFocus} />
                            <CommentFeed/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}



export default PostItem
