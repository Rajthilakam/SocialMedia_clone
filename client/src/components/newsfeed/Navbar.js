import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
    render() {
        return (
            
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            < Link className="navbar-brand" to="#">
                                <img src="/photos/facebook.png" width="60" height="60" alt="" />
                            </Link>


                            <ul className="navbar-nav mr-auto">

                                <form action="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control-lg border"
                                            id="example-search-input"
                                            placeholder="search for friends...."
                                        />
                                    </div>
                                </form>
                            </ul>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                </div>
            
        )
    }
}
