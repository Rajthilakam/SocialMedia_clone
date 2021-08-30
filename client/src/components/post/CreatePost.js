import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../common/Avatar';
import Postmodal from './Postmodal';
import './CreatePost.css';

export default class CreatePost extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card mt-3 topcard">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row mt-1">
                                    <div className="col-md-1">
                                        <div className="mt-1 ml-0 justify-content-start d-sm-none d-md-none d-lg-none d-xl-block d-inline-flex">
                                            <Avatar/>
                                        </div>
                                    </div>

                                    <div class="col-md-11">                        
                                        <div class="card postcard">
                                            <div class="card-body pb-1">
                                                <Link to="#" style= {{textDecoration: "none" }} data-toggle="modal"
                                            data-target="#postmodal" >                                            
                                            <h4 class="postcard">What's on your mind, Mo?</h4>
                                            </Link>
                                            
                                        </div>
                                        </div>
                                        <Postmodal/>
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