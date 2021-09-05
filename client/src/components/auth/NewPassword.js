import React, { Component } from 'react';
//import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { newPassword } from '../../action/authActions';



class NewPassword extends Component {

    constructor() {
        super();
        this.state = {
            password: '',
            errors: {},
            alert: {
                message: ''
            },
            token: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const userPassword = {
            password: this.state.password,
            token: this.props.match.params.token
        };
        console.log(userPassword)

        this.props.newPassword(userPassword)

        //axios
        //.post('/api/users/new-password',userPassword)
        //.then(res=> {


        //return console.log(res.data)})
        //.catch(err=>
        //this.setState({errors:err.response.data}))
    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.alert) {
            this.setState({ alert: nextProps.alert });
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }


    render() {
        const { errors } = this.state
        const message = this.state.alert.message
        const error = this.state.errors.error
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputPassword">Password</label>
                        <input type="password"
                            className={classnames('form-control', { 'is-invalid': errors.password })}
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange.bind(this)}
                            id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Enter Password" />
                        {errors.password ? (
                            <div className="invalid-feedback">{errors.password}</div>) : ''}

                    </div>
                    {error ? (<div class="alert alert-warning" role="alert">
                        {error}
                    </div>) : ''}
                    {message ? (<div className="alert alert-info" role="alert">
                        Password updated Successfully.Click here <a href="/login" className="alert-link">to Login.</a>
                    </div>) : ''}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}


NewPassword.propTypes = {
    newPassword: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    message: state.message,
    alert: state.alert
});

export default connect(mapStateToProps, { newPassword })(NewPassword)