

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

class Forgotpassword extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            successmsg:false,
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
          email: this.state.email     
        };
        console.log(userEmail)  
        
         axios
        .post('/api/users/reset',userEmail)
        .then(res=> {
            
            this.setState({errors:{}})
            this.setState({email:''})
            this.setState({successmsg:false})
            console.log(this.state.successmsg)
            return console.log(res.data)})
        .catch(err=>
            this.setState({errors:err.response.data}))
    }  


    render() {

        const {errors} = this.state 
        const {successmsg} = this.state
        return (
            <div>
                <Link to="#" data-toggle="modal" data-target="#exampleModal">Edit Profile</Link>
                
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Forgot Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {successmsg ? (
                            <div className="alert alert-primary" role="alert">
                                An Email has been sent to reset the password!
                            </div>) : '' }
                                <form noValidate onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" 
                                        name = "email"
                                        value = {this.state.email}
                                        className = {classnames('form-control', {'is-invalid': errors.email})} 
                                        id="exampleInputEmail1" 
                                        onChange= {this.onChange.bind(this)} 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"/>
                                        {errors.email ? (
                                            <div className="invalid-feedback">{errors.email}</div>):''}                                        
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



export default Forgotpassword;
