import React, { Component } from 'react';
import Navbar from './Navbar';
import Mainpost from './Mainpost';


export default class NewsFeed extends Component {
    render() {
        return (
            <div>
              <div className="container-fluid pl-0 pr-0">
                 <Navbar/>                   
                 <Mainpost/> 
              </div>  
            </div>
        )
    }
}
