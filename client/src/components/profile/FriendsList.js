import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getFriendsList} from '../../action/profileActions'
import './FriendsList.css';
import Mountain from '../../photos/Mountain.jpg';


class FriendsList extends Component {

  componentDidMount() {
    this.props.getFriendsList();
}

  componentWillReceiveProps(newProps) {
  if (newProps.errors) {
    this.setState({ errors: newProps.errors });
  }

  }
  
    render() {


      const { profiles, loading } = this.props.profile;
        return  (  

                          <div className="row">
                            <div className="col">
                              <div className="card topcard mt-3" >
                                <div className="card-title mb-0">
                                  <h4 className="mt-2 ml-4">Friends</h4>
                                  <p className="ml-4">10 friends</p>
                                </div>   

                               
                                <div className="card-body friends">
                                {profiles.map((profile) => (
                                  <div className="images">
                                    <img src={Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">{profile.user.name}</h5>
                                    <h5>{profile.city}</h5>
                                  </div>))}                                
                                </div>


                              </div>
                            </div>
                          </div>
        )
    }
}

FriendsList.propTypes = {
  getFriendsList: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  profile: state.profile,
  errors:state.errors
});

export default connect(mapStateToProps, {getFriendsList})(FriendsList)