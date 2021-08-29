import React, { Component } from 'react';
import Navbar from './Navbar';
//import Leftnavbar from './Leftnavbar';
import Mainpost from './Mainpost';
import CreatePost from '../post/CreatePost';

export default class NewsFeed extends Component {
    render() {
        return (
            <div>
              <div className="container-fluid pl-0 pr-0">
                 <Navbar/>
                   
                 <Mainpost/> 

                 <CreatePost/>
              </div>  
            </div>
        )
    }
}
