import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Profilenav.css';

class Profilenav extends Component {

 

  render() {
    const { auth } = this.props
    const { profile } = this.props.profile
    const {followings} = this.props.profile
    const userid = this.props.profileid

    let followuser;
    if(followings && followings!==null && followings.length>=1) {
    followuser = followings.map(profile => profile.user.id)  
    if (followuser.includes(userid)) {
      console.log('true')
    }
    else {
      console.log('false')
    }
  }

    let profilenav;
    if (profile.user) {    
    profilenav = (auth.user.id === profile.user._id ? (
        <>
        <button className="btn btn-md btn-outline-secondary my-3 ml-5 float-right " type="button">
          <i className="fa fa-plus"></i><Fragment>&nbsp;</Fragment> Add to Story
        </button>
        <button
          className="btn btn-md btn-outline-primary ml-3 my-3 float-right"
          data-toggle="modal"
          data-target="#exampleModal"
          type="button"
        >
          <i className="fa fa-pencil"></i><Fragment>&nbsp;</Fragment> Edit Profile
        </button>
        </>
      ) : ''
    )}

    let followbutton;
    if (followuser) {
    if(followuser.some(item => item.id === userid))  {
      console.log('inside')
      followbutton = (
        <>
        <button className="btn btn-md btn-outline-primary my-3 ml-5 float-right " type="button">
          <i className="fa fa-minus"></i><Fragment>&nbsp;</Fragment> UnFriend
        </button>
      </>
      ) 
    }
    else {
      console.log('outside')
      followbutton = (
        
        <>
          <button className="btn btn-md btn-outline-primary my-3 ml-5 float-right " type="button">
              <i className="fa fa-minus"></i><Fragment>&nbsp;</Fragment>
          </button>
        </>
      )
    }
  }
   

    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-xl-12 col-md-12 col-sm-0">
            <nav className="navbar navbar-expand-lg navbar-light">

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav align-items-start">
                  <Link className="nav-item nav-link active ml-0" to="#"
                  ><h5>Posts</h5>
                    <span className="sr-only">(current)</span></Link
                  >
                  <Link className="nav-item nav-link" to="#"><h5>About</h5></Link>
                  <Link className="nav-item nav-link" href="#"><h5>Friends</h5></Link>
                  <Link className="nav-item nav-link" href="#"><h5>Photos</h5></Link>
                  <Link className="nav-item nav-link" href="#"><h5>Check-Ins</h5></Link>
                  <Link className="nav-item nav-link" href="#"><h5>Videos</h5></Link>


                  {profilenav}

                 

                  {followbutton}
                </div>
                <div className="navbar-nav mx-auto">

                </div>
              </div>
            </nav>
            <EditProfileModal profile={profile} />
          </div>
        </div>
      </div>
    )
  }
}

Profilenav.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  profiles: state.profiles,
});

export default connect(mapStateToProps, {})(Profilenav)
