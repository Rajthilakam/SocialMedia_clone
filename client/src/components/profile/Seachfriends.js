import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Searchfriends.css';

class Searchfriends extends Component {

    render() {

        const {searchfriends} = this.props.profile
        
        let friendsList;
        if (searchfriends !== null && searchfriends.length >= 1){
            friendsList = searchfriends.map((profile) => (
                
                     <div className="friendslist">
                                <div className="media mt-2">
                                    <img 
                                    className="mr-3 rounded-circle" 
                                    src={profile.avatar} 
                                    alt="Generic placeholder"  
                                    width="74"
                                    height="76"/>
                                    <div className="media-body">
                                        <span style={{color:"Dodgerblue"}}>
                                            <i className="fas fa-check-circle fa-2x float-right mr-5"></i>
                                        </span>  
                                      <h5 className="mt-0">{profile.fullname}</h5>
                                      <p>{}</p>                                                                  
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
                            
                            <div className="friendslist">
                                <div className="media mt-2">
                                    <img className="mr-3 rounded-circle friendsimg" src="" alt="Generic placeholder"  width="74"
                                    height="76"/>
                                    <div className="media-body">
                                      <span style={{color:"skyblue"}}>
                                        <i className="fa fa-user-plus fa-2x float-right mr-5" aria-hidden="true"></i>
                                      </span>  
                                      <h5 className="mt-0">Tina Lucifer</h5>
                                      <p>Seattle</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>




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
    auth: PropTypes.object.isRequired,
    Profiles: PropTypes.array.isRequired,
  };
  
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    
  })

export default connect(mapStateToProps, {})(Searchfriends)





