import React, { Component, useReducer } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { followUser } from '../../action/profileActions';
import './Searchfriends.css';

class Searchfriends extends Component {


    constructor() {
        super()
        this.state = {
            isFollow: false
        }
        this.onFollowUser = this.onFollowUser.bind(this)
    }

   
    onFollowUser(id) {
        console.log(id)
        this.props.followUser(id)
        this.setState({isFollow:true})
    }

    render() {

        const {searchfriends} = this.props.profile
        //const {followings} = this.props.profile 
        console.log('search',searchfriends)
        
        let friendsList;
        if (searchfriends !== null && searchfriends.length >= 1){
            friendsList = searchfriends.map((user) => (
               
                     <div className="friendslist">
                                <div className="media mt-2">

                                    <img 
                                    className="mr-3 rounded-circle" 
                                    src={user.avatar} 
                                    alt="Generic placeholder"  
                                    width="74"
                                    height="76"/>
                                  
                                    <div className="media-body">
                                       
                                            { this.state.isFollow === true ? 
                                           ( <button className="btn btn-md btn-outline-secondary my-3 ml-5 float-right " 
                                            type="button"
                                            onClick={this.onFollowUser.bind(this,user._id)}>                                           
                                            Friends
                                          </button>) : (
                                              <button className="btn btn-md btn-outline-secondary my-3 ml-5 float-right " 
                                              type="button"
                                              onClick={this.onFollowUser.bind(this,user._id)}>                                           
                                              AddFriend
                                            </button>
                                          )  }


                                        
                                     <Link to= {`/profile/${user._id}`}>
                                      <h5 className="mt-0">{user.fullname}</h5>
                                      <p>{user.email}</p>  
                                    </Link>                                                                  
                                    </div>
                                    
                                </div>
                                <hr/>
                            </div>  
                                  
            ))
        }

        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">     
                </div>
                <div className="col-md-6">
                    <div className="card topcard mt-3">
                        <div className="card-body">
                            <div className="card-title">
                                <h4 className="mb-4">People</h4>
                            </div>
    
                           {friendsList}
                           
                        </div>
                    </div>
                </div>    
            </div>        
        </div>
    
        )
    }


}

Searchfriends.propTypes = {
    searchfriends:PropTypes.array.isRequired, 
    followUser:PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired,
    Profiles: PropTypes.array.isRequired,
  };
  
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    
  })

export default connect(mapStateToProps, {followUser})(Searchfriends)





