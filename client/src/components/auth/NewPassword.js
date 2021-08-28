import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

export default class NewPassword extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            errors:{},
            message:''
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
            
            //this.setState({errors:{}})
            return console.log(res.data)})
        .catch(err=>
            this.setState({errors:err.response.data}))
    }  


    render() {
        const {errors} = this.state
        const message = this.state.message
        return (
            <div>
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
                            {message ? (<div className="alert alert-primary" role="alert">
                               message
                            </div>) : ''}  
                            <button type="submit"  className="btn btn-primary">Submit</button>
                    </form>         
            </div>
        )
    }
}
