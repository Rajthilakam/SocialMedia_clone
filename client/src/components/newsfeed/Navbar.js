import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import fb from '../../photos/facebook.png';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../action/authActions';
import { withRouter } from 'react-router-dom';


class Navbar extends Component {

    onLogoutClick(e){
        e.preventDefault();
        console.log('logout')
        this.props.logoutUser();
        this.props.history.push('/login')
       
      }

    render() {
        return (

            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        < Link className="navbar-brand" to="#">
                            <img src={fb} width="60" height="60" alt="" />
                        </Link>


                        <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <form action="">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control-lg border searchinput"
                                        id="example-search-input"
                                        placeholder="search for friends...."
                                    />
                                </div>
                            </form>
                        </li>
                        </ul>
  
                            <div className="nav-item ml-auto">
                                <Link
                                    to=""
                                    onClick={this.onLogoutClick.bind(this)}
                                    className="nav-link"
                                >
                                    <i class="fa fa-sign-out" aria-hidden="true">
                                    <h5>LOGOUT</h5>
                                    </i>
                                   
                                </Link>
                            </div>
                        




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
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar))
