import React, { Component } from 'react';
import kal from '../../photos/Kalacademy.jpg'
import './EditProfile.css';

export default class EditProfileModal extends Component {

    constructor(){
        super()
        this.innerRef = React.createRef()
        this.state = {  
            fileinputkey:Date.now(),        
            file:'',
            text:'',            
            errors:{
            }

        }
        //this.onChange = this.onChange.bind(this);
        //this.imageUpload = this.imageUpload.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">EDIT PROFILE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body editprofilediv" align-tems="center">
                            <h5 className="d-inline" > Profile Picture</h5>
                                    
                                        <div>
                                                <img
                                                 src= {kal}
                                                 className="editprofileimg"
                                                 alt="Pic"
                                             />
                                        </div>                                                                                  
                               

                                <label htmlFor="imgInput">
                                <span style={{ fontSize: 30, color: "lightgreen" }}>
                                    <i className="fas fa-image" data-toggle="tooltip" data-placement="top" title="photos/Videos" ></i>
                                </span>
                                    <input id="imgInput"
                                        name="file"
                                        type="file"
                                        style={{ display: "none" }}
                                        accept=".png,.jpeg,.jpg"
                                        onChange={this.imageUpload}
                                       
                                    />
                                </label>
                            


                            
                            <h5>Cover Picture</h5>
                            
                            <h5>
                                <input type="file" />
                                <img src="photos/Auora.jpg" alt="" className="align-items-center rounded-sm" width="414"
                                    height="216" />

                            </h5>
                            <h5>Bio</h5>
                            <i className="fa fa-pencil float-right"></i>
                            <h5>Customize Your Intro</h5>
                            <i className="fa fa-pencil float-right"></i>
                            <h5>Hobbies</h5>
                            <i className="fa fa-pencil float-right"></i>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary align-items-center">Save Proifle changes</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

