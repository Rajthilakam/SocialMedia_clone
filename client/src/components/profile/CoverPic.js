import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CoverPic.css'

class CoverPic extends Component {

    render() {

        const { profile } = this.props.profile
        const {auth} = this.props
        return (
            <div className="container imagepic">
               
                    <img class="card-img-top coverimg" 
                    src= {profile.profilepic?profile.profilepic:auth.user.avatar} 
                    alt="Profile Pic"
                    
                    />
                       
                            
            </div>
        )
    }
}


CoverPic.propTypes = {
    profile: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    profiles: state.profiles,
  });


export default connect(mapStateToProps, {})(CoverPic)  








