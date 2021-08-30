import React, { Component } from 'react'
import Avatar from '../common/Avatar';
import './Postmodal.css';

export default class Postmodal extends Component {
    render() {
        return (
            <div className="modal fade"
                id="postmodal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md modal-dialog-centered"
                    style={{ maxWidth: 650 }}
                    role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Create Post
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div class="col-md-2">
                                        <Avatar />
                                    </div>
                                    <div class="col-md-10 pl-0">
                                        <h5>Mohita Sai Karthik</h5>
                                        <p pt-0>August 6th at 12.00 PM</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="text" class="posttext" autofocus placeholder="What's on your mind Mo?" />

                                        <div class="postimg">
                                            <img
                                                src=""
                                                class="postimg"
                                                alt="Pizza"
                                            />
                                        </div>

                                        <form action="">
                                            <div class="share-icons">
                                                <h5>Share a post</h5>
                                                <label for="fileInput">
                                                    <span style={{ fontSize: 30, color: "lightgreen" }}>
                                                        <i class="fas fa-image" data-toggle="tooltip" data-placement="top" title="photos/Videos" ></i>
                                                    </span>
                                                    <input id="fileInput" type="file" style={{ display: "none" }} accept=".png,.jpeg,.jpg" />
                                                </label>
                                                <span style={{ fontSize: 30, color: "orange" }}>
                                                    <i class="fas fa-tags" data-toggle="tooltip" data-placement="top" title="Tag"></i>
                                                </span>
                                                <span style={{ fontSize: 30, color: "red" }}>
                                                    <i class="fas fa-search-location" data-toggle="tooltip" data-placement="top" title="Location"></i>
                                                </span>
                                                <span style={{ fontSize: 30, color: "yellowgreen" }}>
                                                    <i class="fas fa-skiing-nordic" data-toggle="tooltip" data-placement="top" title="Activity"></i>
                                                </span>
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-info float-right"
                                                data-dismiss="modal"
                                            >
                                                Add Post
                                            </button>

                                        </form>
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
