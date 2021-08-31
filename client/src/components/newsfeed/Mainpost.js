import React, { Component } from 'react';
import Leftnavbar from './Leftnavbar';
//import CreatePost from '../post/CreatePost';
import Createstory from '../story/Createstory';
import Nomorepost from './Nomorepost';
import Sponsored from './Sponsored';
import CreatePost from '../post/CreatePost';
import PostItem from '../post/PostItem';


export default class Mainpost extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <Leftnavbar />
                </div>
                <div className="col-md-5 col-sm-4">
                    <Createstory />
                    <CreatePost/>
                    <PostItem/>
                    <Nomorepost />                    
                </div>
                <div className="col-md-3 col-sm-3 mt-4 d-sm-none d-md-none d-lg-block d-xl-block">
                    <h4>Sponsored</h4>
                    <Sponsored/>                
                </div>

            </div>

        )
    }
}
