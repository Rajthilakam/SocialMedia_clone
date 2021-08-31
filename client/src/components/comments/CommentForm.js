import React, { Component } from 'react';
import Mountain from '../../photos/Mountain.jpg';
import './CommentForm.css'

export default class CommentForm extends Component {
    render() {
        return (
            
                <div className="row">
                  
                  <div className="col-md-1 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block">
                    <img
                    src={Mountain}
                    className="rounded-circle float-left mt-3"
                    alt="Pizza"
                    width="44"
                    height="46"
                  />
                  </div>
                  <div className="col-md-11">
                    <form>
                      <div className="form-group">                         
                        <input type="text" className="form-control" id="comments"  placeholder="Write a Comment....."/>
                      </div>
                    </form>  
                </div>
              </div>
            
        )
    }
}
