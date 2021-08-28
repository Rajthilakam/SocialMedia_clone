import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginUser} from '../../action/authActions';
import PropTypes from 'prop-types';
import Forgotpassword from './Forgotpassword';
//import Forgotpassword from './Forgotpassword';
//import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password:'',
            errors:{},
            
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (event){
      this.setState({[event.target.name]:event.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
          email: this.state.email,
          password: this.state.password,
        };
        console.log(user)
        this.props.loginUser(user,this.props.history)
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/newsfeed");
        }
      }

    componentWillReceiveProps(nextProps){

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/newsfeed");
          }

        if (nextProps.errors){
          this.setState({errors: nextProps.errors});
        }
      }

    
    render() {

        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-6">

                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                                <label for="exampleInputEmail">Email</label>
                                <input type="email" 
                                 className= {classnames('form-control', {'is-invalid': errors.email})} 
                                 name= "email" 
                                value = {this.state.email}
                                onChange= {this.onChange.bind(this)}  
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                 {errors.email ? (
                                <div className="invalid-feedback">{errors.email}</div>):''}

                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" 
                                 name="password"
                                 value = {this.state.password}
                                 onChange= {this.onChange.bind(this)}
                                className= {classnames('form-control', {'is-invalid': errors.password})}  
                                id="exampleInputPassword1" 
                                placeholder="Password" />
                                 {errors.password ? (
                                <div className="invalid-feedback">{errors.password}</div>):''}
                            </div>                           

                            <button type="submit"  className="btn btn-primary">Submit</button>
                        </form>

                        <div>
                                <Forgotpassword/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth
  });

export default  connect(mapStateToProps, { loginUser })(Login)

