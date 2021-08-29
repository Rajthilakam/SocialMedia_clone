import React, { Component } from 'react'
import Avatar from '../common/Avatar'

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
            style= {{maxWidth: 650}}
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
                <div className = "container-fluid">
                    <div className="row">
                    <div class="col-md-2">
                      <Avatar/>
                    </div>
                    <div class="col-md-10 pl-0">
                      <h5>Mohita Sai Karthik</h5>
                      <p pt-0>August 6th at 12.00 PM</p>
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
