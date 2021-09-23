import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class InfoCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      errors:''
    }
  }
    render() {

        const {profile} = this.props.profile
       
        return (
            <div className="row">
            <div className="col">
               <div className="card topcard mt-3">
                 <div className="card-title mb-0">
                   <h4 className="ml-4 mt-2">Info</h4>
                 </div>
                 <div className="card-body">
                   <p>
                     <i className="fas fa-home"></i>
                     <Fragment>&nbsp;</Fragment>Lives in {profile.city?profile.city:''}
                   </p>
                   <p>
                     <i className="far fa-smile"></i>
                     <Fragment>&nbsp;</Fragment>About me: {profile.bio?profile.bio:''}
                   </p>
                   <p>
                     <i className="far fa-clock"></i>
                     <Fragment>&nbsp;</Fragment>Joined September 2021
                   </p>
                   <p>
                     <i className="fas fa-graduation-cap"></i>
                     <Fragment>&nbsp;</Fragment>Studied at University of {profile.city?profile.city:''}
                   </p>
                 </div>
               </div>
             </div>
       </div>  
        )
    }
}

InfoCard.propTypes = {  
  profile:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  profiles:state.profiles,
});


export default connect(mapStateToProps, {})(InfoCard);

