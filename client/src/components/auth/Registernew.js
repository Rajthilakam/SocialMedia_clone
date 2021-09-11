//import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Registernew.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { registerUser } from '../../action/authActions';


class Register extends Component {

    constructor() {
        super();
        //Local state
        this.state = {
            name: '',
            lastname: '',
            regemail: '',
            regpassword: '',
            regpassword2: '',
            dob: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            lastname: this.state.lastname,
            regemail: this.state.regemail,
            regpassword: this.state.regpassword,
            regpassword2:this.state.regpassword2

        };

        this.props.registerUser(newUser, this.props.history);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {

        const { errors } = this.state;


        return (
            <div> 
                <b><div className='button2 btn-lg btn' type='submit' data-target="#pwdModal" data-toggle="modal" >
                    Create a new account </div></b>
                <br></br>

                <div id="pwdModal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">

                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">

                                <h3 className="modal-title mt-2">SIGN UP</h3>
                            </div>

                            <div className="modal-body">
                                <div className="col-md-12">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="text-center">

                                                <div className="panel-body">
                                                <form noValidate onSubmit={this.onSubmit.bind(this)}>
                                                    <fieldset>
                                                        <div className="form-group">

                                                            <input type="text" className={classnames("form-control form-control-lg", {
                                                                "is-invalid": errors.name,
                                                            })}
                                                                placeholder="First name" name="name"
                                                                value={this.state.name}
                                                                onChange={this.onChange.bind(this)} />
                                                            {errors.name && (
                                                                <div className="invalid-feedback">{errors.name}
                                                                </div>
                                                            )}
                                                        </div>  <br></br>

                                                        <div className="form-group">
                                                            <input type="text" className={classnames("form-control form-control-lg", {
                                                                "is-invalid": errors.lastname,
                                                            })} placeholder="Last name" name="lastname"
                                                                value={this.state.lastname}
                                                                onChange={this.onChange.bind(this)} />
                                                            {errors.lastname && (
                                                                <div className="invalid-feedback">{errors.lastname}
                                                                </div>
                                                            )}
                                                        </div>  <br></br>

                                                        <div className="form-group">
                                                            <input type="email" className={classnames("form-control form-control-lg", {
                                                                "is-invalid": errors.regemail,
                                                            })}
                                                                placeholder="Email Address" name="regemail"
                                                                value={this.state.regemail}
                                                                onChange={this.onChange.bind(this)} />
                                                            {errors.regemail && (
                                                                <div className="invalid-feedback">{errors.regemail}
                                                                </div>
                                                            )}
                                                        </div> <br></br>

                                                        <div className="form group">
                                                            <input type="password" className={classnames("form-control form-control-lg", {
                                                                "is-invalid": errors.regpassword,
                                                            })}
                                                                placeholder=" Password" name="regpassword"
                                                                value={this.state.regpassword}
                                                                onChange={this.onChange.bind(this)} />
                                                            {errors.regpassword && (
                                                                <div className="invalid-feedback">{errors.regpassword}
                                                                </div>
                                                            )}
                                                        </div><br></br>

                                                        <div className="form group">
                                                            <input type="password" className={classnames("form-control form-control-lg", {
                                                                "is-invalid": errors.regpassword,
                                                            })}
                                                                placeholder="Confirm Password" name="regpassword2"
                                                                value={this.state.regpassword2}
                                                                onChange={this.onChange.bind(this)} />
                                                            {errors.regpassword && (
                                                                <div className="invalid-feedback">{errors.regpassword}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="birthday">
                                                            <h2>Birthday</h2>

                                                            <div className="form-group">
                                                                <input type="date" className="form-control" name="dob"
                                                                    value={this.state.dob}
                                                                    onChange={this.onChange.bind(this)}
                                                                    id="exampleInputdob" aria-describedby="dobHelp" placeholder="Enter DateofBirth" />
                                                            </div>

                                                        </div>

                                                        <div className="gender">
                                                            <h2>Gender</h2>
                                                            <label for="female"></label>
                                                            <input type="radio" name="gender" id="female" /> Female
                                                            <label for="male"></label>
                                                            <input type="radio" name="gender" id="male" /> Male
                                                            <label for="custom"></label>
                                                            <input type="radio" name="gender" id="custom" /> Custom
                                                        </div> <br></br>

                                                        <div className="topic">
                                                            <p>By clicking Sign Up, you agree to our <Link to="#">Terms</Link>, <Link to="#">Data Policy</Link> and <Link to="#">Cookie Policy</Link>. You may receive SMS notifications from us and can opt out at any time.</p>
                                                        </div>
                                                        <div className="col-md-12">

                                                            <button type="button" className="btn  btn-secondary" data-dismiss="modal"> CANCEL </button>
                                                            &nbsp;
                                                            <button data-toggle="modal" type="submit" className="btn  btn-primary">SIGN UP </button>
                                                        </div>
                                                    </fieldset>
                                                    </form>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            

            </div>
        );
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};


const mapStateToProps = (state) => (
    {

        errors: state.errors
    }
);

export default connect(mapStateToProps, { registerUser })(withRouter(Register));