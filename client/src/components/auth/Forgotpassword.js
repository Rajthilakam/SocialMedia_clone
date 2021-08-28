

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {forgotPassword} from '../../action/authActions';

class Forgotpassword extends Component {
    constructor() {
        super();
        this.state = {
            useremail:'',
            message:'',
            alert:{},
            errors:{}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (event){
        this.setState({[event.target.name]:event.target.value})
      }

      onSubmit(e) {
        e.preventDefault();
        
        const userEmail = {
          useremail: this.state.useremail     
        };
        console.log(userEmail)  

        this.props.forgotPassword(userEmail)
        
         //axios
        //.post('/api/users/reset',userEmail)
        //.then(res=> {
            
            //this.setState({errors:{}})
            //this.setState({email:''})
           
            //console.log(this.state.message)
            //return console.log(res.data)})
        //.catch(err=> 

            //console.log(err))
           
        
    }

    


    componentWillReceiveProps(nextProps){

        if (nextProps.message){
            this.setState({message: nextProps.message});
          }

        if (nextProps.errors){
          this.setState({errors: nextProps.errors});
        }
      }


    render() {

        const useremail = this.state.errors.useremail
        const {alert} = this.state
        const message = this.state
        return (
            <div>
                <Link to="#" data-toggle="modal" data-target="#passwordModal">Forgot Password</Link>
                
                <div className="modal fade" id="passwordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Forgot Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                             {message ? (<div className="alert alert-primary" role="alert">
                               message
                            </div>) : ''}  
                            
                                <form noValidate onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" 
                                        name = "useremail"
                                        value = {this.state.useremail}
                                        className = {classnames('form-control', {'is-invalid': useremail})} 
                                        id="exampleInputEmail1" 
                                        onChange= {this.onChange.bind(this)} 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"/>
                                        {useremail ? (
                                            <div className="invalid-feedback">{useremail}</div>):''}                                        
                                    </div>
                                    <button type="submit" className="btn btn-primary" >Save changes</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Forgotpassword.propTypes = {  
    forgotPassword:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    alert:PropTypes.object.isRequired
    
  };

const mapStateToProps = (state) => ({
    errors: state.errors,
    message: state.message,
    alert:state.alert
  });


export default connect(mapStateToProps, { forgotPassword})(Forgotpassword);

