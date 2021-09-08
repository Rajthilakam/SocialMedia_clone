import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Suggestion.css';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import baby from '../../photos/baby2.jpg'

class Suggestion extends Component {

    


    render() {
        return (
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>

                    <div className="col-md-9">
                        <h5 className="mt-3">PEOPLE YOU MAY KNOW</h5>
                        <div className="d-flex flex-wrap mt-5">
                            <div
                                className="card card-design"
                                style={{ maxWidth: "16rem", height: "24rem" }}
                            >
                                <img
                                    className="card-img-top img-fluid"
                                    src={baby}
                                    alt="Card cap"
                                    style={{ width: "18rem", height: "18rem" }}
                                />
                                <div className="card-body">
                                    <Link to="#" className="btn friendbtn  btn-primary d-block">ADD FRIEND</Link>
                                    <br />
                                    <Link to="#" className="btn btn-outline-secondary d-block">REMOVE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

Suggestion.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth
  });

export default connect(mapStateToProps, {})(Suggestion)







