import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../common/Avatar';
import Postmodal from './Postmodal';
import './CreatePost.css';

class CreatePost extends Component {



    render() {

        const { user } = this.props.auth
        //const {errors} = this.state

        return (
            
            <div className="row">
                <div className="col">
                    <div className="card mt-3 topcard">
                        <div className="card-body">
                            <div className="container">
                                <div className="row mt-1">
                                    <div className="col-md-1 mt-1 ml-0 justify-content-start d-sm-none d-md-none d-lg-none d-xl-block d-inline-flex">

                                        <Avatar src={user.avatar}/>

                                    </div>

                                    <div class="col-md-11">
                                        <div class="card postcard">
                                            <div class="card-body pb-1">
                                                <Link to="#" style={{ textDecoration: "none" }} data-toggle="modal"
                                                    data-target="#postmodal" >
                                                    <h4 class="postcard">What's on your mind, {user.name}?</h4>
                                                </Link>

                                            </div>
                                        </div>
                                        <Postmodal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


CreatePost.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,

});


export default connect(mapStateToProps, {})(CreatePost)
