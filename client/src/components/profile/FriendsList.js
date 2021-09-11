import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { getFriendsList } from '../../action/profileActions'
import './FriendsList.css';


class FriendsList extends Component {

  constructor(props){
    super(props)
    this.state = {
      userid:''
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }

  }

 
  render() {

    const { profiles } = this.props.profile;
    console.log(profiles)
    const {followings} = this.props.profile
    console.log('in followings list')
    console.log(followings)

    let friends = 0
    if (followings !== null) {
      friends = followings.length
    }


    let friendslist;
    if (followings!==null && followings.length >=1) {
      friendslist = followings.map((profile) => (

        <div className="images" key={profile._id}>
          <Link to={`/profile/${profile.user.id}`}>
            <img src={profile.profilepic} class="img" alt="Stones" />
          </Link>
          <h5 className="ml-2">{profile.user.name}</h5>
          <h5>{profile.city}</h5>
        </div>
      )
      )
    }
    else {
      friendslist = null
    }

    return (

      <div className="row">
        <div className="col">
          <div className="card topcard mt-3" >
            <div className="card-title mb-0">
              <h4 className="mt-2 ml-4">Friends</h4>
              <p className="ml-4">{friends} friends</p>
            </div>

            <div className="card-body friends">
                  {friendslist}
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
  errors: state.errors
});

export default connect(mapStateToProps, { getFriendsList })(FriendsList)