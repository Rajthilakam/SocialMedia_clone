import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile,createProfile } from '../../action/profileActions';
import isEmpty from '../../validation/is-empty';
import './EditProfile.css';
import { profile } from 'winston';

class EditProfileModal extends Component {

    constructor(props){
        super(props)
        this.state = {  
                   
            profilepic:profile.profilepic,
            coverpic:'',
            text:'', 
            city:profile.city?profile.city:'',
            bio:profile.bio?profile.bio:'',           
            errors:{
            }

        }
        this.onChange = this.onChange.bind(this);
        this.imageUpload = this.imageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
           }

    imageUpload(e) {
        if(e.target.files) {
            this.setState(this.profilepic = e.target.files[0])
        }        
    } 

    componentDidMount() {
        //this.props.getCurrentProfile();
      }

    onSubmit(e) {
        e.preventDefault();
        console.log('in on submit')
        
        const data = new FormData()
            data.append("file",this.profilepic)
            data.append("upload_preset",'SocialMedia')
            data.append("cloud-name",'socialmediaapp')

            fetch('https://api.cloudinary.com/v1_1/socialmediaapp/image/upload',{
                method:"post",
                body:data
            }
            )
            .then(res => res.json())
            .then(data => {  
               console.log(data.url) 
               this.setState({profilepic:data.url});

               const profileData = {
                bio:this.state.bio,
                city:this.state.city,
                profilepic:data.url
                }   
                console.log('inside fetch')
               

                this.props.createProfile(profileData)
                console.log('triggered')
                console.log(profileData)
                            
            })
           
            .catch(err => {
                console.log(err)
            }) 
    }   
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }

        if (nextProps.profile.profile) {
            const profile = nextProps.profile.profile;
            profile.city = !isEmpty(profile.city) ? profile.city : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.profilepic = !isEmpty(profile.profilepic) ? profile.profilepic : '';
     
        this.setState({
            city:profile.city,
            bio:profile.bio,
            profilepic:profile.profilepic
        })
      }
    }
    
    render() {

        const {profile} = this.props.profile
        console.log('in edit profile',profile)


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
                        <div className="modal-body editprofilediv">
                            <h5 className="d-inline" > Profile Picture</h5>
                            {this.profilepic && (
                                        <div>
                                                <img
                                                 src= {URL.createObjectURL(this.profilepic)}
                                                 className="editprofileimg"
                                                 alt="Pic"
                                             />
                                        </div>                                                                                  
                               
                            )}
                                <label htmlFor="imgInput">
                                <span style={{ fontSize: 30, color: "lightgreen" }}>
                                    <i className="fas fa-image" data-toggle="tooltip" data-placement="top" title="photos/Videos" ></i>
                                </span>
                                    <input id="imgInput"
                                        name="profilepic"
                                        
                                        type="file"
                                        style={{ display: "none" }}
                                        accept=".png,.jpeg,.jpg"
                                        onChange={this.imageUpload}
                                       
                                    />
                                </label>
                            


                            
                            <h5>Cover Picture</h5>
                            {this.coverpic && (
                                        <div>
                                                <img
                                                 src= {URL.createObjectURL(this.coverpic)}
                                                 className="editprofileimg"
                                                 alt="Pic"
                                             />
                                        </div>                                                                                  
                               
                            )}
                               
                            <form onSubmit={this.onSubmit}>
                            <h5>Bio</h5>
                            <input type="text" 
                                        className="posttext" name="bio" 
                                        value={this.state.bio}  
                                        onChange={this.onChange} 
                                        placeholder= "Describe yourself..."/>
                           
                            <h5>City</h5>
                            <input type="text" 
                                        className="posttext" name="city" 
                                        value={this.state.city} 
                                        onChange={this.onChange}
                                        placeholder= "Where are you living in?"/>
                           
                           <button type="submit" 
                           className="btn btn-primary" 
                           data-dismiss="modal"
                           onClick = {this.onSubmit}
                           >Save Proifle changes</button>    
                            </form>                               
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

    EditProfileModal.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  });


export default connect(mapStateToProps, { createProfile, getCurrentProfile })(EditProfileModal)