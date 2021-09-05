import React, { Component } from 'react';
//import CoverPic from './CoverPic';
//import ProfileCenter from './ProfileCenter';
import Profilenav from './Profilenav';
import FriendsList from './FriendsList'
import InfoCard from './InfoCard'
import UserPost from './UserPost';

class UserProfile extends Component {

    



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-lg-2 col-xl-2 col-md-0 col-sm-0 col-xs-0">
                    </div>
                    <div className="col-md-9">
                        <Profilenav />
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <FriendsList />
                                <InfoCard />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <UserPost />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile














