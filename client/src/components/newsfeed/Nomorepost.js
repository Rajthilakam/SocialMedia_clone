import React, { Component } from 'react'

export default class Nomorepost extends Component {
    render() {
        return (

            <div className="row">
                <div className="col">
                    <div className="card topcard mt-3">
                        <div className="card-body text-center">
                            <h4>No More Posts</h4>
                            <h5>Add more friends to see more posts in your News Feed.</h5>
                            <button type="button" className="btn btn-primary mt-3">
                                Find Friends
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
