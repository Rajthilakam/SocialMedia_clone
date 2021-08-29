import React, { Component } from 'react'

export default class Createstory extends Component {
    render() {
        return (
            <div className="row">
            <div className="col">
              <div className="card mt-3 topcard">
                <div className="card-body">
                  <h5>
                    <i className="fa fa-plus pr-3"></i>
                        Create a Story
                  </h5>
                  <div className="pl-4">Share a photo or write something.</div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
