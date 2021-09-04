import React, { Component } from 'react';
import './FriendsList.css';
import Mountain from '../../photos/Mountain.jpg'

export default class FriendsList extends Component {



  
    render() {
        return (
            <div class="row">
                            <div className="col">
                              <div className="card topcard mt-3" >
                                <div className="card-title mb-0">
                                  <h4 className="mt-2 ml-4">Friends</h4>
                                  <p className="ml-4">10 friends</p>
                                </div>
                
                                <div className="card-body friends">
                                  <div className="images">
                                    <img src={Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Tina</h5>
                                  </div>
                                  <div className="images">
                                    <img src= {Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Audrey</h5>
                                  </div>
                                  <div className="images">
                                    <img src= {Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Nicky</h5>
                                  </div>
                                  <div className="images">
                                    <img src= {Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Mickey</h5>
                                  </div>
                                  <div className="images">
                                    <img src= {Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Mini</h5>
                                  </div>
                                  <div className="images">
                                    <img src= {Mountain} class="img" alt="Stones" />
                                    <h5 className="ml-2">Dawn</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
        )
    }
}
