import React, { Component } from 'react';
import CoverPic from './CoverPic';
//import ProfileCenter from './ProfileCenter';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Profilenav from './Profilenav';
import Navbar from '../newsfeed/Navbar';
import FriendsList from './FriendsList'
import InfoCard from './InfoCard'
import UserPost from './UserPost';
import {getProfileById} from '../../action/profileActions';
import {getFriendsListById} from '../../action/profileActions'
import {getUserPostsById} from '../../action/postActions'

class Profile extends Component {

    constructor(props){
        super(props)
            this.state = {
                userid:this.props.match.params.id
                
            }
        }
    

    componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
          this.setState({userid:this.props.match.params.id})  
         
          this.props.getProfileById(this.props.match.params.id);
          this.props.getFriendsListById(this.props.match.params.id);
          this.props.getUserPostsById(this.props.match.params.id)
         
        
        }
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {  
            window.location.reload(true);
          }
    }
     
    render() {

        const {profile} = this.props
        const {post} = this.props.post

        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-lg-2 col-xl-2 col-md-0 col-sm-0 col-xs-0">
                    </div>
                    <div className="col-md-9">
                        <Navbar />
                        <br/>
                        <CoverPic />
                        <br/>
                        <Profilenav />
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <FriendsList profile={profile}  />
                                <InfoCard profile={profile} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <UserPost post={post}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    getFriendsListById:PropTypes.func.isRequired,
    getUserPostsById:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    profile: state.profile,
    profiles:state.profiles,
    post:state.post
  });

export default connect(mapStateToProps,{ getProfileById,getFriendsListById,getUserPostsById })(Profile)



