import React, { Component } from 'react';
//import CoverPic from './CoverPic';
import ProfileCenter from './ProfileCenter';
import Profilenav from './Profilenav';

export default class Profile extends Component {
    render() {
        return (
            <div className="container-fluid">
             <div className="row">
             <div class="col-lg-2 col-xl-2 col-md-0 col-sm-0 col-xs-0">
                LEFTSIDE
            </div>
            <div className="col-md-9">
                
                <Profilenav/>
                <ProfileCenter/>
            </div>
            </div> 
            </div>
        )
    }
}




